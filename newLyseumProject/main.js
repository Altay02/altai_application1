<<<<<<< HEAD
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
var btnSumOf4Degrees = document.querySelector("#btnSumOf4Degrees");
var btnСommon = document.querySelector("#btnСommon");
// создаем ссылки на сами уравнения
var squareEq = document.getElementById("SquareEq");
var polynomial3 = document.getElementById("Polynomial3");
var polynomial4 = document.getElementById("Polynomial4");
var phomogeneousSq = document.getElementById("PhomogeneousSq");
var phomogeneousPolynomial3 = document.getElementById("PhomogeneousPolynomial3");
var methodOfUndeterCoef = document.getElementById("MethodOfUndeterCoef");
var inequality = document.getElementById("Inequality");
var sumOf4Degrees = document.getElementById("SumOf4Degrees");
var mathtest = document.getElementById("mathtest");
var common = document.getElementById("Common");

// делаем кнопкам функционал переключения
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

btnSumOf4Degrees.onclick = function () {
	switching();
	SumOf4Degrees.style.display = "block";
	flag = "SumOf4Degrees";
}

btnСommon.onclick = function () {
	switching();
	common.style.display = "block";
	flag = "Common";
}

// эта функция закрывает все уравнения-дивки. Нужна для экономия места.
function switching() {
	squareEq.style.display = "none";
	polynomial3.style.display = "none";
	polynomial4.style.display = "none";
	phomogeneousSq.style.display = "none";
	phomogeneousPolynomial3.style.display = "none";
	methodOfUndeterCoef.style.display = "none";
	inequality.style.display = "none";
	SumOf4Degrees.style.display = "none";
	common.style.display = "none";
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

// фунция для тестов и экспериментов. сейчас не используется
function testGenerate() {
	var Equation1 = new SquareEqObject();// объяляю уравнения
	var testmrow = mathtest.querySelector("#testmrow");
	var signa = testmrow.querySelector("#signa"),// объявляю элементы уравнения
		a = testmrow.querySelector("#a"),
		signb = testmrow.querySelector("#signb"),
		b = testmrow.querySelector("#b"),
		signc = testmrow.querySelector("#signc"),
		c = testmrow.querySelector("#c");
	// вывод в html
	a.textContent = Math.abs(Equation1.a);
	signa.textContent = Equation1.a >= 0 ? "" : "-";
	b.textContent = Math.abs(Equation1.b);
	signb.textContent = Equation1.b >= 0 ? "+" : "-";
	c.textContent = Math.abs(Equation1.c).toString();
	signc.textContent = Equation1.c >= 0 ? "+" : "-";

}
//*************************************************************************************
//*************************************************************************************
// генератор общих уравнений
function commonGenerate() {
	// объявление элементов уравнения
	var par1 = common.querySelector("#par1Common"),
		signa = common.querySelector("#signa"),
		Eqa = common.querySelector("#a"),
		signb = common.querySelector("#signb"),
		Eqb = common.querySelector("#b"),
		signc = common.querySelector("#signc"),
		Eqc = common.querySelector("#c"),
		signd = common.querySelector("#signd"),
		Eqd = common.querySelector("#d")
		mrowb = common.querySelector("#mrowb"),
		mrowc = common.querySelector("#mrowc");
	// обнуление следствий прошлых генераций
	mrowb.style.display = "inline-block";
	mrowc.style.display = "inline-block";
	// начало генерации
	var Equation1 = new SquareEqObject(false, 4, 1),
		x3 = Math.ceil(Math.random() * 4);// this is d
	// вывод в html
	// вывод а
	signa.textContent = Equation1.a > 0 ? "" : "-";
	Eqa.textContent = Math.abs(Equation1.a) === 1 ? "" : Math.abs(Equation1.a);
	// вывод b
	signb.textContent = Equation1.b - Equation1.a * x3 > 0 ? "+" : "-";
	Eqb.textContent = Math.abs(Equation1.b - Equation1.a * x3) === 1 ? "" : Math.abs(Equation1.b - Equation1.a * x3);
	if (Equation1.b - Equation1.a * x3 === 0) { mrowb.style.display = "none";}
	// вывод c
	signc.textContent = Equation1.c - Equation1.b * x3 > 0 ? "+" : "-";
	Eqc.textContent = Math.abs(Equation1.c - Equation1.b * x3) === 1 ? "" : Math.abs(Equation1.c - Equation1.b * x3);
	if (Equation1.c - Equation1.b * x3 === 0) { mrowc.style.display = "none";}
	// вывод d
	signd.textContent = Equation1.c * x3 > 0 ? "-" : "+";
	Eqd.textContent = Math.abs(Equation1.c * x3) === 1 ? "" : Math.abs(Equation1.c * x3);
	// вывод в html ответов
	var ans = [Equation1.x1, Equation1.x2, x3];
	ans = finalAnswers(ans);
	/*
	par1.textContent = "ans= " + Equation1.x1 + ", " + Equation1.x2 + ", " + x3 + "; finalAns= " + ans;
	*/
	par1.textContent = "корни: " + ans;
}

// генератор уравнений на сумму 4 степеней
function sumOf4DegreesGenerate() {
	// объявляю элементы уравнения
	var par =  sumOf4Degrees.querySelector("#par1SumOf4Degrees");
	var simple = sumOf4Degrees.querySelector("#Simple"),
		example = sumOf4Degrees.querySelector("#Example"),
		simplePlus = simple.querySelector("#Plus"),
		simpleMinus = simple.querySelector("#Minus"),
		simPlusB = simplePlus.querySelector("#b"),
		simPlusSignC = simplePlus.querySelector("#signc"),
		simPlusC = simplePlus.querySelector("#c"),
		simMinusB = simpleMinus.querySelector("#b"),
		simMinusSignC = simpleMinus.querySelector("#signc"),
		simMinusC = simpleMinus.querySelector("#c"),
		simPlusMrowC = simplePlus.querySelector("#mrowPlusC"),
		simMinusMrowC = simpleMinus.querySelector("#mrowMinusC"),
		simD = simple.querySelector("#d");
	// включаю отображение
		simPlusMrowC.style.display = "inline-block";
		simMinusMrowC.style.display = "inline-block";
	simple.style.display = "inline-block";
	// прячу пример
	example.style.display = "none";
	// алгоритм генерации
	var squares = [1, 4, 9],
		sum = -6 * squares[Math.floor(Math.random() * 3)],
		difference = Math.ceil(Math.random() * 5),
		tSquare = Math.pow(Math.ceil(Math.random() * 3), 2),
		tComp = sum - tSquare,
		e = Math.sqrt(-(tSquare + tComp) / 6),
		d = -(34 * tSquare * tComp - tSquare * tSquare - tComp * tComp) / 18,
		a = [1,2,4][Math.floor(Math.random() * 3)],
		r = Math.ceil(Math.random() * 11) - 6,
		t = [Math.sqrt(tSquare),-Math.sqrt(tSquare)],
		xs = [(t[0] - r) / a, (t[1] - r) / a];
	/* для разработки
	console.log(t);
	console.log(r);
	console.log(a);
	*/
	//вывод в хтмл
	simple.style.display = "inline-block";
	simPlusB.textContent = a === 1 ? "" : a;
	simPlusSignC.textContent = r + e > 0 ? "+" : "-";
	simPlusC.textContent = Math.abs(r + e);
	if (r + e === 0) {	simPlusMrowC.style.display = "none";}
	simMinusB.textContent = a === 1 ? "" : a;
	simMinusSignC.textContent = r - e > 0 ? "+" : "-";
	simMinusC.textContent = Math.abs(r - e);
	if (r - e === 0) {	simMinusMrowC.style.display = "none";}
	simD.textContent = d;
	
	par.textContent = "корни: " + xs;
}

// генератор неравенств
function inequalityGenerate() {
	// генерация рандомного знака неравенства
	var equation = inequality.querySelector("#Equation"),
		equationsFraction = inequality.querySelector("#EquationsFraction"),
		equal1 = equation.querySelector("#equal"),
		equal2 = equationsFraction.querySelector("#equal"),
		inequalitySign = "",
		amountOfEquations = Math.floor(Math.random() * 4 + 1);
	// расстановка знака неравенства
	if (amountOfEquations === 1) {
		if (Math.random() < 0.25) {
			inequalitySign = ">=";
			equal1.innerHTML = "&#x2265;";
		} else if (Math.random() < 0.5) {
			inequalitySign = "<=";
			equal1.innerHTML = "&#x2264;";
		} else if (Math.random() < 0.75) {
			inequalitySign = ">";
			equal1.innerHTML = "&#x003e;";
		} else {
			inequalitySign = "<";
			equal1.innerHTML = "&#x003c;";
		}
	} else {
		if (Math.random() < 0.25) {
			inequalitySign = ">=";
			equal2.innerHTML = "&#x2265;";
		} else if (Math.random() < 0.5) {
			inequalitySign = "<=";
			equal2.innerHTML = "&#x2264;";
		} else if (Math.random() < 0.75) {
			inequalitySign = ">";
			equal2.innerHTML = "&#x003e;";
		} else {
			inequalitySign = "<";
			equal2.innerHTML = "&#x003c;";
		}
	}
	// hignCoefSign представляет из себя пару плюса/минуса, либо минуса/плюса. Служит для того, чтоб расставлять плюсы и минусы на интервалах "прямой". roots - набор промежуточных данных про корни
	var highCoefSign = [],
		roots = [];

	var	par1 = inequality.querySelector("#parInequality"),
		// объявляю множители дроби
		numerator1 = inequality.querySelector("#numerator1"),
		denominator1 = inequality.querySelector("#denominator1"),
		numerator2 = inequality.querySelector("#numerator2"),
		denominator2 = inequality.querySelector("#denominator2"),
		// объявляю операторы скобок
		numeratorOpen1 = inequality.querySelector("#numeratorOpen1"),
		numeratorClose1 = inequality.querySelector("#numeratorClose1"),
		denominatorOpen1 = inequality.querySelector("#denominatorOpen1"),
		denominatorClose1 = inequality.querySelector("#denominatorClose1"),
		// объявление дивки неравенства-параболы
		equationsFraction = inequality.querySelector("#EquationsFraction"),
		Equation1 = new SquareEqObject(true),
		Equation2 = new SquareEqObject(true),
		Equation3 = new SquareEqObject(true),
		Equation4 = new SquareEqObject(true),
		// объявление элементов в числителе
		n1a = numerator1.querySelector("#a"),
		n1signa = numerator1.querySelector("#signa"),
		n1b = numerator1.querySelector("#b"),
		n1signb = numerator1.querySelector("#signb"),
		n1c = numerator1.querySelector("#c"),
		n1signc = numerator1.querySelector("#signc"),
		n1mrowb = numerator1.querySelector("#mrowb"),
		n1mrowc = numerator1.querySelector("#mrowc"),
		// 2 скобка числителя
		n2a = numerator2.querySelector("#a"),
		n2signa = numerator2.querySelector("#signa"),
		n2b = numerator2.querySelector("#b"),
		n2signb = numerator2.querySelector("#signb"),
		n2c = numerator2.querySelector("#c"),
		n2signc = numerator2.querySelector("#signc"),
		n2mrowb = numerator2.querySelector("#mrowb"),
		n2mrowc = numerator2.querySelector("#mrowc"),
		// объявление элементов в знаменателе
		d1a = denominator1.querySelector("#a"),
		d1signa = denominator1.querySelector("#signa"),
		d1b = denominator1.querySelector("#b"),
		d1signb = denominator1.querySelector("#signb"),
		d1c = denominator1.querySelector("#c"),
		d1signc = denominator1.querySelector("#signc"),
		d1mrowb = denominator1.querySelector("#mrowb"),
		d1mrowc = denominator1.querySelector("#mrowc"),
		// 2 скобка знаменателя
		d2a = denominator2.querySelector("#a"),
		d2signa = denominator2.querySelector("#signa"),
		d2b = denominator2.querySelector("#b"),
		d2signb = denominator2.querySelector("#signb"),
		d2c = denominator2.querySelector("#c"),
		d2signc = denominator2.querySelector("#signc"),
		d2mrowb = denominator2.querySelector("#mrowb"),
		d2mrowc = denominator2.querySelector("#mrowc");
	// обнуление мроу-скобок предыдушего ответа
	inequality.querySelector("#bracket0").style.display = "none";
	inequality.querySelector("#bracket1").style.display = "none";
	inequality.querySelector("#bracket2").style.display = "none";
	inequality.querySelector("#bracket3").style.display = "none";
	inequality.querySelector("#bracket4").style.display = "none";
	inequality.querySelector("#bracketMinusInfin").style.display = "none";
	inequality.querySelector("#bracketPlusInfin").style.display = "none";


	// объявление скобок в ответе
	if (amountOfEquations === 1) {
		// прячу дробь, вывожу простое уравнение 
		equationsFraction.style.display = "none";
		equation.style.display = "inline-block";
		// объявляю элементы неравенства
		var a = equation.querySelector("#a"),
			signa = equation.querySelector("#signa"),
			b = equation.querySelector("#b"),
			signb = equation.querySelector("#signb"),
			c = equation.querySelector("#c"),
			signc = equation.querySelector("#signc"),
			mrowb = equation.querySelector("#mrowb"),
			mrowc = equation.querySelector("#mrowc");
		// вывод хтмл
		Equation1.drawing(a, signa, b, signb, c, signc, mrowb, mrowc);
		//запись промежуточных данных
		roots = [[Equation1.x1, true], [Equation1.x2, true]];
		SORT(roots);
		highCoefSign = (Equation1.a > 0 ? ["+", "-"] : ["-", "+"]);
	} else if (amountOfEquations === 2) {
		// прячу простое уравнение, вывожу дробь 
		equationsFraction.style.display = "inline-block";
		equation.style.display = "none";
		// объявляю и вывожу элементы неравенства
		numerator1.style.display = "inline-block";
		denominator1.style.display = "inline-block";
		numerator2.style.display = "none";
		denominator2.style.display = "none";
		numeratorOpen1.textContent = "";
		numeratorClose1.textContent = "";
		denominatorOpen1.textContent = "";
		denominatorClose1.textContent = "";
		// вывожу хтмл
		Equation1.drawing(n1a, n1signa, n1b, n1signb, n1c, n1signc, n1mrowb, n1mrowc);
		Equation2.drawing(d1a, d1signa, d1b, d1signb, d1c, d1signc, d1mrowb, d1mrowc);
		// записываем матрицу корней, highCoefSign
		roots = [
			[Equation1.x1, true],
			[Equation1.x2, true],
			[Equation2.x1, false],
			[Equation2.x2, false]];
		SORT(roots);
		highCoefSign = ((Equation1.a > 0 && Equation2.a > 0) || (Equation1.a < 0 && Equation2.a < 0) ? ["+", "-"] : ["-", "+"]);
	} else if (amountOfEquations === 3) {
		// прячу простое уравнение, вывожу дробь 
		equationsFraction.style.display = "inline-block";
		equation.style.display = "none";
		// объявляю и вывожу элементы неравенства
		numerator1.style.display = "inline-block";
		denominator1.style.display = "inline-block";
		numerator2.style.display = "inline-block";
		denominator2.style.display = "none";
		numeratorOpen1.textContent = "(";
		numeratorClose1.textContent = ")";
		denominatorOpen1.textContent = "";
		denominatorClose1.textContent = "";
		// вывожу хтмл
		Equation1.drawing(n1a, n1signa, n1b, n1signb, n1c, n1signc, n1mrowb, n1mrowc);
		Equation2.drawing(n2a, n2signa, n2b, n2signb, n2c, n2signc, n2mrowb, n2mrowc);
		Equation3.drawing(d1a, d1signa, d1b, d1signb, d1c, d1signc, d1mrowb, d1mrowc);
		// записываем матрицу корней, highCoefSign
		roots = [
			[Equation1.x1, true],
			[Equation1.x2, true],
			[Equation2.x1, true],
			[Equation2.x2, true],
			[Equation3.x1, false],
			[Equation3.x2, false]];
		SORT(roots);
		var i = 0;
		i = (Equation1.a < 0 ? i+1 : i);
		i = (Equation2.a < 0 ? i+1 : i);
		i = (Equation3.a < 0 ? i+1 : i);
		highCoefSign = (i % 2 === 0 ? ["+", "-"] : ["-", "+"]);
	} else {
		// прячу простое уравнение, вывожу дробь 
		equationsFraction.style.display = "inline-block";
		equation.style.display = "none";
		// объявляю и вывожу элементы неравенства
		numerator1.style.display = "inline-block";
		denominator1.style.display = "inline-block";
		numerator2.style.display = "inline-block";
		denominator2.style.display = "inline-block";
		numeratorOpen1.textContent = "(";
		numeratorClose1.textContent = ")";
		denominatorOpen1.textContent = "(";
		denominatorClose1.textContent = ")";
		Equation1.drawing(n1a, n1signa, n1b, n1signb, n1c, n1signc, n1mrowb, n1mrowc);
		Equation2.drawing(n2a, n2signa, n2b, n2signb, n2c, n2signc, n2mrowb, n2mrowc);
		Equation3.drawing(d1a, d1signa, d1b, d1signb, d1c, d1signc, d1mrowb, d1mrowc);
		Equation4.drawing(d2a, d2signa, d2b, d2signb, d2c, d2signc, d2mrowb, d2mrowc);
		// записываем матрицу корней, highCoefSign
		roots = [
			[Equation1.x1, true],
			[Equation1.x2, true],
			[Equation2.x1, true],
			[Equation2.x2, true],
			[Equation3.x1, false],
			[Equation3.x2, false],
			[Equation4.x1, false],
			[Equation4.x2, false]];
		SORT(roots);
		var i = 0;
		i = (Equation1.a < 0 ? i+1 : i);
		i = (Equation2.a < 0 ? i+1 : i);
		i = (Equation3.a < 0 ? i+1 : i);
		i = (Equation4.a < 0 ? i+1 : i);
		highCoefSign = (i % 2 === 0 ? ["+", "-"] : ["-", "+"]);
	}
	var rootsFinal = [],
		ranges = [],
		preRootsFinal = clone(roots);// клонируем roots, поскольку дальнейший код его изменит, но мы хотим его сохранить для девелопинга
	// расстановка степеней корней, плюсов/минусов, удаление одинаковых корней, добавление +/- бесконечности => создание матрицы корней
	for(var i = 0, j = 0; i < preRootsFinal.length; i++) {
		rootsFinal.push(preRootsFinal[i]);
		rootsFinal[i].push((preRootsFinal[i][1] === true ? 1 : -1));
		if (inequalitySign === ">" || inequalitySign === "<") {
			rootsFinal[i][1] = false;
		}
		while (i < preRootsFinal.length - 1 && preRootsFinal[i][0] === preRootsFinal[i+1][0]) {
			if (preRootsFinal[i+1][1] === false) {
				rootsFinal[i][1] = false;
				rootsFinal[i][2]--;
			} else {
				rootsFinal[i][2]++;
			}
			preRootsFinal.splice(i+1, 1);
		}
		// расстановка плюсов/минусов
		rootsFinal[i].push(highCoefSign[j % 2]);
		j = (Math.abs(rootsFinal[i][2] % 2) === 1 ? j+1 : j);
	}
	// добавляем бесконечность, как максимальную точку в диапазоне
	rootsFinal.unshift([Infinity, false, 1, ""]);

	// добавляем минус бесконечность, как минимальную точку в диапазоне
	rootsFinal.push([-Infinity, false, 1, ((rootsFinal[rootsFinal.length-1][3] === "+" && Math.abs(rootsFinal[rootsFinal.length-1][2] % 2) === 1) || (rootsFinal[rootsFinal.length-1][3] === "-" && Math.abs(rootsFinal[rootsFinal.length-1][2] % 2) === 0) ? "-" : "+")]);
	// конец расстановки степеней корней, плюсов/минусов, удаления одинаковых корней, добавления +/- бесконечности => создания матрицы корней

	// удаление корней, находящихся в диапазоне между 2-мя соседними корнями, счет начинается с 1, потому что первый элемент массива не имеет знака плюс/минус
	var preRanges = clone(rootsFinal);
	for (var i = 1; i < rootsFinal.length - 1; i++) {
		if (preRanges[i][1] === true && preRanges[i][3] === preRanges[i+1][3]) {
			preRanges.splice(i, 1);
		}
	}
	// переворачиваем порядок корней
	preRanges.reverse();
	// рассчет интервалов
	if (inequalitySign === ">=" || inequalitySign === ">") {// расчет в случае положительного y
		for(var i = 0; i < preRanges.length; i++) {
			if (preRanges[i][3] === "+") {
				ranges.push([[preRanges[i][0], preRanges[i][1]], [preRanges[i+1][0],  preRanges[i+1][1]]]);
			}
		}
	} else {
		for(var i = 0; i < preRanges.length; i++) {// расчет в случае отрицательного y
			if (preRanges[i][3] === "-") {
				ranges.push([[preRanges[i][0], preRanges[i][1]], [preRanges[i+1][0],  preRanges[i+1][1]]]);
			}
		}
	}
	// запись промежуточных данных в свойства функции для девелопинга
	inequalityGenerate.rootsFinal = rootsFinal;
	inequalityGenerate.preRanges = preRanges;
	inequalityGenerate.ranges = ranges;
/* вывод промежуточных данных для разработки
	par1.textContent = " ans= " + roots + ";          rootsFinal= " + rootsFinal + "               ranges= " + ranges;
	*/
	// добавление в ranges ссылок на элементы, завязываю на все него
	for(var i = 0; i < ranges.length; i++) {
		ranges[i].push(inequality.querySelector("#bracket" + i));// ranges[i][2] - ссылка на мроу-скобку
		ranges[i][2].style.display = "inline-block";
		ranges[i][0].push(ranges[i][2].querySelector("#bracketNumber1"));
		ranges[i][1].push(ranges[i][2].querySelector("#bracketNumber2"));
		ranges[i][0].push(ranges[i][2].querySelector("#bracket" + i + "Open"));
		ranges[i][1].push(ranges[i][2].querySelector("#bracket" + i + "Close"));
		// ставим скобки
		ranges[i][0][3].textContent = ranges[i][0][1] === true ? "[" : "(";
		ranges[i][1][3].textContent = ranges[i][1][1] === true ? "]" : ")";

		// запись в html
		ranges[i][0][2].textContent = ranges[i][0][0];
		ranges[i][1][2].textContent = ranges[i][1][0];
	}
	// замена -infinity на реальный знак -бесконечности
	if (ranges[0][0][0] === -Infinity) {
		ranges[0][2].style.display = "none";
		ranges[0][2] = inequality.querySelector("#bracketMinusInfin");
		ranges[0][2].style.display = "inline-block";
		ranges[0][0][2] = ranges[0][2].querySelector("#bracketNumber1");
		ranges[0][1][2] = ranges[0][2].querySelector("#bracketNumber2");
		ranges[0][1][3] = ranges[0][2].querySelector("#bracketMinusInfinClose");
		// ставим скобки
		console.log(ranges);
		ranges[0][1][3].textContent = ranges[0][1][1] === true ? "]" : ")";

		// запись в html
		ranges[0][1][2].textContent = ranges[0][1][0];
	}
	// замена infinity на реальный знак бесконечности
	if (ranges[ranges.length-1][1][0] === Infinity) {
		ranges[ranges.length-1][2].style.display = "none";
		ranges[ranges.length-1][2] = inequality.querySelector("#bracketPlusInfin");
		ranges[ranges.length-1][2].style.display = "inline-block";
		ranges[ranges.length-1][0][2] = ranges[ranges.length-1][2].querySelector("#bracketNumber1");
		ranges[ranges.length-1][0][3] = ranges[ranges.length-1][2].querySelector("#bracketPlusInfinOpen");
		// ставим скобки
		console.log(ranges);
		ranges[ranges.length-1][0][3].textContent = ranges[ranges.length-1][0][1] === true ? "[" : "(";

		// запись в html
		ranges[ranges.length-1][0][2].textContent = ranges[ranges.length-1][0][0];
	}
}

// генератор уравнений на метод неопределенных коэффициентов
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
	// начало генерации, генерация корней и расчет коэффициентов
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
	// вывод в хтмл
	signb.textContent = (c + a > 0 ? "+" : "-");//+ первый символ
	Eqb.textContent = Math.abs(c + a);
	signc.textContent = (d + a * c + b > 0 ? "+" : "-");
	Eqc.textContent = Math.abs(d + a * c + b);
	signd.textContent = (b * c + a * d > 0 ? "+" : "-");
	Eqd.textContent = Math.abs(b * c + a * d);
	signe.textContent = (b * d > 0 ? "+" : "-");
	Eqe.textContent = Math.abs(b * d);

	var ans = finalAnswers([x1, x2, x3, x4]);
/* info for developing
	par1.textContent = "a=" + a + "b=" + b + "c=" + c + "d=" + d + "; корни алгоритма: " + x1 + " " + x2 + " " + x3 + " " + x4 + "; реальные корни: " + ans;
	*/
	// вывод корней в хтмл
	par1.textContent = "корни: " + ans;
}

