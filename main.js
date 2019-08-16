/*eslint-env browser*/
//"use strict";
//флаг используется для определения: какое уравнение сейчас активно
var flag = "";
// создаем ссылку на кнопку генерации
var btnGenerate = document.querySelector("#btnGenerate");
// создаем ссылки на пункты меню выбора уравнений
var btnSquareEq = document.querySelector("#btnSquareEq");
var btnPolynomial3 = document.querySelector("#btnPolynomial3");
var btnPolynomial4 = document.querySelector("#btnPolynomial4");
var btnPhomogeneousSq = document.querySelector("#btnPhomogeneousSq");
var btnPhomogeneousPolynomial3 = document.querySelector("#btnPhomogeneousPolynomial3");
var btnMethodOfUndeterCoef = document.querySelector("#btnMethodOfUndeterCoef");
var btnInequality = document.querySelector("#btnInequality");
// создаем ссылки на сами уравнения
var squareEq = document.getElementById("SquareEq");
var polynomial3 = document.getElementById("Polynomial3");
var polynomial4 = document.getElementById("Polynomial4");
var phomogeneousSq = document.getElementById("PhomogeneousSq");
var phomogeneousPolynomial3 = document.getElementById("PhomogeneousPolynomial3");
var methodOfUndeterCoef = document.getElementById("MethodOfUndeterCoef");
var inequality = document.getElementById("Inequality");


btnSquareEq.onclick = function () {
	switching();
	squareEq.style.display = "block";
	flag = "SquareEq";
};

btnPolynomial3.onclick = function () {
	switching();
	polynomial3.style.display = "block";
	flag = "Polynomial3";
};

btnPolynomial4.onclick = function () {
	switching();
	polynomial4.style.display = "block";
	flag = "Polynomial4";
};

btnPhomogeneousSq.onclick = function () {
	switching();
	phomogeneousSq.style.display = "block";
	flag = "PhomogeneousSq";
};

btnPhomogeneousPolynomial3.onclick = function () {
	switching();
	phomogeneousPolynomial3.style.display = "block";
	flag = "PhomogeneousPolynomial3";
};

btnMethodOfUndeterCoef.onclick = function () {
	switching();
	methodOfUndeterCoef.style.display = "block";
	flag = "MethodOfUndeterCoef";
};

btnInequality.onclick = function () {
	switching();
	inequality.style.display = "block";
	flag = "Inequality";
};



// эта функция закрывает все уравнения. Нужна для экономия места.
function switching() {
	squareEq.style.display = "none";
	polynomial3.style.display = "none";
	polynomial4.style.display = "none";
	phomogeneousSq.style.display = "none";
	phomogeneousPolynomial3.style.display = "none";
	methodOfUndeterCoef.style.display = "none";
	inequality.style.display = "none";
}

//функция finalAnswers удаляет повторяющиеся элементы из массива, используется для массива корней
function finalAnswers(ans) {
	var m = {}, newans = [], i = 0;
	for (i = 0; i < ans.length; i++) {
		var v = ans[i];
		if (!m[v]) {
			newans.push(v);
			m[v] = true;
		}
	}
	return newans;
}

