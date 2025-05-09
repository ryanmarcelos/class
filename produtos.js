class Produto{
    constructor(nome,preco,quantidade){
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
    mostrarDados(){
    console.log(`Produto ${this.nome}, preço R$ ${this.preco}, quantidade: ${this.quantidade}`)
}
    vender(qtd){
    if(qtd<= this.quantidade){
        this.quantidade -= qtd;
        console.log(`Venda realizada. Quantidade atual ${this.quantidade}`)
    } else{
        console.log("Estoque insuficiente para vendas");
    }
    } 
    repor(qtd){
        this.quantidade += qtd;
        console.log(`Reposição feita. Quantidade atual ${this.quantidade}`);
    }

}
let produto = new Produto("Caneta", 2.5, 100);
//Produto.mostrarDados();
//Produto.vender(15)