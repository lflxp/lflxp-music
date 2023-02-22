FROM golang:1.19-alpine as builder
ENV CGO_ENABLED=0 GOOS=linux GOARCH=amd64
COPY . /go/src/
WORKDIR /go/src/
RUN unset GOPATH && pwd && ls -l && \
    export GOPROXY="https://goproxy.cn" && \
    go build -v

FROM alpine:3.15
# COPY --from=builder /usr/local/go/lib/time/zoneinfo.zip /opt/zoneinfo.zip
# ENV ZONEINFO /opt/zoneinfo.zip
COPY --from=builder /go/src/lflxp-music /lflxp-music
EXPOSE 8000
CMD ["/lflxp-music"]
