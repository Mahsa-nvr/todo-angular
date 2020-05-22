"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.datas = [
            {
                title: "meet mr.jack of all trads",
                checked: false,
                status: false,
                show: false,
                dueTime: ''
            },
            {
                title: "being at my best mood",
                checked: false,
                status: false,
                show: false,
                dueTime: ''
            },
            {
                title: "thinking about cosmos absurdity",
                checked: false,
                status: false,
                show: false,
                dueTime: ''
            },
        ];
        this.checkedd = false;
        this.top = -100;
        this.topNot = this.top + "px";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputNew = '';
        this.deadTime = '';
        setInterval(function () {
            var currentTime = new Date().toTimeString().split(" ")[0];
            var str1 = currentTime.split(":")[0] * 3600 + currentTime.split(":")[1] * 60 + currentTime.split(":")[2];
            _this.datas.map(function (el) {
                var endTime = el.dueTime;
                var str2 = endTime.split(":")[0] * 3600 + endTime.split(":")[1] * 60 + endTime.split(":")[2];
                if (str1 === str2) {
                    return (el.show = true);
                }
                else {
                    return null;
                }
            });
        }, 1000);
    };
    AppComponent.prototype.addData = function () {
        var deadTime = this.deadTime;
        if (deadTime.split(":").length !== 3) {
            var arr = deadTime.split(":");
            arr.push('00');
            var str3 = arr.join(':');
            this.deadTime = str3;
        }
        if (this.inputNew.trim().length === 0 || this.deadTime.length === 0) {
            alert('please enter your task and deadTime');
        }
        else {
            this.datas.push({
                title: this.inputNew,
                checked: false,
                status: false,
                show: false,
                dueTime: this.deadTime,
            });
            console.log(this.datas);
            this.inputNew = '';
            this.deadTime = '';
        }
    };
    AppComponent.prototype.removeData = function (data) {
        this.datas.splice(this.datas.indexOf(data), 1);
    };
    AppComponent.prototype.checkedData = function (data) {
        data.checked = true;
        setTimeout(function () {
            data.status = true;
        }, 2000);
    };
    AppComponent.prototype.editData = function (data) {
        var result = prompt("Enter a value");
        if (result.length !== 0) {
            data.title = result;
        }
        else {
            alert('please enter charactors');
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '/templates/app.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map