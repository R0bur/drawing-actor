/* @source: https://github.com/R0bur/drawing-actor/blob/main/script/menubar.js */
/* @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later */
/*======================*/
/* Горизонтальное меню. */
/*======================*/
var menubar = new Object ();
/*=======================================================*/
/* Подготовка к использованию горизонтального меню.      */
/* elem - элемент-контейнер HTMLElement для строки меню. */
/* Примечание. Поле items с информацией о пунктах меню   */
/* используется глобальным обработчиком событий от       */
/* клавиатуры.                                           */
/*=======================================================*/
menubar.init = function (elem) {
	this.elem = elem;
	this.items = new Array ();
};
/*==============================================================*/
/* Создание горизонтального меню.                               */
/* Вызов: items - массив объектов, представляющих пункты меню:  */
/*        .hotkey - клавиша вызова пункта меню,                 */
/*        .text - текст пункта меню,                            */
/*        .handler - функция-обработчик пункта меню.            */
/*==============================================================*/
menubar.replace = function (items) {
	var i, sk, ai
	this.items = items;
	/* Очистка строки меню. */
	while (this.elem.hasChildNodes ())
		this.elem.removeChild (this.elem.lastChild);
	/* Составление строки меню. */
	for (i in items) {
		sk = document.createElement ("span");
		sk.style.fontWeight = "bold";
		sk.appendChild (document.createTextNode (items[i].hotkey));
		ai = document.createElement ("a");
		ai.href="#";
		ai.appendChild (sk);
		ai.appendChild (document.createTextNode (items[i].text));
		ai.onclick = function (handler) {
			return function () { if (app.userinput) handler (); return false; };
		} (items[i].handler);
		this.elem.appendChild (ai);
	}
};
/* @license-end */