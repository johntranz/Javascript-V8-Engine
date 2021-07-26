"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var last = function (arr) { return arr[arr.length - 1]; };
console.log(last([1, 2, 3]));
var lastT = function (arr) { return arr[arr.length - 1]; };
var l2 = lastT([1, 'a', 3]);
var l3 = lastT(['a', 'b']);
var makeArrXY = function (x, y) { return [x, y]; };
var m1 = makeArrXY('a', 3);
var makeTuple = function (x, y) { return [x, y]; };
var m2 = makeTuple('a', 1);
var m3 = makeTuple(null, 3);
var makeTupleWithDefault = function (x, y) { return [x, y]; };
var m4 = makeTupleWithDefault('a', 1);
// GENERICS EXTEND
var makeFullNameConstraintWithGenerics = function (obj) { return (__assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName })); };
var n1 = makeFullNameConstraintWithGenerics({
    firstName: 'huy',
    lastName: 'tran',
    age: 23
});
console.log(n1);
