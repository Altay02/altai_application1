/*eslint-env browser*/
//"use strict";
//множество английский текстов
var navEng = document.getElementsByClassName("eng"),
	// множество русских текстов
	navRu = document.getElementsByClassName("ru"),
	langBtn = document.getElementsByClassName("checkbox");
// переключения языка
langBtn.onclick = function () {
	if (navEng.style.display === "none") {
		navEng.style.display = "inline";
		navRu.style.display = "none";
	} else {
		navEng.style.display = "none";
		navRu.style.display = "inline";
	}
};
// функция для разработки
function changeLang() {
	if (navEng.style.display === "none") {
		navEng.style.display = "inline";
		navRu.style.display = "none";
	} else {
		navEng.style.display = "none";
		navRu.style.display = "inline";
	}
}