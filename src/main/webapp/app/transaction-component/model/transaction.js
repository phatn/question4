"use strict";
var Transaction = (function () {
    function Transaction(traderId, timestamp, value) {
        this.traderId = traderId;
        this.timestamp = timestamp;
        this.value = value;
    }
    return Transaction;
}());
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map