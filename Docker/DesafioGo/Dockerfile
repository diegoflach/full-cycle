FROM golang:1-alpine AS builder

WORKDIR /go/src/app 

COPY . .

RUN go mod init && \
    go build -o server

FROM scratch

COPY --from=builder /go/src/app/server /go/src/app/server

EXPOSE 80

CMD ["/go/src/app/server"]