// генератор однородных уравнений, переходящих в возвратные 
function phomogeneousPolynomial3Generate() {
	// объявление элементов уравнения
	var par = phomogeneousPolynomial3.querySelector("#parPhomogeneousPolynomial3"),
		signa = phomogeneousPolynomial3.querySelector("#signa"),
		a = phomogeneousPolynomial3.querySelector("#a"),
		signa2 = phomogeneousPolynomial3.querySelector("#signa2"),
		a2 = phomogeneousPolynomial3.querySelector("#a2"),
		signb = phomogeneousPolynomial3.querySelector("#signb"),
		b = phomogeneousPolynomial3.querySelector("#b"),
		signb2 = phomogeneousPolynomial3.querySelector("#signb2"),
		b2 = phomogeneousPolynomial3.querySelector("#b2"),
		random = ranNum(),
		// начало генерации, генерация корней
		xy1 = (random === 0) ? 2 : random,
		xy2 = 1 / xy1,
		xy3 = -1;
	// расчет/вывод в штмл коэффициентов
	if (xy2 > 0) {// вывод, если xy > 0
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
	} else {// вывод, если xy < 0
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
/* инфа для девелопинга
	par.textContent = "a=" + signa.textContent + a.textContent + "; b=" + signb.textContent + b.textContent + "; x/y= " + xy1 + ", " + xy2 + ", " + xy3 + "; реальные корни: " + ans;
	*/
	par.textContent = "корни: " + ans;
}

// генератор однородных уравнений, переходящих в квадратные
function phomogeneousSqGenerate() {
	// объявление элементов уравнения
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
/* инфа для девелопинга
	par1.textContent = " a=" + na + "; b=" + nb + "с="  + nc + "; корни алгоритма: " + xy1 + " " + xy2 + "; реальные корни: " + ans;
	*/
	par1.textContent = "корни: " + ans;
}

// генератор возвратных уравнений 4 степени
function polynomial4Generate() {
	// объявление элементов уравнения
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
	// расчет игриков
	if (Math.random() < 0.3) {
		x1 = "DNE";
		x2 = "DNE";
		var y1 = Math.floor(Math.random() * 7 - 3) / 2,
			y2 = (x3 * x3 + 1) / x3;
	} else {
		var y1 = (x1 * x1 + 1) / x1,
			y2 = (x3 * x3 + 1) / x3;
	}
	// расчет коэффициентов уравнения
	var nb = -(y1 + y2),
		nc = y1 * y2 + 2;
/* проверка на адекватность коэффициентов(for developing)
	par1.textContent = "nb=" + nb + "; nc=" + nc + "; ";
	*/
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
		/* инфа для девелопинга
		par1.textContent += "nb=" + nb + "; nc=" + nc + " nab=" + nab + "; nac=" + nac + "|||";
		*/
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
		/* инфа для девелопинга
		par1.textContent += "nb=" + nb + "; nc=" + nc + " nab=" + nab + "; nac=" + nac;
		*/
		// приводим дроби nb/nab и nc/nac к общему знаменателю
		var denominator = NOK([nac, nab]);
		nb = nb * (denominator / nab);
		nc = nc * (denominator / nac);
		var na = denominator;
		// вывод в html
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
// обработка и вывод ответов
		var ans = finalAnswers([x1, x2, x3, x4]);
/* info for developing
		par2.textContent = " a=" + signa.textContent + a.textContent + "; b=" + signb.textContent + b.textContent + "с="  + signc.textContent + c.textContent + "; корни алгоритма: " + x1 + " " + x2 + " " + x3 + " " + x4 + "; реальные корни: " + ans + " Y-ки: " + y1 + " " + y2;
		*/
		// вывод корней в штмл
		par2.textContent = "корни: " + ans;
	}
}

