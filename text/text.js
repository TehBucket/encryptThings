
var buttons = document.getElementsByTagName('button'); 
var textInput = document.getElementById('textInput');
var output = document.getElementById('output');

var passwordTest = 'password';

//returns array of ascii codes
var toASCII = function(q){
	var arr = [];
	for(var i = 0;i<q.length;i++){
		arr.push(q.charCodeAt(i,i+1));
	}
	return arr;
}

var scramble = function(x, z){

}

var getMean = function(x){
	var sum = 0;
	for(var i = 0;i<x.length;i++){
		sum = sum + x[i];
		}
	return sum/x.length;
}

var multiplyArr = function(x, z){
	for(var i = 0;i<x.length;i++){
		x[i] = x[i]*z;
		}
	return x;
}

var encrypt = function(q, password){
	var e;
	var c = toASCII(q);
	var pass = getMean(toASCII(password));
	
	console.log(pass);
	output.innerHTML = c;
	
	c = scramble(c, pass);
}

//String.fromCharCode(e[i])

for(var i = 0; i < buttons.length;i++){ 
    buttons[i].addEventListener('click', function() { 
    if(this.id == 'enterText') {encrypt(textInput.value, passwordTest);} 
    else if(this.id == 'enterUnencrypt') {unencrypt();}
    }, false); 
}
