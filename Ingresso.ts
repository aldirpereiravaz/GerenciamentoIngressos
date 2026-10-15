export class Ingresso {
    private codigo: string;
    private valor: number;
    private nomeEvento: string;

    constructor (codigo: string, valor: number, nomeEvento: string) {
        this.codigo = codigo;
        this.valor = valor;
        this.nomeEvento = nomeEvento;
}

getcodigo(): string {
    return this.codigo;
}

getvalor():number {
    return this.valor;
}

getnomeEvento(): string {
    return this.nomeEvento;
}

setValor(valor: number): void {
    this.valor = valor;
}

exibirDados(): string {
    return `Código: $ {this.codigo} |    
     Evento: $ {this.nomeEvento} | 
     Valor: R$ {this.valor.toFixed(2)}`;
}


}