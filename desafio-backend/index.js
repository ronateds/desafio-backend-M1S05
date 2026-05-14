import pedidos from "./pedidos.js";
import {
    nomeClientes,
    pedidosPorId,
    pedidosEntregues,
    todosEntregues,
    totalPedidoPorCliente,
    faturamento
} from "./relatorios.js"

//parte 1
let nomes = nomeClientes(pedidos);
let _pedidosPorId = pedidosPorId(pedidos, 2);
let _pedidosEntregues = pedidosEntregues(pedidos);
let _todosEntregues = todosEntregues(pedidos);

// parte 2
let _totalPedidoPorCliente = totalPedidoPorCliente(pedidos);
let _faturamento = faturamento(pedidos)

// Logs
// console.log(nomes);
// console.log(_pedidosPorId);
// console.log(_pedidosEntregues);
// console.log(_todosEntregues);
console.log(_totalPedidoPorCliente);
console.log(_faturamento);