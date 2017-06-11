# way2automation
<h2>webdriverIO automation</h2><br>
<b>Steps to Run </b>
<li>Install Node</li>
<li>npm install</li>
<li>npm test</li>
<br>
<b>Description:</b><br>
This has sample tests using WebdriverIO, NodeJS, Mocha and Chai. This use Page Objects Framework. This also use ES6

<h2>Creating New node js/ webdriverIO/ ES6/ Mocha project from Scratch</h2><br>

<b> Node Setup </b>
<li>Install node application</li>
<li>npm init (This creates package.json)</li>

<br>
<b>WebdriverIO Setup</b>
<li>npm install webdriverio --save-dev</li>
<li>npm install wdio-selenium-standalone-service --save-dev</li>
<li>npm install --save-dev wdio-mocha-framework</li>
<li>wdio config => which creates configuration</li>
<li><li>add services: ['selenium-standalone']</li>
<li>In package.json scripts, add "test" : "wdio"</li>
<br>
<b>Babel ES6 setup</b>
<li>Intellij => settings => Javascript => ECMAScript 6</li>
<li>npm install babel-core --save-dev</li>
<li>npm install babel-preset-es2015 --save-dev</li>
<li>create mocha.opts under test with --compilers js:babel-core/register</li>
<li> add .babelrc with {  "presets": ["es2015"] }</li>
 <br>
 <b>
 chai</b>
<li>npm install chai --save-dev</li>
