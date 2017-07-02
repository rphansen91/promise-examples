function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E3) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// EDIT BELOW THIS LINE ONLY **************************************

function getFile(file) {
	// what do we do here?

}

// request all files at once in "parallel"
var p1 = getFile('file1')
var p2 = getFile('file2')
var p3 = getFile('file3')
