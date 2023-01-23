
.PHONY: start up-commands build run

start:
	node .

up-commands:
	node ./deploy-commands.js

build:
	docker build . -t discordbot

run:
	docker run discordbot
