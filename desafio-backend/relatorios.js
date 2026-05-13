// Desafio 1 — Listar nomes dos clientes
function listarClientes(pedidos){
    return pedidos.map(pedido => pedido.cliente)
}

// Desafio 2 — Buscar pedido por ID
function buscarPedidosPorId(pedidos, id){
    return pedidos.find(pedido => pedido.id === id)
}

//Desafio 3 — Filtrar pedidos entregues
function filtrarEntregues(pedidos){
    return pedidos.filter(pedido => pedido.status === "entregue")
}

// Desafio 4 — Verificar status geral dos pedidos
function todosEntregues(pedidos){
    return pedidos.every(pedido => pedido.status === "entregue")
}

// Desafio 5 — Calcular total de cada pedido
function calcularTotalPedido(pedido){
    return pedido.itens.reduce((total, item) => {
        return total + (item.quantidade * item.preco)
    }, 0)
}

function totalPorPedido(pedidos){
    return pedidos.map(pedido => ({
        cliente: pedido.cliente,
        total: calcularTotalPedido(pedido)
    }))
}

