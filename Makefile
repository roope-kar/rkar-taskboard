.PHONY: js test

js:
	npx esbuild src/index.ts \
		--minify \
		--target=es2020 \
		--sourcemap \
		--format=esm \
		--define:process.env.NODE_ENV='"production"' \
		--splitting \
		--outdir=static/build

gzip:
	gzip --best `find ./static/build/*.js`

hash:
	mv static/build/index.js static/build/index.$(shell git hash-object static/build/index.js | cut -b 1-10).js

test: ./scripts/test.js
	node ./scripts/test.js `find ./ -name *.test.*`

dev: ./scripts/server.js
	node ./scripts/server.js 8080