// генератор возвратные уравнений 3 степени
function polynomial3Generate() {
	// объявление элементов уравнения
	var par = polynomial3.querySelector("#parPolynomial3"),
		signa = polynomial3.querySelector("#signa"),
		a = polynomial3.querySelector("#a"),
		signa2 = polynomial3.querySelector("#signa2"),
		a2 = polynomial3.querySelector("#a2"),
		signb = polynomial3.querySelector("#signb"),
		b = polynomial3.querySelector("#b"),
		signb2 = polynomial3.querySelector("#signb2"),
		b2 = polynomial3.querySelector("#b2"),
		random = ranNum(),
		// начало генерации, корни
		x1 = (random === 0) ? 2 : random,
		x2 = 1 / x1,
		x3 = -1;
	//  расчет коэффициентов
	if (x2 > 0) {// вывод, если xy > 0
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
	} else {// вывод, если xy < 0
		a.textContent = (Math.abs(x1) === 1 ? "" : Math.abs(x1));
		b.textContent = Math.abs(x1 * x1 + 1 + Math.abs(x1)) === 1 ? "" : x1 * x1 + 1 + Math.abs(x1);
		signa.textContent = "";//+ первый символ
		signb.textContent = "+";
		a2.textContent = Math.abs(x1);
		b2.textContent = Math.abs(x1 * x1 + 1 + Math.abs(x1)) === 1 ? "" : x1 * x1 + 1 + Math.abs(x1);
		signa2.textContent = "+";
		signb2.textContent = "+";
	}
	// обработка ответов
	var ans = finalAnswers([x1, x2, x3]);
	// вывод в html
	/* инфа для разработки
	par.textContent = "a=" + signa.textContent + a.textContent + "; b=" + signb.textContent + b.textContent + "; корни алгоритма: " + x1 + " " + x2 + " " + x3 + "; реальные корни: " + ans;
	*/
	par.textContent = "корни: " + ans;
}

