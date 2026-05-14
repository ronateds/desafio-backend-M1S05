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

module.exports = { nomeClientes, pedidosPorId, pedidosEntregues, todosEntregues }