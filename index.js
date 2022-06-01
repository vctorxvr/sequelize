(async () => {

const database = require('./db');
const Produto = require('./produto');
await database.sync();

/* const novoProduto = await Produto.create({

    nome : 'produto',
    preco: 30,
    descricao: 'algum produto',
   
}) */

   // console.log(novoProduto);
   
    const produtos = await Produto.findAll();
   // console.log(produtos);

    const produtos2 = await Produto.findAll({
        where: {
            preco: 15
        }

    });

    console.log(produtos2);

})();