// генератор квадратных уравнений
function squareEqGenerate() {
	// объявление элементов уравнения
	var par = squareEq.querySelector("#parSquareEq"),
		signa = squareEq.querySelector("#signa"),
		a = squareEq.querySelector("#a"),
		signb = squareEq.querySelector("#signb"),
		b = squareEq.querySelector("#b"),
		signc = squareEq.querySelector("#signc"),
		c = squareEq.querySelector("#c"),
		mrowb = squareEq.querySelector("#mrowb"),
		mrowc = squareEq.querySelector("#mrowc"),
		// начало генерации
		/*x1 = Math.floor(Math.random() * 20 - 10),
		x2 = Math.floor(Math.random() * 20 - 10),
		bb = -x1 - x2,
		cc = x1 * x2;
		*/
		Equation1 = new SquareEqObject(true);

	Equation1.drawing(a, signa, b, signb, c, signc, mrowb, mrowc);
	/*if (Equation1.b === 1) {
		signb.textContent = '+';
		b.textContent = '';
	} else if (Equation1.b === -1) {
		signb.textContent = '-';
		b.textContent = '';
	} else if (Equation1.b > 0) {
		signb.textContent = '+';
	} else if (Equation1.b < 0) {
		signb.textContent = '-';
	} else {
		bi.textContent = '';
		b.textContent = '';
		signb.textContent = '';
	}
	if (Equation1.a === 1) {
		signa.textContent = '';
		a.textContent = '';
	} else if (Equation1.a === -1) {
		signa.textContent = '-';
		a.textContent = '';
	} else if (Equation1.a > 0) {
		signa.textContent = '';
	} else {
		signa.textContent = '-';
	} 

	if (Equation1.c > 0) {
		signc.textContent = '+';
	} else if (Equation1.c < 0) {
		signc.textContent = '-';
	} else {
		c.textContent = '';
		signc.textContent = '';
	}*/
	par.textContent = 'корни: ' + Equation1.x1 + ' ' + Equation1.x2;

}

//*****************************************************************************************
//*****************************************************************************************

// функционал кнопки для генерации уравнения. Кнопка запускает соответствующюю генерацию в зависимости от флага
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
		case "Inequality":
			inequalityGenerate();
			break;
		case "SumOf4Degrees":
			sumOf4DegreesGenerate();
			break;
		case "Common":
			commonGenerate();
			break;
		case "":
			testGenerate();
			break;

	}
};

