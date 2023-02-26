use axum::{
    routing::{get, post},
    http::{
        // HeaderValue, Method, StatusCode, header::{AUTHORIZATION, ACCESS_CONTROL_ALLOW_ORIGIN, ACCESS_CONTROL_ALLOW_HEADERS},
        StatusCode,
        uri::Uri, Request, Response,
    },
    extract::State,
    // response::IntoResponse,
    Json, Router,
};
use serde::{Deserialize, Serialize};
use std::net::SocketAddr;
use rand::Rng;
use tower_http::cors::{CorsLayer, Any};
use hyper::{client::HttpConnector, Body};
use serde_json::Value;

type Client = hyper::client::Client<HttpConnector, Body>;

pub fn start() {
    tokio::spawn(async {
        // initialize tracing
        // tracing_subscriber::fmt::init();
        let client = Client::new();

        // build our application with a route
        let app = Router::new()
        // `GET /` goes to `root`
        .route("/", get(root))
        .route("/foo", get(get_foo).post(post_foo))
        .route("/playlist/detail", get(json_bar))
        .route("/foo/bar", get(foo_bar))
        .route("/api/music/history/list", get(json_bar))
        .route("/api/music/local/list", get(foo_bar))
        // `POST /users` goes to `create_user`
        .route("/users", post(create_user))
        .route("/json", get(json_bar))
        .with_state(client)
        .layer(
            CorsLayer::new()
                // .allow_origin("*".parse::<HeaderValue>().unwrap())
                .allow_origin(Any)
                // .allow_headers([AUTHORIZATION, ACCESS_CONTROL_ALLOW_ORIGIN, ACCESS_CONTROL_ALLOW_HEADERS])
                .allow_headers(Any)
                // .allow_methods([Method::GET, Method::POST, Method::DELETE, Method::PUT, Method::PATCH])
                .allow_methods(Any)
        );

        // run our app with hyper
        // `axum::Server` is a re-export of `hyper::Server`
        let addr = SocketAddr::from(([127, 0, 0, 1], 8000));
        // tracing::debug!("listening on {}", addr);
        println!("listening on {}", addr);
        axum::Server::bind(&addr)
            .serve(app.into_make_service())
            .await
            .unwrap();
    });
        
}

async fn proxy_handler(State(client): State<Client>, mut req: Request<Body>) -> Response<Body> {
    let path = req.uri().path();
    let path_query = req
        .uri()
        .path_and_query()
        .map(|v| v.as_str())
        .unwrap_or(path);

    let uri = format!("https://mu-api.yuk0.com{}", path_query);
    println!("{} | {}", path_query, uri);

    *req.uri_mut() = Uri::try_from(uri).unwrap();

    client.request(req).await.unwrap()
}

// basic handler that responds with a static string
async fn root() -> &'static str {
    print!("hello world!");
    "Hello, World!"
}

async fn get_foo() -> String {
    println!("get_foo");
    String::from("get:foo")
}
async fn post_foo() -> String {
    println!("get_foo");
    String::from("post:foo")
}
async fn foo_bar() -> String {
    println!("get_foo");
    String::from("foo:bar")
}

async fn json_bar() -> Json<Value> {
    let json: Value = serde_json::from_str(r#"{"data":[{"id":5,"duration":300.01,"album":"","image":"https://p3.music.126.net/YglUhn-RRq6KM7Dfm6VUZw==/109951168255550269.jpg","name":"星辰大海.mp3","url":"/static/admin/星辰大海.mp3","singer":"","user":"admin"}]}"#).unwrap();
    Json(json)
}

async fn create_user(
    // this argument tells axum to parse the request body
    // as JSON into a `CreateUser` type
    Json(payload): Json<CreateUser>,
) -> (StatusCode, Json<User>) {
    // insert your application logic 
    let mut rng = rand::thread_rng();
    let user = User {
        id: rng.gen::<u64>(),
        username: payload.username,
    };

    // this will be converted into a JSON response
    // with a status code of `201 Created`
    (StatusCode::CREATED, Json(user))
}

// the input to our `create_user` handler
#[derive(Deserialize)]
struct CreateUser {
    username: String,
}

// the output to our `create_user` handler
#[derive(Serialize)]
struct User {
    id: u64,
    username: String,
}
