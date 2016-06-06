.PHONY: test
test:
	docker-compose up -d postgres
	docker-compose build test
	docker-compose run --rm test
