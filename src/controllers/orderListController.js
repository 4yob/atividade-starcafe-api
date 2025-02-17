const Order = require("../models/Order.js");
const OrderList = require("../models/OrderList.js");

const listaPedidos = new OrderList;

listaPedidos.addOrder(new Order("Alejandra", "Suco de Laranja", 10.00, "Pronto"));
listaPedidos.addOrder(new Order("Evelyn", "Suco de Laranja", 10.00, "Pronto"));
listaPedidos.addOrder(new Order("Evelyn", "Pão de Queijo", 2.50, "Preparando"));
listaPedidos.addOrder(new Order("Laura", "Bolo de Nozes", 3.50, "Pendente"));
listaPedidos.addOrder(new Order("Bruna", "Pão na Chapa", 7.00, "Preparando"));
listaPedidos.addOrder(new Order("Bruna", "Café Expresso", 3.50, "Pendente"));

const router = {
    getAllOrders: (req, res) => {
        try {
            const orders = listaPedidos.getAllOrders();
            res.json({Pedidos: orders})
        } catch (error) {
            res.status(404).json({ message: "Erro ao buscar pedidos. Tente novamente!", error })
        }
    },

    getOrderById: (req, res) => {
        try {
            const order = listaPedidos.getOrderById(req.params.id);
            res.json({ message: "Pedido identificado com sucesso!", Pedido: order});
        } catch (error) {
            res.status(404).json({ message: "Pedido não encontrado. Tente novamente!", error });
        }
    },

    addOrder: (req, res) => {
        try {
            const { clientName, description, price } = req.body;
            if (!clientName || !description || !price) {
                throw new Error("Preencha todos os campos para concluir seu pedido.");
            }
            if (description !== "Café Expresso" && description !== "Chocolate Quente" && description !== "Suco de Laranja" && description !== "Pão de Queijo" && description !== "Pão na Chapa" && description !== "Bolo de Nozes") {
                throw new Error("O item escolhido não está disponível no nosso menu. Por favor, escolha outro item.");
            }
            if (typeof price !== "number") {
                throw new Error("Por favor, insira um valor numérico para o preço.");
            }
            const order = new Order(clientName, description, price);
            listaPedidos.addOrder(order);
            res.status(200).json({ message: "Pedido realizado com sucesso! Aguarde sua vez.", order});
        } catch (error) {
            res.status(400).json({ message: error.message, error });
        }
    },

    deleteOrder: (req, res) => {
        try {
            const order = listaPedidos.getOrderById(req.params.id);
            if (order.status === "Pronto") {
                return res.status(403).json({ message: "Lamentamos, mas não é possível cancelar um pedido já finalizado."})
            }
            listaPedidos.deleteOrder(req.params.id);
            res.status(200).json({ message: "Pedido cancelado com sucesso! Até a próxima."});
        } catch (error) {
            res.status(404).json({ message: "Erro ao cancelar seu pedido. Tente novamente!"});
        }
    }
}

module.exports = router;