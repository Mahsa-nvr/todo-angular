"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Comment = (function () {
    function Comment(name, email, body) {
        if (name === void 0) { name = ''; }
        if (email === void 0) { email = ''; }
        if (body === void 0) { body = ''; }
        this.name = name;
        this.email = email;
        this.body = body;
    }
    Comment.prototype.send = function () {
        console.log(this.name, this.email, this.body);
    };
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map