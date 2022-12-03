import Item from "./item";

class Pedido {
  itens: Item[] = [];
  valorTotal: number = 0;

  adicionarItems(item: Item): void {
    this.itens.push(item);
  }
  removerProximoItem(): void {
    this.itens.pop();
  }

  somaTotal() {
    this.itens.forEach((i) => {
      this.valorTotal += i.valor;
    });
  }
  listaPedido() {
    this.somaTotal();
    this.itens.forEach((item, index) => {
      console.log(`${index}:${item}`);
    });
    console.log(`valor total: ${this.valorTotal}`);
  }
}

const frongo = new Item(22, "frongoAssado", "inteiro");
