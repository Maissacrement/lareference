#!make

build:
	@docker build -t dns .

run: build
	@docker run -it --rm \
	  -v /tmp/.X11-unix:/tmp/.X11-unix \
	  -e DISPLAY=${DISPLAY} \
	  --network=echo_reference --ip=172.28.0.15 \
	dns

net:
	@docker network create \
		--subnet=192.168.0.0/16 \
		--gateway=192.168.0.2 \
		--opt com.docker.network.driver.mtu=9000 \
	my-net
