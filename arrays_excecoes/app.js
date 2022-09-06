try{
    const listaDeProdutosDisponiveis = [
        "Pão",
        "Leite",
        "Café",
        "Laranja",
        "Macarrão",
        "Sabonete",
        "Detergente",
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    const listaDeProcutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto => {
        return listaDeArgumentos.find(argumento => argumento===   produto);
    })
    listaDeProcutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nós temos: ${produto}`));
    
    const listaDeProcutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
    })
    listaDeProcutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Este produto nós não temos: ${argumento}`));
    
    const listaDeProdutosOrdenadas = listaDeProdutosDisponiveis.sort();
    listaDeProdutosOrdenadas.forEach(produto => console.log(`Este produto esta disponivel: ${produto}`));
}catch(e){
    console.log('Não foi posível executar pedido de compra');
}
