class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito realizado. Saldo atual: R$ ${this.saldo}`);
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque realizado. Saldo atual: R$ ${this.saldo}`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    verSaldo() {
        console.log(`Saldo atual: R$ ${this.saldo}`);
    }
}

let conta = new ContaBancaria("Ana", 1000);
//conta.sacar(200)
//conta.verSaldo(); 
//conta.sacar(1000); 