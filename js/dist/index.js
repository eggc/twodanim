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