.PHONY: test
test:
	docker-compose build app test acceptance_test > /tmp/build.log 2>&1
	docker-compose kill app || true
	docker-compose up -d postgres app
	docker-compose run --rm test
	docker-compose run --rm acceptance_test
