"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CheckedPipe = /** @class */ (function () {
    function CheckedPipe() {
    }
    CheckedPipe.prototype.transform = function (data) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!data) {
            return data;
        }
        var checkedd = args[0];
        return data.filter(function (data) { return data.checked == checkedd; });
    };
    CheckedPipe = __decorate([
        core_1.Pipe({
            name: 'checked',
            pure: false
        })
    ], CheckedPipe);
    return CheckedPipe;
}());
exports.CheckedPipe = CheckedPipe;
//# sourceMappingURL=checked.Pipe.js.map