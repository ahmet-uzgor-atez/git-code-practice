class Paymentservice {
    constructor() {
        this.paymentTransaction = {}
    };

    getTransactionById(transactionId) {
        return this.paymentTransaction[transactionId];
    }
}
