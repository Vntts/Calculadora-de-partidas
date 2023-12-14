function calcularSaldo(vitorias, derrotas) {
    let saldo = (vitorias - derrotas);
    let classificacao = '';
    if (vitorias < 10) {
        classificacao ="Ferro";
    } else if (vitorias >=11 && vitorias <=20) {
        classificacao ="Bronze";
    } else if (vitorias >=21 && vitorias <=50) {
        classificacao ="Prata";
    } else if (vitorias >=51 && vitorias <=80) {
        classificacao ="Ouro";
    } else if (vitorias>=81 && vitorias <=90) {
        classificacao ="Diamante";
    } else if (vitorias >=91 && vitorias <=100) {
        classificacao="Lendário";
    } else {
        classificacao ="Imortal";
    }
    return {
        saldo: saldo,
        classificacao:classificacao
    };
}
        var Vitorias =478;
        var Derrotas =398;
        var resultado = calcularSaldo(Vitorias,Derrotas);
console.log("O saldo de partidas ranqueadas é: " + resultado.saldo);
console.log("e está no nivel de : " + resultado.classificacao);
