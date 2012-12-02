(function(){
	"use strict";
	var CLI = (function(){

		var app;

		var readline = require('readline'),
    	rl = readline.createInterface(process.stdin, process.stdout);
	

		var listenSTDIN = function(){
			console.log('Entrez une commande ci dessous :');
  			rl.prompt();
  			rl.on('line', function(line) {
 				app.newOrder(line);
  				rl.prompt();
  			}).on('close', function() {
			  console.log('Bonne journée !');
			  process.exit(0);
			});
		};

		return {
			"moduleName": "CLI",

			"start": function(Marvin){
				app = Marvin;
				listenSTDIN();
			},
		}

	})();

module.exports = CLI;
})();
