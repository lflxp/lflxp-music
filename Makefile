app:
	npm run build
	cd src-tauri && cargo build
	./src-tauri/target/debug/app

fast: fbuild
	go run main.go

frun: init
	npm run serve

fbuild:
	npm run build
	rm -rf core/asset/music
	mv dist core/asset/music

init:
	npm install

arm:
	GOOS=linux GOARCH=arm64 go build

tauri:
	cargo tauri dev