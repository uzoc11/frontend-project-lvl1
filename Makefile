install:
	npm install
publish:
	npm publish --dry-run
lint:
	npx eslint .
rec:
	sudo asciinema rec