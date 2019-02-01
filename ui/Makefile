build: node_modules node_modules/hello-api
	yarn build

node_modules:
	yarn

node_modules/hello-api:
	ln -s ../../api node_modules/hello-api

.PHONY: clean
clean:
	rm -fr build node_modules
