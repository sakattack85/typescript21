"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BsStudent = void 0;
var student_1 = require("./student");
var BsStudent = /** @class */ (function (_super) {
    __extends(BsStudent, _super);
    function BsStudent(id, firstname, lastname, bsdepartmentid) {
        var _this = _super.call(this, id, firstname, lastname) || this;
        _this.bsdepartmentid = bsdepartmentid;
        return _this;
    }
    return BsStudent;
}(student_1.Student));
exports.BsStudent = BsStudent;
