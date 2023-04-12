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
var Account = /** @class */ (function () {
    function Account(Acc_no, Balance) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    }
    Account.prototype.debitAmount = function (amount) { console.log("hello fro debitAmount"); };
    Account.prototype.creditAmount = function (amount) { console.log("hello from creditAccount"); };
    Account.prototype.getBalance = function () { console.log("hello from getbalance"); };
    return Account;
}());
var Saving_Account = /** @class */ (function (_super) {
    __extends(Saving_Account, _super);
    function Saving_Account(Acc_no, Balance, Date_of_opening, Min_Balance) {
        var _this = _super.call(this, Acc_no, Balance) || this;
        _this.Date_of_opening = Date_of_opening;
        _this.Min_Balance = Min_Balance;
        return _this;
    }
    Saving_Account.prototype.addCustomer = function () {
        console.log("hello from addCustomer --savings");
    };
    Saving_Account.prototype.removeCustomer = function () {
        console.log("hello from removeCustomer --savings");
    };
    return Saving_Account;
}(Account));
var Current_Account = /** @class */ (function (_super) {
    __extends(Current_Account, _super);
    function Current_Account(Acc_no, Balance, Date_of_opening, Interest_rate) {
        var _this = _super.call(this, Acc_no, Balance) || this;
        _this.Date_of_opening = Date_of_opening;
        _this.Interest_rate = Interest_rate;
        return _this;
    }
    Current_Account.prototype.addCustomer = function () {
        console.log("hello from addCustomer --current");
    };
    Current_Account.prototype.removeCustomer = function () {
        console.log("hello from removeCustomer --current");
    };
    return Current_Account;
}(Account));
console.log("here!");
