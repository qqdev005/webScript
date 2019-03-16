// ==UserScript==
// @name lianjia
// @namespace lianjia Scripts
// @match *://*/*
// @grant none
// ==/UserScript==
// 文本可选
document.querySelectorAll('span').forEach(item=>item.style = '-webkit-user-select:text;');
document.querySelectorAll('li').forEach(item=>item.style = '-webkit-user-select:text;')
document.body.style = '-webkit-user-select:text;'
// PC隐藏二维码
document.getElementsByClassName('layer-qrcode')[0].style.display = 'none'
// 看房记录:已看小区
var looked = Array.from(new Set(Array.from(document.getElementsByClassName('region')).map(item=>item.innerText)));