// конструктор квадратных уравнений
function SquareEqObject(nullsAllowed, range, divider) {
	// если b или c могут быть равны нулю
	range = range || 20;
	divider = divider || 2;
	if (nullsAllowed === true) {// генерация корней с любыми коэффициентами a и b
		var x1 = Math.floor(Math.random() * (2 * range + 1) - range) / divider,
			x2 = Math.floor(Math.random() * (2 * range + 1) - range) / divider,
			nb = -(x1 + x2),
			nc = x1 * x2;
	} else {
		do {// генерация корней с ненулевыми коэффициентами a и b
			var x1 = Math.floor(Math.random() * (2 * range + 1) - range) / divider,
				x2 = Math.floor(Math.random() * (2 * range + 1) - range) / divider,
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

	if (Math.random() < 0.2) {// умножаем уравнение на -1 иногда
		na = -na;
		nb = -nb;
		nc = -nc;
	}
	// возврат корней и коэффициентов в качестве свойств
	this.x1 = x1;
	this.x2 = x2;
	this.a = na;
	this.b = nb;
	this.c = nc;
}

// метод отрисовки квадратного уравнения
SquareEqObject.prototype.drawing = function(a, signa, b, signb, c, signc, mrowb, mrowc) {
	// включаем показ всего уравнения
	mrowb.style.display = "inline-block";
	mrowc.style.display = "inline-block";
	// запись данных в штмл
	a.textContent = Math.abs(this.a);
	b.textContent = Math.abs(this.b);
	c.textContent = Math.abs(this.c);
	// расстановка плюсов/минусов, стирание нулевых одночленов
	if (this.b === 1) {
		signb.textContent = '+';
		b.textContent = '';
	} else if (this.b === -1) {
		signb.textContent = '-';
		b.textContent = '';
	} else if (this.b > 0) {
		signb.textContent = '+';
	} else if (this.b < 0) {
		signb.textContent = '-';
	} else {
		mrowb.style.display = "none";
	}
	if (this.a === 1) {
		signa.textContent = '';
		a.textContent = '';
	} else if (this.a === -1) {
		signa.textContent = '-';
		a.textContent = '';
	} else if (this.a > 0) {
		signa.textContent = '';
	} else {
		signa.textContent = '-';
	} 

	if (this.c > 0) {
		signc.textContent = '+';
	} else if (this.c < 0) {
		signc.textContent = '-';
	} else {
		mrowc.style.display = "none";
	}
}


// клонирует двумерный массив
function clone(currentArray) {
	var newArray = [];

	for (var i = 0; i < currentArray.length; i++)
		newArray[i] = currentArray[i].slice();
	return newArray;
}

//сортирует массив массивов по первым элементам массивов в массиве, чтоб эти массивы были отсортированы, тоесть фактически это сортировка корней массивов
function SORT(a) {
	a.sort(function(i1, i2){return i2[0] - i1[0]});
	for(var i = 0; i < a.length;i++) {
		if (a[i] === a[i+1]) {
			a.splice(i)
		}
	}
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
=======
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
var btnSumOf4Degrees = document.querySelector("#btnSumOf4Degrees");
var btnСommon = document.querySelector("#btnСommon");
// создаем ссылки на сами уравнения
var squareEq = document.getElementById("SquareEq");
var polynomial3 = document.getElementById("Polynomial3");
var polynomial4 = document.getElementById("Polynomial4");
var phomogeneousSq = document.getElementById("PhomogeneousSq");
var phomogeneousPolynomial3 = document.getElementById("PhomogeneousPolynomial3");
var methodOfUndeterCoef = document.getElementById("MethodOfUndeterCoef");
var inequality = document.getElementById("Inequality");
var sumOf4Degrees = document.getElementById("SumOf4Degrees");
var mathtest = document.getElementById("mathtest");
var common = document.getElementById("Common");

// делаем кнопкам функционал переключения
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

btnSumOf4Degrees.onclick = function () {
	switching();
	SumOf4Degrees.style.display = "block";
	flag = "SumOf4Degrees";
}

btnСommon.onclick = function () {
	switching();
	common.style.display = "block";
	flag = "Common";
}

// эта функция закрывает все уравнения-дивки. Нужна для экономия места.
function switching() {
	squareEq.style.display = "none";
	polynomial3.style.display = "none";
	polynomial4.style.display = "none";
	phomogeneousSq.style.display = "none";
	phomogeneousPolynomial3.style.display = "none";
	methodOfUndeterCoef.style.display = "none";
	inequality.style.display = "none";
	SumOf4Degrees.style.display = "none";
	common.style.display = "none";
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

// фунция для тестов и экспериментов. сейчас не используется
function testGenerate() {
	var Equation1 = new SquareEqObject();// объяляю уравнения
	var testmrow = mathtest.querySelector("#testmrow");
	var signa = testmrow.querySelector("#signa"),// объявляю элементы уравнения
		a = testmrow.querySelector("#a"),
		signb = testmrow.querySelector("#signb"),
		b = testmrow.querySelector("#b"),
		signc = testmrow.querySelector("#signc"),
		c = testmrow.querySelector("#c");
	// вывод в html
	a.textContent = Math.abs(Equation1.a);
	signa.textContent = Equation1.a >= 0 ? "" : "-";
	b.textContent = Math.abs(Equation1.b);
	signb.textContent = Equation1.b >= 0 ? "+" : "-";
	c.textContent = Math.abs(Equation1.c).toString();
	signc.textContent = Equation1.c >= 0 ? "+" : "-";

}
//*************************************************************************************
//*************************************************************************************
// генератор общих уравнений
function commonGenerate() {
	// объявление элементов уравнения
	var par1 = common.querySelector("#par1Common"),
		signa = common.querySelector("#signa"),
		Eqa = common.querySelector("#a"),
		signb = common.querySelector("#signb"),
		Eqb = common.querySelector("#b"),
		signc = common.querySelector("#signc"),
		Eqc = common.querySelector("#c"),
		signd = common.querySelector("#signd"),
		Eqd = common.querySelector("#d")
		mrowb = common.querySelector("#mrowb"),
		mrowc = common.querySelector("#mrowc");
	// обнуление следствий прошлых генераций
	mrowb.style.display = "inline-block";
	mrowc.style.display = "inline-block";
	// начало генерации
	var Equation1 = new SquareEqObject(false, 4, 1),
		x3 = Math.ceil(Math.random() * 4);// this is d
	// вывод в html
	// вывод а
	signa.textContent = Equation1.a > 0 ? "" : "-";
	Eqa.textContent = Math.abs(Equation1.a) === 1 ? "" : Math.abs(Equation1.a);
	// вывод b
	signb.textContent = Equation1.b - Equation1.a * x3 > 0 ? "+" : "-";
	Eqb.textContent = Math.abs(Equation1.b - Equation1.a * x3) === 1 ? "" : Math.abs(Equation1.b - Equation1.a * x3);
	if (Equation1.b - Equation1.a * x3 === 0) { mrowb.style.display = "none";}
	// вывод c
	signc.textContent = Equation1.c - Equation1.b * x3 > 0 ? "+" : "-";
	Eqc.textContent = Math.abs(Equation1.c - Equation1.b * x3) === 1 ? "" : Math.abs(Equation1.c - Equation1.b * x3);
	if (Equation1.c - Equation1.b * x3 === 0) { mrowc.style.display = "none";}
	// вывод d
	signd.textContent = Equation1.c * x3 > 0 ? "-" : "+";
	Eqd.textContent = Math.abs(Equation1.c * x3) === 1 ? "" : Math.abs(Equation1.c * x3);
	// вывод в html ответов
	var ans = [Equation1.x1, Equation1.x2, x3];
	ans = finalAnswers(ans);
	/*
	par1.textContent = "ans= " + Equation1.x1 + ", " + Equation1.x2 + ", " + x3 + "; finalAns= " + ans;
	*/
	par1.textContent = "корни: " + ans;
}

// генератор уравнений на сумму 4 степеней
function sumOf4DegreesGenerate() {
	// объявляю элементы уравнения
	var par =  sumOf4Degrees.querySelector("#par1SumOf4Degrees");
	var simple = sumOf4Degrees.querySelector("#Simple"),
		example = sumOf4Degrees.querySelector("#Example"),
		simplePlus = simple.querySelector("#Plus"),
		simpleMinus = simple.querySelector("#Minus"),
		simPlusB = simplePlus.querySelector("#b"),
		simPlusSignC = simplePlus.querySelector("#signc"),
		simPlusC = simplePlus.querySelector("#c"),
		simMinusB = simpleMinus.querySelector("#b"),
		simMinusSignC = simpleMinus.querySelector("#signc"),
		simMinusC = simpleMinus.querySelector("#c"),
		simPlusMrowC = simplePlus.querySelector("#mrowPlusC"),
		simMinusMrowC = simpleMinus.querySelector("#mrowMinusC"),
		simD = simple.querySelector("#d");
	// включаю отображение
		simPlusMrowC.style.display = "inline-block";
		simMinusMrowC.style.display = "inline-block";
	simple.style.display = "inline-block";
	// прячу пример
	example.style.display = "none";
	// алгоритм генерации
	var squares = [1, 4, 9],
		sum = -6 * squares[Math.floor(Math.random() * 3)],
		difference = Math.ceil(Math.random() * 5),
		tSquare = Math.pow(Math.ceil(Math.random() * 3), 2),
		tComp = sum - tSquare,
		e = Math.sqrt(-(tSquare + tComp) / 6),
		d = -(34 * tSquare * tComp - tSquare * tSquare - tComp * tComp) / 18,
		a = [1,2,4][Math.floor(Math.random() * 3)],
		r = Math.ceil(Math.random() * 11) - 6,
		t = [Math.sqrt(tSquare),-Math.sqrt(tSquare)],
		xs = [(t[0] - r) / a, (t[1] - r) / a];
	/* для разработки
	console.log(t);
	console.log(r);
	console.log(a);
	*/
	//вывод в хтмл
	simple.style.display = "inline-block";
	simPlusB.textContent = a === 1 ? "" : a;
	simPlusSignC.textContent = r + e > 0 ? "+" : "-";
	simPlusC.textContent = Math.abs(r + e);
	if (r + e === 0) {	simPlusMrowC.style.display = "none";}
	simMinusB.textContent = a === 1 ? "" : a;
	simMinusSignC.textContent = r - e > 0 ? "+" : "-";
	simMinusC.textContent = Math.abs(r - e);
	if (r - e === 0) {	simMinusMrowC.style.display = "none";}
	simD.textContent = d;
	
	par.textContent = "корни: " + xs;
}

// генератор неравенств
function inequalityGenerate() {
	// генерация рандомного знака неравенства
	var equation = inequality.querySelector("#Equation"),
		equationsFraction = inequality.querySelector("#EquationsFraction"),
		equal1 = equation.querySelector("#equal"),
		equal2 = equationsFraction.querySelector("#equal"),
		inequalitySign = "",
		amountOfEquations = Math.floor(Math.random() * 4 + 1);
	// расстановка знака неравенства
	if (amountOfEquations === 1) {
		if (Math.random() < 0.25) {
			inequalitySign = ">=";
			equal1.innerHTML = "&#x2265;";
		} else if (Math.random() < 0.5) {
			inequalitySign = "<=";
			equal1.innerHTML = "&#x2264;";
		} else if (Math.random() < 0.75) {
			inequalitySign = ">";
			equal1.innerHTML = "&#x003e;";
		} else {
			inequalitySign = "<";
			equal1.innerHTML = "&#x003c;";
		}
	} else {
		if (Math.random() < 0.25) {
			inequalitySign = ">=";
			equal2.innerHTML = "&#x2265;";
		} else if (Math.random() < 0.5) {
			inequalitySign = "<=";
			equal2.innerHTML = "&#x2264;";
		} else if (Math.random() < 0.75) {
			inequalitySign = ">";
			equal2.innerHTML = "&#x003e;";
		} else {
			inequalitySign = "<";
			equal2.innerHTML = "&#x003c;";
		}
	}
	// hignCoefSign представляет из себя пару плюса/минуса, либо минуса/плюса. Служит для того, чтоб расставлять плюсы и минусы на интервалах "прямой". roots - набор промежуточных данных про корни
	var highCoefSign = [],
		roots = [];

	var	par1 = inequality.querySelector("#parInequality"),
		// объявляю множители дроби
		numerator1 = inequality.querySelector("#numerator1"),
		denominator1 = inequality.querySelector("#denominator1"),
		numerator2 = inequality.querySelector("#numerator2"),
		denominator2 = inequality.querySelector("#denominator2"),
		// объявляю операторы скобок
		numeratorOpen1 = inequality.querySelector("#numeratorOpen1"),
		numeratorClose1 = inequality.querySelector("#numeratorClose1"),
		denominatorOpen1 = inequality.querySelector("#denominatorOpen1"),
		denominatorClose1 = inequality.querySelector("#denominatorClose1"),
		// объявление дивки неравенства-параболы
		equationsFraction = inequality.querySelector("#EquationsFraction"),
		Equation1 = new SquareEqObject(true),
		Equation2 = new SquareEqObject(true),
		Equation3 = new SquareEqObject(true),
		Equation4 = new SquareEqObject(true),
		// объявление элементов в числителе
		n1a = numerator1.querySelector("#a"),
		n1signa = numerator1.querySelector("#signa"),
		n1b = numerator1.querySelector("#b"),
		n1signb = numerator1.querySelector("#signb"),
		n1c = numerator1.querySelector("#c"),
		n1signc = numerator1.querySelector("#signc"),
		n1mrowb = numerator1.querySelector("#mrowb"),
		n1mrowc = numerator1.querySelector("#mrowc"),
		// 2 скобка числителя
		n2a = numerator2.querySelector("#a"),
		n2signa = numerator2.querySelector("#signa"),
		n2b = numerator2.querySelector("#b"),
		n2signb = numerator2.querySelector("#signb"),
		n2c = numerator2.querySelector("#c"),
		n2signc = numerator2.querySelector("#signc"),
		n2mrowb = numerator2.querySelector("#mrowb"),
		n2mrowc = numerator2.querySelector("#mrowc"),
		// объявление элементов в знаменателе
		d1a = denominator1.querySelector("#a"),
		d1signa = denominator1.querySelector("#signa"),
		d1b = denominator1.querySelector("#b"),
		d1signb = denominator1.querySelector("#signb"),
		d1c = denominator1.querySelector("#c"),
		d1signc = denominator1.querySelector("#signc"),
		d1mrowb = denominator1.querySelector("#mrowb"),
		d1mrowc = denominator1.querySelector("#mrowc"),
		// 2 скобка знаменателя
		d2a = denominator2.querySelector("#a"),
		d2signa = denominator2.querySelector("#signa"),
		d2b = denominator2.querySelector("#b"),
		d2signb = denominator2.querySelector("#signb"),
		d2c = denominator2.querySelector("#c"),
		d2signc = denominator2.querySelector("#signc"),
		d2mrowb = denominator2.querySelector("#mrowb"),
		d2mrowc = denominator2.querySelector("#mrowc");
	// обнуление мроу-скобок предыдушего ответа
	inequality.querySelector("#bracket0").style.display = "none";
	inequality.querySelector("#bracket1").style.display = "none";
	inequality.querySelector("#bracket2").style.display = "none";
	inequality.querySelector("#bracket3").style.display = "none";
	inequality.querySelector("#bracket4").style.display = "none";
	inequality.querySelector("#bracketMinusInfin").style.display = "none";
	inequality.querySelector("#bracketPlusInfin").style.display = "none";


	// объявление скобок в ответе
	if (amountOfEquations === 1) {
		// прячу дробь, вывожу простое уравнение 
		equationsFraction.style.display = "none";
		equation.style.display = "inline-block";
		// объявляю элементы неравенства
		var a = equation.querySelector("#a"),
			signa = equation.querySelector("#signa"),
			b = equation.querySelector("#b"),
			signb = equation.querySelector("#signb"),
			c = equation.querySelector("#c"),
			signc = equation.querySelector("#signc"),
			mrowb = equation.querySelector("#mrowb"),
			mrowc = equation.querySelector("#mrowc");
		// вывод хтмл
		Equation1.drawing(a, signa, b, signb, c, signc, mrowb, mrowc);
		//запись промежуточных данных
		roots = [[Equation1.x1, true], [Equation1.x2, true]];
		SORT(roots);
		highCoefSign = (Equation1.a > 0 ? ["+", "-"] : ["-", "+"]);
	} else if (amountOfEquations === 2) {
		// прячу простое уравнение, вывожу дробь 
		equationsFraction.style.display = "inline-block";
		equation.style.display = "none";
		// объявляю и вывожу элементы неравенства
		numerator1.style.display = "inline-block";
		denominator1.style.display = "inline-block";
		numerator2.style.display = "none";
		denominator2.style.display = "none";
		numeratorOpen1.textContent = "";
		numeratorClose1.textContent = "";
		denominatorOpen1.textContent = "";
		denominatorClose1.textContent = "";
		// вывожу хтмл
		Equation1.drawing(n1a, n1signa, n1b, n1signb, n1c, n1signc, n1mrowb, n1mrowc);
		Equation2.drawing(d1a, d1signa, d1b, d1signb, d1c, d1signc, d1mrowb, d1mrowc);
		// записываем матрицу корней, highCoefSign
		roots = [
			[Equation1.x1, true],
			[Equation1.x2, true],
			[Equation2.x1, false],
			[Equation2.x2, false]];
		SORT(roots);
		highCoefSign = ((Equation1.a > 0 && Equation2.a > 0) || (Equation1.a < 0 && Equation2.a < 0) ? ["+", "-"] : ["-", "+"]);
	} else if (amountOfEquations === 3) {
		// прячу простое уравнение, вывожу дробь 
		equationsFraction.style.display = "inline-block";
		equation.style.display = "none";
		// объявляю и вывожу элементы неравенства
		numerator1.style.display = "inline-block";
		denominator1.style.display = "inline-block";
		numerator2.style.display = "inline-block";
		denominator2.style.display = "none";
		numeratorOpen1.textContent = "(";
		numeratorClose1.textContent = ")";
		denominatorOpen1.textContent = "";
		denominatorClose1.textContent = "";
		// вывожу хтмл
		Equation1.drawing(n1a, n1signa, n1b, n1signb, n1c, n1signc, n1mrowb, n1mrowc);
		Equation2.drawing(n2a, n2signa, n2b, n2signb, n2c, n2signc, n2mrowb, n2mrowc);
		Equation3.drawing(d1a, d1signa, d1b, d1signb, d1c, d1signc, d1mrowb, d1mrowc);
		// записываем матрицу корней, highCoefSign
		roots = [
			[Equation1.x1, true],
			[Equation1.x2, true],
			[Equation2.x1, true],
			[Equation2.x2, true],
			[Equation3.x1, false],
			[Equation3.x2, false]];
		SORT(roots);
		var i = 0;
		i = (Equation1.a < 0 ? i+1 : i);
		i = (Equation2.a < 0 ? i+1 : i);
		i = (Equation3.a < 0 ? i+1 : i);
		highCoefSign = (i % 2 === 0 ? ["+", "-"] : ["-", "+"]);
	} else {
		// прячу простое уравнение, вывожу дробь 
		equationsFraction.style.display = "inline-block";
		equation.style.display = "none";
		// объявляю и вывожу элементы неравенства
		numerator1.style.display = "inline-block";
		denominator1.style.display = "inline-block";
		numerator2.style.display = "inline-block";
		denominator2.style.display = "inline-block";
		numeratorOpen1.textContent = "(";
		numeratorClose1.textContent = ")";
		denominatorOpen1.textContent = "(";
		denominatorClose1.textContent = ")";
		Equation1.drawing(n1a, n1signa, n1b, n1signb, n1c, n1signc, n1mrowb, n1mrowc);
		Equation2.drawing(n2a, n2signa, n2b, n2signb, n2c, n2signc, n2mrowb, n2mrowc);
		Equation3.drawing(d1a, d1signa, d1b, d1signb, d1c, d1signc, d1mrowb, d1mrowc);
		Equation4.drawing(d2a, d2signa, d2b, d2signb, d2c, d2signc, d2mrowb, d2mrowc);
		// записываем матрицу корней, highCoefSign
		roots = [
			[Equation1.x1, true],
			[Equation1.x2, true],
			[Equation2.x1, true],
			[Equation2.x2, true],
			[Equation3.x1, false],
			[Equation3.x2, false],
			[Equation4.x1, false],
			[Equation4.x2, false]];
		SORT(roots);
		var i = 0;
		i = (Equation1.a < 0 ? i+1 : i);
		i = (Equation2.a < 0 ? i+1 : i);
		i = (Equation3.a < 0 ? i+1 : i);
		i = (Equation4.a < 0 ? i+1 : i);
		highCoefSign = (i % 2 === 0 ? ["+", "-"] : ["-", "+"]);
	}
	var rootsFinal = [],
		ranges = [],
		preRootsFinal = clone(roots);// клонируем roots, поскольку дальнейший код его изменит, но мы хотим его сохранить для девелопинга
	// расстановка степеней корней, плюсов/минусов, удаление одинаковых корней, добавление +/- бесконечности => создание матрицы корней
	for(var i = 0, j = 0; i < preRootsFinal.length; i++) {
		rootsFinal.push(preRootsFinal[i]);
		rootsFinal[i].push((preRootsFinal[i][1] === true ? 1 : -1));
		if (inequalitySign === ">" || inequalitySign === "<") {
			rootsFinal[i][1] = false;
		}
		while (i < preRootsFinal.length - 1 && preRootsFinal[i][0] === preRootsFinal[i+1][0]) {
			if (preRootsFinal[i+1][1] === false) {
				rootsFinal[i][1] = false;
				rootsFinal[i][2]--;
			} else {
				rootsFinal[i][2]++;
			}
			preRootsFinal.splice(i+1, 1);
		}
		// расстановка плюсов/минусов
		rootsFinal[i].push(highCoefSign[j % 2]);
		j = (Math.abs(rootsFinal[i][2] % 2) === 1 ? j+1 : j);
	}
	// добавляем бесконечность, как максимальную точку в диапазоне
	rootsFinal.unshift([Infinity, false, 1, ""]);

	// добавляем минус бесконечность, как минимальную точку в диапазоне
	rootsFinal.push([-Infinity, false, 1, ((rootsFinal[rootsFinal.length-1][3] === "+" && Math.abs(rootsFinal[rootsFinal.length-1][2] % 2) === 1) || (rootsFinal[rootsFinal.length-1][3] === "-" && Math.abs(rootsFinal[rootsFinal.length-1][2] % 2) === 0) ? "-" : "+")]);
	// конец расстановки степеней корней, плюсов/минусов, удаления одинаковых корней, добавления +/- бесконечности => создания матрицы корней

	// удаление корней, находящихся в диапазоне между 2-мя соседними корнями, счет начинается с 1, потому что первый элемент массива не имеет знака плюс/минус
	var preRanges = clone(rootsFinal);
	for (var i = 1; i < rootsFinal.length - 1; i++) {
		if (preRanges[i][1] === true && preRanges[i][3] === preRanges[i+1][3]) {
			preRanges.splice(i, 1);
		}
	}
	// переворачиваем порядок корней
	preRanges.reverse();
	// рассчет интервалов
	if (inequalitySign === ">=" || inequalitySign === ">") {// расчет в случае положительного y
		for(var i = 0; i < preRanges.length; i++) {
			if (preRanges[i][3] === "+") {
				ranges.push([[preRanges[i][0], preRanges[i][1]], [preRanges[i+1][0],  preRanges[i+1][1]]]);
			}
		}
	} else {
		for(var i = 0; i < preRanges.length; i++) {// расчет в случае отрицательного y
			if (preRanges[i][3] === "-") {
				ranges.push([[preRanges[i][0], preRanges[i][1]], [preRanges[i+1][0],  preRanges[i+1][1]]]);
			}
		}
	}
	// запись промежуточных данных в свойства функции для девелопинга
	inequalityGenerate.rootsFinal = rootsFinal;
	inequalityGenerate.preRanges = preRanges;
	inequalityGenerate.ranges = ranges;
/* вывод промежуточных данных для разработки
	par1.textContent = " ans= " + roots + ";          rootsFinal= " + rootsFinal + "               ranges= " + ranges;
	*/
	// добавление в ranges ссылок на элементы, завязываю на все него
	for(var i = 0; i < ranges.length; i++) {
		ranges[i].push(inequality.querySelector("#bracket" + i));// ranges[i][2] - ссылка на мроу-скобку
		ranges[i][2].style.display = "inline-block";
		ranges[i][0].push(ranges[i][2].querySelector("#bracketNumber1"));
		ranges[i][1].push(ranges[i][2].querySelector("#bracketNumber2"));
		ranges[i][0].push(ranges[i][2].querySelector("#bracket" + i + "Open"));
		ranges[i][1].push(ranges[i][2].querySelector("#bracket" + i + "Close"));
		// ставим скобки
		ranges[i][0][3].textContent = ranges[i][0][1] === true ? "[" : "(";
		ranges[i][1][3].textContent = ranges[i][1][1] === true ? "]" : ")";

		// запись в html
		ranges[i][0][2].textContent = ranges[i][0][0];
		ranges[i][1][2].textContent = ranges[i][1][0];
	}
	// замена -infinity на реальный знак -бесконечности
	if (ranges[0][0][0] === -Infinity) {
		ranges[0][2].style.display = "none";
		ranges[0][2] = inequality.querySelector("#bracketMinusInfin");
		ranges[0][2].style.display = "inline-block";
		ranges[0][0][2] = ranges[0][2].querySelector("#bracketNumber1");
		ranges[0][1][2] = ranges[0][2].querySelector("#bracketNumber2");
		ranges[0][1][3] = ranges[0][2].querySelector("#bracketMinusInfinClose");
		// ставим скобки
		console.log(ranges);
		ranges[0][1][3].textContent = ranges[0][1][1] === true ? "]" : ")";

		// запись в html
		ranges[0][1][2].textContent = ranges[0][1][0];
	}
	// замена infinity на реальный знак бесконечности
	if (ranges[ranges.length-1][1][0] === Infinity) {
		ranges[ranges.length-1][2].style.display = "none";
		ranges[ranges.length-1][2] = inequality.querySelector("#bracketPlusInfin");
		ranges[ranges.length-1][2].style.display = "inline-block";
		ranges[ranges.length-1][0][2] = ranges[ranges.length-1][2].querySelector("#bracketNumber1");
		ranges[ranges.length-1][0][3] = ranges[ranges.length-1][2].querySelector("#bracketPlusInfinOpen");
		// ставим скобки
		console.log(ranges);
		ranges[ranges.length-1][0][3].textContent = ranges[ranges.length-1][0][1] === true ? "[" : "(";

		// запись в html
		ranges[ranges.length-1][0][2].textContent = ranges[ranges.length-1][0][0];
	}
}

// генератор уравнений на метод неопределенных коэффициентов
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
	// начало генерации, генерация корней и расчет коэффициентов
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
	// вывод в хтмл
	signb.textContent = (c + a > 0 ? "+" : "-");//+ первый символ
	Eqb.textContent = Math.abs(c + a);
	signc.textContent = (d + a * c + b > 0 ? "+" : "-");
	Eqc.textContent = Math.abs(d + a * c + b);
	signd.textContent = (b * c + a * d > 0 ? "+" : "-");
	Eqd.textContent = Math.abs(b * c + a * d);
	signe.textContent = (b * d > 0 ? "+" : "-");
	Eqe.textContent = Math.abs(b * d);

	var ans = finalAnswers([x1, x2, x3, x4]);
/* info for developing
	par1.textContent = "a=" + a + "b=" + b + "c=" + c + "d=" + d + "; корни алгоритма: " + x1 + " " + x2 + " " + x3 + " " + x4 + "; реальные корни: " + ans;
	*/
	// вывод корней в хтмл
	par1.textContent = "корни: " + ans;
}

// генератор однородных уравнений, переходящих в возвратные 
function phomogeneousPolynomial3Generate() {
	// объявление элементов уравнения
	var par = phomogeneousPolynomial3.querySelector("#parPhomogeneousPolynomial3"),
		signa = phomogeneousPolynomial3.querySelector("#signa"),
		a = phomogeneousPolynomial3.querySelector("#a"),
		signa2 = phomogeneousPolynomial3.querySelector("#signa2"),
		a2 = phomogeneousPolynomial3.querySelector("#a2"),
		signb = phomogeneousPolynomial3.querySelector("#signb"),
		b = phomogeneousPolynomial3.querySelector("#b"),
		signb2 = phomogeneousPolynomial3.querySelector("#signb2"),
		b2 = phomogeneousPolynomial3.querySelector("#b2"),
		random = ranNum(),
		// начало генерации, генерация корней
		xy1 = (random === 0) ? 2 : random,
		xy2 = 1 / xy1,
		xy3 = -1;
	// расчет/вывод в штмл коэффициентов
	if (xy2 > 0) {// вывод, если xy > 0
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
	} else {// вывод, если xy < 0
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
/* инфа для девелопинга
	par.textContent = "a=" + signa.textContent + a.textContent + "; b=" + signb.textContent + b.textContent + "; x/y= " + xy1 + ", " + xy2 + ", " + xy3 + "; реальные корни: " + ans;
	*/
	par.textContent = "корни: " + ans;
}

// генератор однородных уравнений, переходящих в квадратные
function phomogeneousSqGenerate() {
	// объявление элементов уравнения
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
/* инфа для девелопинга
	par1.textContent = " a=" + na + "; b=" + nb + "с="  + nc + "; корни алгоритма: " + xy1 + " " + xy2 + "; реальные корни: " + ans;
	*/
	par1.textContent = "корни: " + ans;
}

// генератор возвратных уравнений 4 степени
function polynomial4Generate() {
	// объявление элементов уравнения
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
	// расчет игриков
	if (Math.random() < 0.3) {
		x1 = "DNE";
		x2 = "DNE";
		var y1 = Math.floor(Math.random() * 7 - 3) / 2,
			y2 = (x3 * x3 + 1) / x3;
	} else {
		var y1 = (x1 * x1 + 1) / x1,
			y2 = (x3 * x3 + 1) / x3;
	}
	// расчет коэффициентов уравнения
	var nb = -(y1 + y2),
		nc = y1 * y2 + 2;
/* проверка на адекватность коэффициентов(for developing)
	par1.textContent = "nb=" + nb + "; nc=" + nc + "; ";
	*/
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
		/* инфа для девелопинга
		par1.textContent += "nb=" + nb + "; nc=" + nc + " nab=" + nab + "; nac=" + nac + "|||";
		*/
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
		/* инфа для девелопинга
		par1.textContent += "nb=" + nb + "; nc=" + nc + " nab=" + nab + "; nac=" + nac;
		*/
		// приводим дроби nb/nab и nc/nac к общему знаменателю
		var denominator = NOK([nac, nab]);
		nb = nb * (denominator / nab);
		nc = nc * (denominator / nac);
		var na = denominator;
		// вывод в html
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
// обработка и вывод ответов
		var ans = finalAnswers([x1, x2, x3, x4]);
/* info for developing
		par2.textContent = " a=" + signa.textContent + a.textContent + "; b=" + signb.textContent + b.textContent + "с="  + signc.textContent + c.textContent + "; корни алгоритма: " + x1 + " " + x2 + " " + x3 + " " + x4 + "; реальные корни: " + ans + " Y-ки: " + y1 + " " + y2;
		*/
		// вывод корней в штмл
		par2.textContent = "корни: " + ans;
	}
}

// генератор возвратные уравнений 3 степени
function polynomial3Generate() {
	// объявление элементов уравнения
	var par = polynomial3.querySelector("#parPolynomial3"),
		signa = polynomial3.querySelector("#signa"),
		a = polynomial3.querySelector("#a"),
		signa2 = polynomial3.querySelector("#signa2"),
		a2 = polynomial3.querySelector("#a2"),
		signb = polynomial3.querySelector("#signb"),
		b = polynomial3.querySelector("#b"),
		signb2 = polynomial3.querySelector("#signb2"),
		b2 = polynomial3.querySelector("#b2"),
		random = ranNum(),
		// начало генерации, корни
		x1 = (random === 0) ? 2 : random,
		x2 = 1 / x1,
		x3 = -1;
	//  расчет коэффициентов
	if (x2 > 0) {// вывод, если xy > 0
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
	} else {// вывод, если xy < 0
		a.textContent = (Math.abs(x1) === 1 ? "" : Math.abs(x1));
		b.textContent = Math.abs(x1 * x1 + 1 + Math.abs(x1)) === 1 ? "" : x1 * x1 + 1 + Math.abs(x1);
		signa.textContent = "";//+ первый символ
		signb.textContent = "+";
		a2.textContent = Math.abs(x1);
		b2.textContent = Math.abs(x1 * x1 + 1 + Math.abs(x1)) === 1 ? "" : x1 * x1 + 1 + Math.abs(x1);
		signa2.textContent = "+";
		signb2.textContent = "+";
	}
	// обработка ответов
	var ans = finalAnswers([x1, x2, x3]);
	// вывод в html
	/* инфа для разработки
	par.textContent = "a=" + signa.textContent + a.textContent + "; b=" + signb.textContent + b.textContent + "; корни алгоритма: " + x1 + " " + x2 + " " + x3 + "; реальные корни: " + ans;
	*/
	par.textContent = "корни: " + ans;
}

// генератор квадратных уравнений
function squareEqGenerate() {
	// объявление элементов уравнения
	var par = squareEq.querySelector("#parSquareEq"),
		signa = squareEq.querySelector("#signa"),
		a = squareEq.querySelector("#a"),
		signb = squareEq.querySelector("#signb"),
		b = squareEq.querySelector("#b"),
		signc = squareEq.querySelector("#signc"),
		c = squareEq.querySelector("#c"),
		mrowb = squareEq.querySelector("#mrowb"),
		mrowc = squareEq.querySelector("#mrowc"),
		// начало генерации
		/*x1 = Math.floor(Math.random() * 20 - 10),
		x2 = Math.floor(Math.random() * 20 - 10),
		bb = -x1 - x2,
		cc = x1 * x2;
		*/
		Equation1 = new SquareEqObject(true);

	Equation1.drawing(a, signa, b, signb, c, signc, mrowb, mrowc);
	/*if (Equation1.b === 1) {
		signb.textContent = '+';
		b.textContent = '';
	} else if (Equation1.b === -1) {
		signb.textContent = '-';
		b.textContent = '';
	} else if (Equation1.b > 0) {
		signb.textContent = '+';
	} else if (Equation1.b < 0) {
		signb.textContent = '-';
	} else {
		bi.textContent = '';
		b.textContent = '';
		signb.textContent = '';
	}
	if (Equation1.a === 1) {
		signa.textContent = '';
		a.textContent = '';
	} else if (Equation1.a === -1) {
		signa.textContent = '-';
		a.textContent = '';
	} else if (Equation1.a > 0) {
		signa.textContent = '';
	} else {
		signa.textContent = '-';
	} 

	if (Equation1.c > 0) {
		signc.textContent = '+';
	} else if (Equation1.c < 0) {
		signc.textContent = '-';
	} else {
		c.textContent = '';
		signc.textContent = '';
	}*/
	par.textContent = 'корни: ' + Equation1.x1 + ' ' + Equation1.x2;

}

//*****************************************************************************************
//*****************************************************************************************

// функционал кнопки для генерации уравнения. Кнопка запускает соответствующюю генерацию в зависимости от флага
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
		case "Inequality":
			inequalityGenerate();
			break;
		case "SumOf4Degrees":
			sumOf4DegreesGenerate();
			break;
		case "Common":
			commonGenerate();
			break;
		case "":
			testGenerate();
			break;

	}
};

// конструктор квадратных уравнений
function SquareEqObject(nullsAllowed, range, divider) {
	// если b или c могут быть равны нулю
	range = range || 20;
	divider = divider || 2;
	if (nullsAllowed === true) {// генерация корней с любыми коэффициентами a и b
		var x1 = Math.floor(Math.random() * (2 * range + 1) - range) / divider,
			x2 = Math.floor(Math.random() * (2 * range + 1) - range) / divider,
			nb = -(x1 + x2),
			nc = x1 * x2;
	} else {
		do {// генерация корней с ненулевыми коэффициентами a и b
			var x1 = Math.floor(Math.random() * (2 * range + 1) - range) / divider,
				x2 = Math.floor(Math.random() * (2 * range + 1) - range) / divider,
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

	if (Math.random() < 0.2) {// умножаем уравнение на -1 иногда
		na = -na;
		nb = -nb;
		nc = -nc;
	}
	// возврат корней и коэффициентов в качестве свойств
	this.x1 = x1;
	this.x2 = x2;
	this.a = na;
	this.b = nb;
	this.c = nc;
}

// метод отрисовки квадратного уравнения
SquareEqObject.prototype.drawing = function(a, signa, b, signb, c, signc, mrowb, mrowc) {
	// включаем показ всего уравнения
	mrowb.style.display = "inline-block";
	mrowc.style.display = "inline-block";
	// запись данных в штмл
	a.textContent = Math.abs(this.a);
	b.textContent = Math.abs(this.b);
	c.textContent = Math.abs(this.c);
	// расстановка плюсов/минусов, стирание нулевых одночленов
	if (this.b === 1) {
		signb.textContent = '+';
		b.textContent = '';
	} else if (this.b === -1) {
		signb.textContent = '-';
		b.textContent = '';
	} else if (this.b > 0) {
		signb.textContent = '+';
	} else if (this.b < 0) {
		signb.textContent = '-';
	} else {
		mrowb.style.display = "none";
	}
	if (this.a === 1) {
		signa.textContent = '';
		a.textContent = '';
	} else if (this.a === -1) {
		signa.textContent = '-';
		a.textContent = '';
	} else if (this.a > 0) {
		signa.textContent = '';
	} else {
		signa.textContent = '-';
	} 

	if (this.c > 0) {
		signc.textContent = '+';
	} else if (this.c < 0) {
		signc.textContent = '-';
	} else {
		mrowc.style.display = "none";
	}
}


// клонирует двумерный массив
function clone(currentArray) {
	var newArray = [];

	for (var i = 0; i < currentArray.length; i++)
		newArray[i] = currentArray[i].slice();
	return newArray;
}

//сортирует массив массивов по первым элементам массивов в массиве, чтоб эти массивы были отсортированы, тоесть фактически это сортировка корней массивов
function SORT(a) {
	a.sort(function(i1, i2){return i2[0] - i1[0]});
	for(var i = 0; i < a.length;i++) {
		if (a[i] === a[i+1]) {
			a.splice(i)
		}
	}
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
>>>>>>> 6c521d39e18788e2262e2e76988ffdde51eb796c
}