//возвращает кол-во цифр после запятой у числа
function amountOfNumerals(x) {
	return (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : 0;
}

function inequalityGenerate() {

}


function methodOfUndeterCoefGenerate() {
	var par1 = methodOfUndeterCoef.querySelector("#par1MethodOfUndeterCoef"),
		signb = methodOfUndeterCoef.querySelector("#signb"),
		Eqb = methodOfUndeterCoef.querySelector("#b"),
		signc = methodOfUndeterCoef.querySelector("#signc"),
		Eqc = methodOfUndeterCoef.querySelector("#c"),
		signd = methodOfUndeterCoef.querySelector("#signd"),
		Eqd = methodOfUndeterCoef.querySelector("#d"),
		signe = methodOfUndeterCoef.querySelector("#signe"),
		Eqe = methodOfUndeterCoef.querySelector("#e");
	// начало генерации
	do{
		var x1 = Math.floor(Math.random() * 15 - 7),
			x2 = Math.floor(Math.random() * 15 - 7),
			a = -x1 - x2,
			b = x1 * x2,
			x3 = Math.floor(Math.random() * 15 - 7),
			x4 = Math.floor(Math.random() * 15 - 7),
			c = -x3 - x4,
			d = x3 * x4;
	} while (c + a === 0 || d + a * c + b === 0 || b * c + a * d === 0 || b * d === 0);

	signb.textContent = (c + a > 0 ? "+" : "-");//+ первый символ
	Eqb.textContent = Math.abs(c + a);
	signc.textContent = (d + a * c + b > 0 ? "+" : "-");
	Eqc.textContent = Math.abs(d + a * c + b);
	signd.textContent = (b * c + a * d > 0 ? "+" : "-");
	Eqd.textContent = Math.abs(b * c + a * d);
	signe.textContent = (b * d > 0 ? "+" : "-");
	Eqe.textContent = Math.abs(b * d);

	var ans = finalAnswers([x1, x2, x3, x4]);

	par1.textContent = "a=" + a + "b=" + b + "c=" + c + "d=" + d + "; корни алгоритма: " + x1 + " " + x2 + " " + x3 + " " + x4 + "; реальные корни: " + ans;
}

function phomogeneousPolynomial3Generate() {
	var par = phomogeneousPolynomial3.querySelector("#parPhomogeneousPolynomial3"),
		signa = phomogeneousPolynomial3.querySelector("#signa"),
		a = phomogeneousPolynomial3.querySelector("#a"),
		signa2 = phomogeneousPolynomial3.querySelector("#signa2"),
		a2 = phomogeneousPolynomial3.querySelector("#a2"),
		signb = phomogeneousPolynomial3.querySelector("#signb"),
		b = phomogeneousPolynomial3.querySelector("#b"),
		signb2 = phomogeneousPolynomial3.querySelector("#signb2"),
		b2 = phomogeneousPolynomial3.querySelector("#b2"),
		random = Math.floor(Math.random() * 21 - 10),
		// начало генерации
		xy1 = (random === 0) ? 2 : random,
		xy2 = 1 / xy1,
		xy3 = -1;
	if (xy2 > 0) {
		a.textContent = (Math.abs(xy1) === 1 ? "" : Math.abs(xy1));
		b.textContent = (Math.abs(xy1 * xy1 + 1 - xy1) === 1 ? "" : Math.abs(xy1 * xy1 + 1 - xy1));
		signa.textContent = "";//+ первый символ
		signb.textContent = "+";
		a2.textContent = (Math.abs(xy1) === 1 ? "" : Math.abs(xy1));
		b2.textContent = (Math.abs(xy1 * xy1 + 1 - xy1) === 1 ? "" : xy1 * xy1 + 1 - xy1);
		signa2.textContent = "+";
		signb2.textContent = "+";
		if (Math.random() < 0.3) {
			signa.textContent = "-";
			signa2.textContent = "-";
		} else {
			signb.textContent = "-";
			signb2.textContent = "-";
		}
	} else {
		a.textContent = (Math.abs(xy1) === 1 ? "" : Math.abs(xy1));
		b.textContent = Math.abs(xy1 * xy1 + 1 + Math.abs(xy1)) === 1 ? "" : xy1 * xy1 + 1 + Math.abs(xy1);
		signa.textContent = "";//+ первый символ
		signb.textContent = "+";
		a2.textContent = (Math.abs(xy1) === 1 ? "" : Math.abs(xy1));
		b2.textContent = Math.abs(xy1 * xy1 + 1 + Math.abs(xy1)) === 1 ? "" : xy1 * xy1 + 1 + Math.abs(xy1);
		signa2.textContent = "+";
		signb2.textContent = "+";
	}
	var ans = finalAnswers([xy1, xy2, xy3]);

	par.textContent = "a=" + signa.textContent + a.textContent + "; b=" + signb.textContent + b.textContent + "; x/y= " + xy1 + ", " + xy2 + ", " + xy3 + "; реальные корни: " + ans;
}

function phomogeneousSqGenerate() {
	var par1 = phomogeneousSq.querySelector("#parPhomogeneousSq"),
		signa = phomogeneousSq.querySelector("#signa"),
		a = phomogeneousSq.querySelector("#a"),
		signb = phomogeneousSq.querySelector("#signb"),
		b = phomogeneousSq.querySelector("#b"),
		signc = phomogeneousSq.querySelector("#signс"),
		c = phomogeneousSq.querySelector("#c");
	do {
		var xy1 = Math.floor(Math.random() * 41 - 20) / 2,
			xy2 = Math.floor(Math.random() * 41 - 20) / 2,
			nb = -(xy1 + xy2),
			nc = xy1 * xy2;
	} while (nb === 0 || nc === 0);
	var	nab = 1,
		nac = 1;
	// доводим nb и nc в дробях nb/nab и nc/nac до целых чисел
	while (nb % 1 !== 0) {
		nb = nb * 10;
		nab = nab * 10;
	}
	while (nc % 1 !== 0) {
		nc = nc * 10;
		nac = nac * 10;
	}
	// сокращаем "дроби" nb/nab и nc/nac
	while (NOD([nb, nab]) !== 1) {//здесь могут быть баги, если нод будет равен -1
		var nod = NOD([nb, nab]);
		nb = nb / nod;
		nab = nab / nod;
	}
	while (NOD([nc, nac]) !== 1) {
		nod = NOD([nc, nac]);
		nc = nc / nod;
		nac = nac / nod;
	}
	// приводим дроби nb/nab и nc/nac к общему знаменателю
	var denominator = NOK([nac, nab]);
	nb = nb * (denominator / nab);
	nc = nc * (denominator / nac);
	var na = denominator;

	signa.textContent = "";//+ первый символ
	a.textContent = (Math.abs(na) === 1 ? "" : Math.abs(na));
	signb.textContent = (nb >= 0 ? "+" : "-");
	b.textContent = (Math.abs(nb) === 1 ? "" : Math.abs(nb));
	signc.textContent = (nc >= 0 ? "+" : "-");
	c.textContent = (Math.abs(nc) === 1 ? "" : Math.abs(nc));

	var ans = finalAnswers([xy1, xy2]);

	par1.textContent = " a=" + na + "; b=" + nb + "с="  + nc + "; корни алгоритма: " + xy1 + " " + xy2 + "; реальные корни: " + ans;
}

function polynomial4Generate() {
	var par1 = polynomial4.querySelector("#par1Polynomial4"),
		par2 = polynomial4.querySelector("#par2Polynomial4"),
		signa = polynomial4.querySelector("#signa"),
		a = polynomial4.querySelector("#a"),
		signa2 = polynomial4.querySelector("#signa2"),
		a2 = polynomial4.querySelector("#a2"),
		signb = polynomial4.querySelector("#signb"),
		b = polynomial4.querySelector("#b"),
		signb2 = polynomial4.querySelector("#signb2"),
		b2 = polynomial4.querySelector("#b2"),
		signc = polynomial4.querySelector("#signс"),
		c = polynomial4.querySelector("#c"),
		// начало генерации
		x1 = ranNum(),
		x2 = 1 / x1,
		x3 = ranNum(),
		x4 = 1 / x3;
	if (Math.random() < 0.3) {
		x1 = "DNE";
		x2 = "DNE";
		var y1 = Math.floor(Math.random() * 7 - 3) / 2,
			y2 = (x3 * x3 + 1) / x3;
	} else {
		var y1 = (x1 * x1 + 1) / x1,
			y2 = (x3 * x3 + 1) / x3;
	}
	var nb = -(y1 + y2),
		nc = y1 * y2 + 2;

	par1.textContent = "nb=" + nb + "; nc=" + nc + "; ";
	if (amountOfNumerals(nb) > 5 || amountOfNumerals(nc) > 5 || nb === 0) {
		par2.textContent = " error. numbers are too large or b = 0)";
	} else {
		var	nab = 1,
			nac = 1;
		// доводим nb и nc в дробях nb/nab и nc/nac до целых чисел
		while (nb % 1 !== 0) {
			nb = nb * 10;
			nab = nab * 10;
		}
		while (nc % 1 !== 0) {
			nc = nc * 10;
			nac = nac * 10;
		}
		par1.textContent += "nb=" + nb + "; nc=" + nc + " nab=" + nab + "; nac=" + nac + "|||";
		// сокращаем "дроби" nb/nab и nc/nac
		while (NOD([nb, nab]) !== 1) {//здесь могут быть баги, если нод будет равен -1
			var nod = NOD([nb, nab]);
			nb = nb / nod;
			nab = nab / nod;
		}
		while (NOD([nc, nac]) !== 1) {
			nod = NOD([nc, nac]);
			nc = nc / nod;
			nac = nac / nod;
		}
		par1.textContent += "nb=" + nb + "; nc=" + nc + " nab=" + nab + "; nac=" + nac;
		// приводим дроби nb/nab и nc/nac к общему знаменателю
		var denominator = NOK([nac, nab]);
		nb = nb * (denominator / nab);
		nc = nc * (denominator / nac);
		var na = denominator;
		signa.textContent = "";//+ первый символ
		a.textContent = na;
		signa2.textContent = "+";
		a2.textContent = na;
		signb.textContent = (nb > 0 ? "+" : "-");
		b.textContent = Math.abs(nb);
		signb2.textContent = (nb > 0 ? "+" : "-");
		b2.textContent = Math.abs(nb);
		signc.textContent = (nc > 0 ? "+" : "-");
		c.textContent = Math.abs(nc);

		var ans = finalAnswers([x1, x2, x3, x4]);

		par2.textContent = " a=" + signa.textContent + a.textContent + "; b=" + signb.textContent + b.textContent + "с="  + signc.textContent + c.textContent + "; корни алгоритма: " + x1 + " " + x2 + " " + x3 + " " + x4 + "; реальные корни: " + ans + " Y-ки: " + y1 + " " + y2;
	}
}

function polynomial3Generate() {
	var par = polynomial3.querySelector("#parPolynomial3"),
		signa = polynomial3.querySelector("#signa"),
		a = polynomial3.querySelector("#a"),
		signa2 = polynomial3.querySelector("#signa2"),
		a2 = polynomial3.querySelector("#a2"),
		signb = polynomial3.querySelector("#signb"),
		b = polynomial3.querySelector("#b"),
		signb2 = polynomial3.querySelector("#signb2"),
		b2 = polynomial3.querySelector("#b2"),
		random = Math.floor(Math.random() * 21 - 10),
		// начало генерации
		x1 = (random === 0) ? 2 : random,
		x2 = 1 / x1,
		x3 = -1;
	if (x2 > 0) {
		a.textContent = (Math.abs(x1) === 1 ? "" : Math.abs(x1));
		b.textContent = (Math.abs(x1 * x1 + 1 - x1) === 1 ? "" : x1 * x1 + 1 - x1);
		signa.textContent = "";//+ первый символ
		signb.textContent = "+";
		a2.textContent = Math.abs(x1);
		b2.textContent = (Math.abs(x1 * x1 + 1 - x1) === 1 ? "" : x1 * x1 + 1 - x1);
		signa2.textContent = "+";
		signb2.textContent = "+";
		if (Math.random() < 0.3) {
			signa.textContent = "-";
			signa2.textContent = "-";
		} else {
			signb.textContent = "-";
			signb2.textContent = "-";
		}
	} else {
		a.textContent = (Math.abs(x1) === 1 ? "" : Math.abs(x1));
		b.textContent = Math.abs(x1 * x1 + 1 + Math.abs(x1)) === 1 ? "" : x1 * x1 + 1 + Math.abs(x1);
		signa.textContent = "";//+ первый символ
		signb.textContent = "+";
		a2.textContent = Math.abs(x1);
		b2.textContent = Math.abs(x1 * x1 + 1 + Math.abs(x1)) === 1 ? "" : x1 * x1 + 1 + Math.abs(x1);
		signa2.textContent = "+";
		signb2.textContent = "+";
	}
	var ans = finalAnswers([x1, x2, x3]);

	par.textContent = "a=" + signa.textContent + a.textContent + "; b=" + signb.textContent + b.textContent + "; корни алгоритма: " + x1 + " " + x2 + " " + x3 + "; реальные корни: " + ans;
}

function squareEqGenerate() {
	var par = squareEq.querySelector("#parSquareEq"),
		signb = squareEq.querySelector("#signb"),
		bi = squareEq.querySelector("#bi"),
		b = squareEq.querySelector("#b"),
		signc = squareEq.querySelector("#signc"),
		c = squareEq.querySelector("#c"),
		// начало генерации
		x1 = Math.floor(Math.random() * 20 - 10),
		x2 = Math.floor(Math.random() * 20 - 10),
		bb = -x1 - x2,
		cc = x1 * x2;
	b.textContent = Math.abs(bb);
	c.textContent = Math.abs(cc);
	bi.textContent = 'x';
	if (bb === 1) {
		signb.textContent = '+';
		b.textContent = '';
	} else if (bb === -1) {
		signb.textContent = '-';
		b.textContent = '';
	} else if (bb > 0) {
		signb.textContent = '+';
	} else if (bb < 0) {
		signb.textContent = '-';
	} else {
		bi.textContent = '';
		b.textContent = '';
		signb.textContent = '';
	}
	if (cc > 0) {
		signc.textContent = '+';
	} else if (cc < 0) {
		signc.textContent = '-';
	} else {
		c.textContent = '';
		signc.textContent = '';
	}
	par.textContent = 'корни: ' + x1 + ' ' + x2;
}

// кнопка для генерации уравнения
btnGenerate.onclick = function () {
	switch (flag) {
		case "SquareEq":
			squareEqGenerate();
			break;
		case "Polynomial3":
			polynomial3Generate();
			break;
		case "Polynomial4":
			polynomial4Generate();
			break;
		case "PhomogeneousSq":
			phomogeneousSqGenerate();
			break;
		case "PhomogeneousPolynomial3":
			phomogeneousPolynomial3Generate();
			break;
		case "MethodOfUndeterCoef":
			methodOfUndeterCoefGenerate();
			break;


	}
};

function SquareEqObject(nullsAllowed) {
	// если b или c могут быть равны нулю
	if (nullsAllowed === true) {
		var x1 = Math.floor(Math.random() * 41 - 20) / 2,
			x2 = Math.floor(Math.random() * 41 - 20) / 2,
			nb = -(x1 + x2),
			nc = x1 * x2;
	} else {
		do {
			var x1 = Math.floor(Math.random() * 41 - 20) / 2,
				x2 = Math.floor(Math.random() * 41 - 20) / 2,
				nb = -(x1 + x2),
				nc = x1 * x2;
		} while (nb === 0 || nc === 0);
	}
	var	nab = 1,
		nac = 1;
	// доводим nb и nc в дробях nb/nab и nc/nac до целых чисел
	while (nb % 1 !== 0) {
		nb = nb * 10;
		nab = nab * 10;
	}
	while (nc % 1 !== 0) {
		nc = nc * 10;
		nac = nac * 10;
	}
	// сокращаем "дроби" nb/nab и nc/nac
	while (NOD([nb, nab]) !== 1) {//здесь могут быть баги, если нод будет равен -1
		var nod = NOD([nb, nab]);
		nb = nb / nod;
		nab = nab / nod;
	}
	while (NOD([nc, nac]) !== 1) {
		nod = NOD([nc, nac]);
		nc = nc / nod;
		nac = nac / nod;
	}
	// приводим дроби nb/nab и nc/nac к общему знаменателю
	var denominator = NOK([nac, nab]);
	nb = nb * (denominator / nab);
	nc = nc * (denominator / nac);
	var na = denominator;
	this.x1 = x1;
	this.x2 = x2;
	this.a = na;
	this.b = nb;
	this.c = nc;
	this.greeting = function() {
		alert('Hi! I\'m ' + this.name + '.');
	};
}

//функция NOD возвращиет наибольший общий делитель a и b, причем всегда положительный
function NOD(A) {   
	var n = A.length, x = Math.abs(A[0]);
	for (var i = 1; i < n; i++) {
		var y = Math.abs(A[ i ]);
		while (x && y){ x > y ? x %= y : y %= x; }
		x += y;
	}
	return x;
}

//функция NOK возвращиет наименьшее общее кратное a и b
function NOK(A) {   
	var  n = A.length, a = Math.abs(A[0]);
	for (var i = 1; i < n; i++) {
		var b = Math.abs(A[ i ]), c = a;
		while (a && b){ a > b ? a %= b : b %= a; } 
		a = Math.abs(c*A[ i ])/(a+b);
	}
	return a;
}

//функция ranNum возвращает рандомные числа, на которые можно безопасно делить
function ranNum() {
	var n = Math.floor(Math.random() * 21 - 10);
	var errors = [0, 3, 6, 7, 9];
	for(var i = 0; i < errors.length; i++) {
		if (Math.abs(n) === errors[i]) { 
			n = ranNum();
		}
	}
	return n;
}