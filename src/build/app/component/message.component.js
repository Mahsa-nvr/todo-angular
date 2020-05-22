"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MessageComponent = (function () {
    function MessageComponent() {
        this.style = true;
    }
    return MessageComponent;
}());
MessageComponent = __decorate([
    core_1.Component({
        selector: 'message',
        template: "\n    <p style=\"padding : 1rem\" [ngClass]=\"{class1 : true , class2 : false , class3 : style}\" >\n      <ng-content></ng-content>\n    </p>\n  ",
        styles: ["\n    .class1 {\n      color: green;\n    }\n    .class2 {\n      font-weight: bold;    \n    }\n    .class3 {\n      margin: 1rem;\n    }\n  "]
    })
], MessageComponent);
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.component.js.map