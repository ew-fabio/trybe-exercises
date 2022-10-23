const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};


const customerInfo = (order) => {
  const entregador = Object.values(order['order']['delivery'])[0];
  const cliente = Object.values(order)[0];
  const telefone = Object.values(order)[1];
  const endereco = order.address.street;
  const numero = order['address']['number'];
  const apartamento = order.address['apartment'];

  return console.log(`Olá ${entregador}, entrega para: ${cliente}, Telefone: ${telefone}, Endereço: ${endereco}, nº ${numero}, AP: ${apartamento}.`);
};

customerInfo(order);



const orderModifier = (order) => {
  const cliente2 = 'Luiz Silva';
  order['name'] = cliente2;

  const valorComDesconto = 50;
  order['payment'].total = valorComDesconto;

  const cliente = order.name;
  const pizza1 = Object.keys(order.order.pizza)[0];
  const pizza2 = Object.keys(order.order.pizza)[1];
  const bebida = order['order']['drinks'].coke.type;
  const total = Object.values(order.payment)[0];

  return console.log(`Olá ${cliente}, o total do seu pedido de ${pizza1}, ${pizza2} e ${bebida} é R$${total},00.`);
};

orderModifier(order);