class OrderList {
    constructor() {
        this.orders= [];
    }

    addOrder(order) {
        this.orders.push(order);
    }

    getAllOrders() {
        return this.orders;
    }

    getOrderById(id) {
        const order = this.orders.find(order => order.id == id);
        if(!order) {
            throw new Error("Pedido não encontrado!");
        }
        return order;
    }

    updateOrder(id, updateData) {
        const order = this.getOrderById(id);
        Object.assign(order, updateData);
        return order;
    }

    deleteOrder(id) {
        this.orders - this.orders.filter(order => order.id != id);
    }
}

module.exports = OrderList;