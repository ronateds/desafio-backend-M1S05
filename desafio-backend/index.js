import pedidos from "./pedidos.js";
import {
    nomeClientes,
    pedidosPorId,
    pedidosPorStatus,
    todosEntregues,
    totalPedidoPorCliente,
    faturamento,
    processarPedidos
} from "./relatorios.js"

//parte 1
let nomes = nomeClientes(pedidos);
let _pedidosPorId = pedidosPorId(pedidos, 2);
let _pedidosPorStatus = pedidosPorStatus(pedidos);
let _todosEntregues = todosEntregues(pedidos);

// parte 2
let _totalPedidoPorCliente = totalPedidoPorCliente(pedidos);
let _faturamento = faturamento(pedidos)

// parte 3
// Converta o array de pedidos em uma string JSON.
let pedidosJSON = JSON.stringify(pedidos);

// Transforme a string JSON novamente em array de objetos JavaScript.
let pedidosObjeto = JSON.parse(pedidosJSON)

// parte 4
let nomesCallback = processarPedidos(pedidos, nomeClientes);
let faturamentoCallback = processarPedidos(pedidos, faturamento);
// let pedidosCallback = processarPedidos(pedidos, pedidosPorStatus("pendente")); //TODO não está funcionando

// Logs
// console.log(nomes);
// console.log(_pedidosPorId);
console.log(_pedidosPorStatus);
// console.log(_todosEntregues);

// console.log(_totalPedidoPorCliente);
// console.log(_faturamento);

// console.log(pedidosJSON);
// console.log(pedidosObjeto);

// console.log(nomesCallback);
// console.log(faturamentoCallback);
// console.log(pedidosPorCallback);