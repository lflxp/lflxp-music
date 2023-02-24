#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::Manager;
mod server;
use tauri::api::process::{Command, CommandEvent};

#[tauri::command]
fn greet(name: &str) -> String {
   format!("Hello, {}!", name)
}

#[tokio::main]
async fn main() {
  tauri::Builder::default()
    .setup(|app| {
      // let splashscreen_window = app.get_window("splashscreen").unwrap();
      let main_window = app.get_window("main").unwrap();
      // `new_sidecar()` expects just the filename, NOT the whole path like in JavaScript
      let (mut rx, mut child) = Command::new_sidecar("lflxp-music")
      .expect("failed to create `lflxp-music` binary command")
      .spawn()
      .expect("Failed to spawn sidecar");

      // we perform the initialization code on a new task so the app doesn't freeze
      tauri::async_runtime::spawn(async move {
        // initialize your app here instead of sleeping :)
        println!("Initializing...");
        server::lib::init::start().await;
        
        // read events such as stdout
        while let Some(event) = rx.recv().await {
          if let CommandEvent::Stdout(line) = event {
            main_window
              .emit("message", Some(format!("'{}'", line)))
              .expect("failed to emit event");
              // write to stdin
              child.write("message from Rust\n".as_bytes()).unwrap();
          }
        }   
        std::thread::sleep(std::time::Duration::from_secs(5));
        println!("Done initializing.");

        // After it's done, close the splashscreen and display the main window
        // splashscreen_window.close().unwrap();
        main_window.show().unwrap();
      });
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![greet])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
