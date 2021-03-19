build:
	docker-compose up --detach
test:
	docker-compose run --rm martian-robots npm test
start:
	docker-compose run --rm martian-robots node .
clean:
	docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q)
