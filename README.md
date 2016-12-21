# Brunch + Babel/ES6 + Phaser

Basic boilerplate for a [Phaser](http://phaser.io) game using [Brunch](http://brunch.io), with ES6 support.

## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `npm start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `npm prod` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `game/` dir.
    * Place static files you want to be copied from `game/assets/` to `public/`.
