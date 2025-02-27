const { v4: uuid4 } = require("uuid");

class Order {
    constructor(clientName, description, price, status = "Pendente") {
        this.id = uuid4();
        this.clientName = clientName;
        this.description = description;
        this.price = price;
        this.status = status;
    }
}

module.exports = Order;