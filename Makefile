build: ui/build
	packr -z
	go build -o build/bin/hello main.go

ui/build:
	$(MAKE) -C ui build

.PHONY: clean
clean:
	packr clean
	rm -fr ui/build build
