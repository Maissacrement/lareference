#!make
DOCKER:= @docker
IMAGE=lareference
VERSION=1.0.0

build:
	${DOCKER} build -t . ${IMAGE}:${VERSION}

dev: build
	${DOCKER} run -it --rm ${IMAGE}:${VERSION}

tag:
	docker tag ${IMAGE}:${VERSION} ${IMAGE}:latest
