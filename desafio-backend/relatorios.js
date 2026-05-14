// Parte 1 — Manipulação de Arrays e Objetos

// função que percorra os pedidos e retorne apenas os nomes dos clientes.
function nomeClientes(pedidos) {
    return pedidos.map(p => p.cliente)
}

// função que encontre o pedido cujo `id` seja igual a `2`.
function pedidosPorId(pedidos, id) {
    return pedidos.find(p => p.id === id)
}

// função que retorne apenas os pedidos cujo status seja `"entregue"`.
function pedidosEntregues(pedidos) {
    return pedidos.filter(p => p.status === "entregue")
}

// função que valide se todos os pedidos foram entregues.
function todosEntregues(pedidos) {
    return pedidos.every(p => p.status == "entregue")
}

// parte 2

// total de cada pedido
function totalPedido(pedido){
    return pedido.itens.reduce((total, item) => {
        return total + (item.quantidade * item.preco)
    }, 0)
}

// Calcular total de cada pedido
function totalPedidoPorCliente(pedidos){
    return pedidos.map(pedido => ({
        cliente: pedido.cliente,
        total: totalPedido(pedido)
    }))
}

// Crie uma função que some todos os pedidos da empresa. (faturamento total)
function faturamento(pedidos) {
    return totalPedidoPorCliente(pedidos).reduce((acc, curr) => acc + curr.total, 0)
}

// parte 4

// No backend da aplicação existe a seguinte função utilitária:
function processarPedidos(pedidos, callback) {
  return callback(pedidos)
}

module.exports = {
    nomeClientes,
    pedidosPorId,
    pedidosEntregues,
    todosEntregues,
    totalPedidoPorCliente,
    faturamento,
    processarPedidos
}