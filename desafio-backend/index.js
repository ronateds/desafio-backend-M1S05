import pedidos from "./pedidos.js";
import { nomeClientes, pedidosPorId, pedidosEntregues, todosEntregues } from "./relatorios.js"

let nomes = nomeClientes(pedidos);
let _pedidosPorId = pedidosPorId(pedidos, 2);
let _pedidosEntregues = pedidosEntregues(pedidos);
let _todosEntregues = todosEntregues(pedidos);

// Logs
console.log(nomes);
console.log(_pedidosPorId);
console.log(_pedidosEntregues);
console.log(_todosEntregues);