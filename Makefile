build:
	docker-compose up --detach
test:
	docker-compose run --rm -e MONGO_URI=mongodb://mongo:27017/test martian-robots npm test
start:
	docker-compose run --rm -e MONGO_URI=mongodb://mongo:27017/test martian-robots  node .

