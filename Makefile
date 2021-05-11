USER=node
red=`tput setaf 1`
green=`tput setaf 2`
white=`tput setaf 7`
blue=`tput setaf 4`

build:
	docker-compose build

up:
	docker-compose up

down:
	docker-compose down

start:
	docker-compose start

stop:
	docker-compose stop

sh:
	docker-compose exec --user=${USER} meu-apio-admin sh

sh\:db:
	docker-compose exec database bash
