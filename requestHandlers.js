var exec = require("child_process").exec;


function start(response)
{	
	
	console.log("Request handler for start was called");
	var body='<html> <head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>'+ 
	'</head><body>'+
	'<form action="/upload" method="post">' +
	'<textarea name=text row="20" cols= "60"></textarea>'+
	'<input type= "submit" value= "Submit">'+
	'</form></body></html>';
	
	
	
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(body);
		response.end();
	
	
}


function upload(response)
{
	console.log("Request handler for upload was called");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();
}


exports.start = start;
exports.upload = upload;


