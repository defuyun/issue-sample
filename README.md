# issue-sample

steps to repro

	npm install
	npm run build

should see error

ERROR in ./node_modules/katex/dist/katex.css 2:0
Module parse failed: Unexpected character '@' (2:0)
You may need an appropriate loader to handle this file type.
| /* stylelint-disable font-family-no-missing-generic-family-keyword */
> @font-face {
|   font-family: 'KaTeX_AMS';
|   src: url(fonts/KaTeX_AMS-Regular.woff2) format('woff2'), url(fonts/KaTeX_AMS-Regular.woff) format('woff'), url(fonts/KaTeX_AMS-Regular.ttf) format('truetype');
 @ ./src/index.js 2:0-30
 @ multi ./src/index.js
