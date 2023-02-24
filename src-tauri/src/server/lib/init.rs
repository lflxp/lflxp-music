use axum::{
    routing::{get, post},
    http::StatusCode,
    Json, Router,
};
use serde::{Deserialize, Serialize};
use std::net::SocketAddr;
use rand::Rng;

pub async fn start() {
    tokio::spawn(async {
        // initialize tracing
        // tracing_subscriber::fmt::init();

        // build our application with a route
        let app = Router::new()
        // `GET /` goes to `root`
        .route("/", get(root))
        .route("/foo", get(get_foo).post(post_foo))
        .route("/playlist/detail", get(get_foo))
        .route("/foo/bar", get(foo_bar))
        // `POST /users` goes to `create_user`
        .route("/users", post(create_user));

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

// basic handler that responds with a static string
async fn root() -> &'static str {
    "Hello, World!"
}

async fn get_foo() -> String {
    String::from("get:foo")
}
async fn post_foo() -> String {
    String::from("post:foo")
}
async fn foo_bar() -> String {
    String::from("foo:bar")
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
