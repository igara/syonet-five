require=function t(o,e,r){function n(c,i){if(!e[c]){if(!o[c]){var p="function"==typeof require&&require;if(!i&&p)return p(c,!0);if(a)return a(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var u=e[c]={exports:{}};o[c][0].call(u.exports,function(t){var e=o[c][1][t];return n(e?e:t)},u,u.exports,t,o,e,r)}return e[c].exports}for(var a="function"==typeof require&&require,c=0;c<r.length;c++)n(r[c]);return n}({GameScript:[function(t,o,e){"use strict";cc._RF.push(o,"80eb404bxpBK4zaDakJ81qv","GameScript"),Object.defineProperty(e,"__esModule",{value:!0});var r=cc._decorator,n=r.ccclass,a=r.property,c=cc.director.getPhysicsManager();c.enabled=!0;var i=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.time=0,o.sec=0,o}return __extends(o,t),o.prototype.onEnable=function(){},o.prototype.onLoad=function(){this.balls=[this.blueball,this.greenball,this.redball,this.yellowball]},o.prototype.start=function(){},o.prototype.update=function(t){var o=cc.instantiate(this.random(this.balls,1));o.x=0,o.y=0,this.outballs.addChild(o)},o.prototype.lateUpdate=function(t){},o.prototype.onDisable=function(){},o.prototype.onDestroy=function(){},o.prototype.onClickUpButton=function(){-10>this.bar.rotation&&this.bar.rotation>-90&&(this.bar.rotation+=10)},o.prototype.onClickDownButton=function(){0>this.bar.rotation&&this.bar.rotation>-80&&(this.bar.rotation-=10)},o.prototype.random=function(t){var o=Object.keys(t),e=o[Math.floor(Math.random()*o.length)];return t[e]},o}(cc.Component);__decorate([a(cc.Node)],i.prototype,"bar",void 0),__decorate([a(cc.Node)],i.prototype,"outballs",void 0),__decorate([a(cc.Node)],i.prototype,"blueball",void 0),__decorate([a(cc.Node)],i.prototype,"greenball",void 0),__decorate([a(cc.Node)],i.prototype,"redball",void 0),__decorate([a(cc.Node)],i.prototype,"yellowball",void 0),__decorate([a(cc.Button)],i.prototype,"upButton",void 0),__decorate([a(cc.Button)],i.prototype,"downButton",void 0),i=__decorate([n],i),e["default"]=i,cc._RF.pop()},{}]},{},["GameScript"]);