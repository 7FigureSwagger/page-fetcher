	const fs = require('fs');
	const request = require('request');
	const input = process.argv.slice(2);
	console.log(input);

	request('http://www.example.com', (error, response, body) => {
	  console.log('error', error); // Print the error if one ocurred
	  console.log('statusCode', response && response.statusCode); // Print the response and the status code
	  console.log('body', body); // Print the HTML for Google homepage.
	  fs.writeFile('index.html', body, function(error) {
			if (error) throw error;	
			console.log('updated!');
		}

)});