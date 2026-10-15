import {Ingresso} from "./Ingresso";

export class IngressoVip extends Ingresso {
    private valorAdicional: number;

    construtor(
        codigo: string,
        valor: number,
        nomeEvento: string,
        valorAdicional: number,
    ) {
        super(codigo, valor, nomeEvento);
        this.valorAdicional = valorAdicional;
    }

getVAlorAdicional(): number {
    return this.valorAdicional;
}

    setValorAdicional(valorAdicional: number): void {
        this.valorAdicional = valorAdicional;
 }

calcularValor(): number {
    return this.getValor() + this.valorAdicional;
}

exibirDados(): string {
    return `${super.exibirDados()}| 
    valor adicional: R$ ${this.valorAdicional.toFixed(2)}|
    valor total vip: R$ ${this.calcularValor().toFixed(2)}`;
}

}
 