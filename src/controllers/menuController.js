const Menu = require("../models/Menu.js");
const Item = require("../models/Item.js");

const cardapio = new Menu();

cardapio.addItem(new Item("Café Espresso", 2.00));
cardapio.addItem(new Item("Chocolate Quente", 5.00));
cardapio.addItem(new Item("Suco de Laranja", 10.00));
cardapio.addItem(new Item("Pão de Queijo", 2.50));
cardapio.addItem(new Item("Pão na Chapa", 7.00));
cardapio.addItem(new Item("Bolo de Nozes", 3.50));


const router = {
    getAllItems: (req, res) => {
        try {
            res.json(cardapio.getAllItems());
        } catch (error) {
            res.status(404).json({ message: "Erro ao buscar o menu. Tente novamente!", error })
        }
    },

    addItem: (req, res) => {
        try {
            const { description, price } = req.body;
            if (!description || !price) {
                throw new Error("Todos os campos são obrigatórios.");
            }
            
            const food = new Item(description, price);
            cardapio.addItem(food);
            res.status(200).json({ message: "Item adicionado ao menu!", food});
        } catch (error) {
            res.status(400).json({ message: error.message, error });
        }
    }
}

module.exports = router;