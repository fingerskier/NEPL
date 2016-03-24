var repl = require('repl');

var replServer = repl.start({
	prompt: "NEPL"
});

replServer.context = {
	foo: 'bar',
	sum: 'thing'
}
