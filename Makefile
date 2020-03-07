install:
	npm install
start:
	npx babel-node bin/brain-games.js
starteven:
	npx babel-node bin/brain-even.js
startcalc:
	npx babel-node bin/brain-calc.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .