require=function t(e,o,r){function n(i,u){if(!o[i]){if(!e[i]){var p="function"==typeof require&&require;if(!u&&p)return p(i,!0);if(c)return c(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var a=o[i]={exports:{}};e[i][0].call(a.exports,function(t){var o=e[i][1][t];return n(o?o:t)},a,a.exports,t,e,o,r)}return o[i].exports}for(var c="function"==typeof require&&require,i=0;i<r.length;i++)n(r[i]);return n}({StageSelectViewScript:[function(t,e,o){"use strict";cc._RF.push(e,"57d27fyI8BD4bWwj4mevrNM","StageSelectViewScript"),Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,n=r.ccclass,c=r.property,i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.onEnable=function(){},e.prototype.onLoad=function(){},e.prototype.start=function(){},e.prototype.update=function(t){},e.prototype.lateUpdate=function(t){},e.prototype.onDisable=function(){},e.prototype.onDestroy=function(){},e.prototype.onClickYenButton=function(){location.href="/game/yen/"},e}(cc.Component);__decorate([c(cc.Button)],i.prototype,"yenButton",void 0),i=__decorate([n],i),o["default"]=i,cc._RF.pop()},{}]},{},["StageSelectViewScript"]);