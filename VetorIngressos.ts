import {Ingresso} from "./Ingresso";
import {IngressoVIP} from "./IngressoVIP";

export class VetorIngressos {
    private ingressos: Ingresso[];

constructor() {
    this.ingressos = [];
}
}

localizar(codigo: string): number {
    for (let i = 0; i < this.ingressos.length; i++) {
        if (this.ingressos[i].getCodigo() === codigo) {
            return i;
        }
        return -1;
    }
}