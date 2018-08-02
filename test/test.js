const util = require('util')
const timeSpan = require('time-span')
const execFile = util.promisify(require('child_process').execFile);
const path = require('path')

test('await', async () => {
	const end = timeSpan()

	await execFile(path.resolve('index.js'), [2])

	expect(end.seconds()).toBeGreaterThanOrEqual(2)
});
