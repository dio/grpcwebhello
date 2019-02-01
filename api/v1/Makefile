DESCRIPTOR := hello.descriptor
PROTOS := $(wildcard *.proto)

$(DESCRIPTOR): $(PROTOS)
	protoc -I ./ \
		-I ../ \
		--go_out=paths=source_relative,plugins=grpc:. \
		--descriptor_set_out=$(DESCRIPTOR) --include_imports \
		$(PROTOS)

.PHONY: js
js: $(PROTOS)
	yarn
	protoc -I ./ \
		-I ./ \
		-I ../ \
		--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
		--js_out=import_style=commonjs,binary:. \
  		--ts_out=service=true:. \
		$(PROTOS)

.PHONY: clean
clean:
	rm *.pb.go *.js *.d.ts $(DESCRIPTOR)
