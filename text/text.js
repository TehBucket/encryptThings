
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

var fromASCII = function(q){
	var str = '';
	for(var i = 0;i<q.length;i++){
		console.log(String.fromCharCode(q[i]));
		str += String.fromCharCode(q[i]);
	}
	return str;
	console.log(str);
}

var scramble = function(x, p){
	var L = x.length;
	var i = 0;
	//scrambles according to p
	for(var ii = 0;ii<L;ii++){
		var value = x[i];
		var next = (value*p) - 1 + i;
		while(next >= L){
			next = next - L;	
			}
		x[i] = x[next];
		x[next] = value;
		console.log('this: '+value+' loc: '+i+' newLoc: '+next);
		console.log(x);
		i = next;

		}
		
		return x;
	//maths each integer by p
	//for(var i = 0;i<L;i++){
		//x[i] = x[i]+p;
	//	}
	//throws in a dummy integer every p places
	//for(var i = 0;i<L;i++){
		//if(i/p == 
	//	}
	
/* 	return x;
	// maths each integer by p
	for(var i = 0;i<L;i++){
		x[i] = x[i]+p;
		}
		
	return x; */
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
	var pass = Math.floor(getMean(toASCII(password)));
	
	console.log(pass);
	
	c = scramble(c, pass);
	
	output.innerHTML = c;
	output.innerHTML = fromASCII(c);
}

//String.fromCharCode(e[i])

for(var i = 0; i < buttons.length;i++){ 
    buttons[i].addEventListener('click', function() { 
    if(this.id == 'enterText') {encrypt(textInput.value, passwordTest);} 
    else if(this.id == 'enterUnencrypt') {unencrypt();}
    }, false); 
}
