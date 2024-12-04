class Paymentservice {
    constructor() {
        this.paymentTransaction = {}
    };

    getTransaction(transactionId) {
        return this.paymentTransaction[transactionId];
    }
}