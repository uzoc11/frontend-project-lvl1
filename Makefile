install:
	npm install
start:
	npx babel-node bin/brain-games.js
starteven:
	npx babel-node bin/brain-even.js
startcalc:
	npx babel-node bin/brain-calc.js
startnod:
	npx babel-node bin/brain-gcd.js
startprg:
	npx babel-node bin/brain-progression.js
startprime:
	npx babel-node bin/brain-prime.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .