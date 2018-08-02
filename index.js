#!/usr/bin/env node
const meow = require('meow');

const cli = meow(`
	Usage
	  $ await <seconds>
	Example
	  $ await 2 && echo hello world
`, {
	input: {
		type: 'number'
	}
});

const [seconds] = cli.input;

if (seconds === undefined) {
	console.error('Please input the delay time');
	process.exit(1);
}

setTimeout(() => {}, seconds * 1000);
