(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _sprite = _interopRequireDefault(require("./sprite"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(function () {
  var animationContainer = document.getElementsByClassName("js-animations-container")[0];
  var template = document.getElementsByClassName("js-template")[0];

  _sprite["default"].ANIMATION_TITLES.forEach(function (title, index) {
    var newNode = template.cloneNode(true);
    newNode.classList.remove("js-template");
    var textNode = newNode.getElementsByClassName("js-text")[0];
    var codeNode = newNode.getElementsByClassName("js-code")[0];
    var spriteNode = newNode.getElementsByClassName("js-sprite")[0];
    var sprite = new _sprite["default"](0, index);
    spriteNode.appendChild(sprite.node);
    textNode.appendChild(document.createTextNode(title));
    codeNode.appendChild(document.createTextNode(sprite.node.outerHTML));
    animationContainer.appendChild(newNode);
  });

  template.parentNode.removeChild(template);
  var node = document.getElementById("js-target");
  var sprite = new _sprite["default"](0, 0);
  node.appendChild(sprite.node);
  setInterval(function () {
    var n = (sprite.animationIndex + 1) % (_sprite["default"].LAST_ANIMATION_INDEX + 1);
    sprite.setAnimation(n);
  }, 1000);
})();
},{"./sprite":2}],2:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var Sprite =
/*#__PURE__*/
function () {
  function Sprite(characterIndex, animationIndex) {
    this.node = document.createElement("div");
    this.node.classList.add("twodanim-sprite");
    this.setAnimation(animationIndex);
    this.setCharacter(characterIndex);
  }

  var _proto = Sprite.prototype;

  _proto.setAnimation = function setAnimation(animationIndex) {
    var newName = "twodanim-sprite-animation" + animationIndex;
    this.animationIndex = animationIndex;
    this.node.classList.remove(this.animationName);
    this.node.classList.add(newName);
    this.animationName = newName;
  };

  _proto.setCharacter = function setCharacter(characterIndex) {
    var newName = "twodanim-sprite-character" + characterIndex;
    this.characterIndex = characterIndex;
    this.node.classList.remove(this.characterName);
    this.node.classList.add(newName);
    this.characterName = newName;
  };

  _proto.getAnimationName = function getAnimationName() {
    Sprite.ANIMATION_TITLES[this.animationIndex];
  };

  return Sprite;
}();

Sprite.LAST_ANIMATION_INDEX = 17;
Sprite.ANIMATION_TITLES = ["前進", "突き", "逃げる", "通常待機", "振り", "勝利", "詠唱待機", "飛び道具", "瀕死", "防御", "汎用スキル", "状態異常", "ダメージ", "魔法", "睡眠", "回避", "アイテム", "戦闘不能"];
var _default = Sprite;
exports["default"] = _default;
},{}]},{},[1]);
