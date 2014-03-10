/* var scramble = function(x, p){
	var L = x.length;
	// scrambles according to p
	for(var i = 0;i<L;i++){
		var value = x[i];
		var next = (value*p) - 1 + i;
		while(next >= L){
			next = next - L;	
			}
		x[i] = x[next];
		x[next] = value;
		console.log('this: '+value+' loc: '+i+' newLoc: '+next);
		console.log(x);
		}
	// maths each integer by p
	// for(var i = 0;i<L;i++){
		// x[i] = x[i]+p;
		// }
	// throws in a dummy integer every p places
	// for(var i = 0;i<L;i++){
		// if(i/p == 
		// }
	
	return x;
} */

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
	//maths each integer by p
	//for(var i = 0;i<L;i++){
		//x[i] = x[i]+p;
	//	}
	//throws in a dummy integer every p places
	//for(var i = 0;i<L;i++){
		//if(i/p == 
	//	}
	
	return x;
}


var deScramble = function(x, p){
	var L = x.length;
	for(var i = L-1;i>=0;i--){
		var value = x[i];
		var next = value*p - 1;
		while(next >= L){
			next = next - L;	
			}
		x[i] = x[next];
		x[next] = value;
		console.log(x);
		}
		
	return x;
}

//var arr = [12,5,37,1,223];
var arr = [1,2,3,4];
var pass = 3;

console.log(arr);
var stuff = scramble(arr, pass);
console.log('----------');
console.log(stuff);
console.log('---');
console.log(deScramble(stuff, pass));