/*eslint-env browser*/
var btnGenerate = document.querySelector("#btnGenerate");
var flag = "";
var btnSquareEq = document.querySelector("#btnSquareEq"); 
var btnPolynomial3 = document.querySelector("#btnPolynomial3"); 
var squareEq = document.getElementById("squareEq"); 
var polynomial3 = document.getElementById("polynomial3"); 
btnSquareEq.onclick = function () {
	polynomial3.style.display = "none";
	squareEq.style.display = "block";
	flag = "squareEq";
}

btnPolynomial3.onclick = function () {
	squareEq.style.display = "none";
	polynomial3.style.display = "block";
	flag = "polynomial3";
}


btnGenerate.onclick = function () {
	switch(flag) {
		case "squareEq":
			SquareEqGenerate();
			break;
		case "polynomial3":
			break;
	}
}

function SquareEqGenerate(){
	var par = squareEq.querySelector("#parSquareEq"); 
	//var math = document.getElementById("math"); 
	//var mrow = document.getElementById("mrow"); 
	var signb = squareEq.querySelector("#signb");
	var bi = squareEq.querySelector("#bi");
	var b = squareEq.querySelector("#b");
	var signc = squareEq.querySelector("#signc");
	var c = squareEq.querySelector("#c");
	var x1 = Math.floor(Math.random()*20-10);
	var x2 = Math.floor(Math.random()*20-10);
	var bb = -x1 - x2;
	var cc = x1*x2;
	b.textContent = Math.abs(bb);
	c.textContent = Math.abs(cc);
	bi.textContent = 'x';
	if(bb == 1){
		signb.textContent = '+';
		b.textContent = '';
	} else if(bb == -1){
		signb.textContent = '-';
		b.textContent = '';
	} else if(bb>0){
		signb.textContent = '+';
	} else if(bb<0){
		signb.textContent = '-';
	} else {
		//var remSingb = math.removeChild(signb);
		//var remMrowb = math.removeChild(mrow);
		bi.textContent = '';
		b.textContent = '';
		signb.textContent = '';
	}
	if(cc>0){
		signc.textContent = '+';
	} else if(cc<0){
		signc.textContent = '-';
	} else {
		//var remSingc = math.removeChild(signc);
		//var remc = math.removeChild(c);
		c.textContent = '';
		signc.textContent = '';
	}
	par.textContent ='корни: ' + x1 + ' ' + x2;
}