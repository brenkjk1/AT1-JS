function calcularPagamento () {
    let name = document.querySelector('#nome').value;
    let pisEpasep = document.querySelector('#pis').value;
    let ValorHr = parseFloat(document.querySelector('#ValorHoras').value);
    let QuantHr = parseFloat(document.querySelector('#QtdHoras').value);

    let SBruto = ValorHr * QuantHr;
    let inss = calcularINSS(SBruto);
    let irpf = calcularIRPF(SBruto);
    let iss = calcularISS(SBruto) ;
    let SLiquido = SBruto - inss - irpf - iss;

    let resultado = (`Nome: ${name}PIS/PASEP: ${pisEpasep}, Valor da hora trabalhada ${ValorHr}, Quantidade de horas trabalhadas ${QuantHr}. Tem o salário bruto de: R$${SBruto.toFixed(2)}, o desconto de INSS de: R$${inss.toFixed(2)}, o desconto de IRPF de: R$${irpf.toFixed(2)}, o desconto de ISS de: R$${iss.toFixed(2)} e o salário líquido de: R$${SLiquido.toFixed(2)}`)

    document.querySelector("#resultado").innerHTML = resultado;
}

// function calcularINSS {
//     let descontarINSS;

//     if (s) {
        
//     } else {
        
//     }
// }

document.querySelector('button').addEventListener('click', calcularPagamento);





// PIS = 11 DIGITOS
// document.querySelector("#resultado").innerHTML =
//         `O valor recebido do trabalhador ${nome} é R$ ${resultado.toFixed(2)}`;