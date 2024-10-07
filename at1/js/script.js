function calcularPagamento() {
    let nome = document.querySelector('#nome').value;
    let pisEpasep = document.querySelector('#pis').value;
    let valorHora = parseFloat(document.querySelector('#ValorHoras').value);
    let qtdHoras = parseFloat(document.querySelector('#QtdHoras').value);

    let salarioBruto = valorHora * qtdHoras;
    let inss = calcularINSS(salarioBruto);
    let irpf = calcularIRPF(salarioBruto);
    let iss = calcularISS(salarioBruto);
    let salarioLiquido = salarioBruto - inss - irpf - iss;

    let resultado = `Nome: ${nome}, PIS/PASEP: ${pisEpasep}, Valor da hora trabalhada: R$${valorHora.toFixed(2)}, Quantidade de horas trabalhadas: ${qtdHoras}. Salário bruto: R$${salarioBruto.toFixed(2)}, Desconto INSS: R$${inss.toFixed(2)}, Desconto IRPF: R$${irpf.toFixed(2)}, Desconto ISS: R$${iss.toFixed(2)}, Salário líquido: R$${salarioLiquido.toFixed(2)}`;

    if (!nome || !pisEpasep || isNaN(valorHora) || isNaN(qtdHoras))
        resultado = "Todos os campos devem ser preenchidos.";
    else if (pisEpasep.length !== 11)
        resultado = "O número do PIS/PASEP deve conter 11 digitos"

    else if (valorHora < 20 || valorHora > 500)
        resultado = "O valor da hora trabalhada deve estar entre 20 e 500."

    else if (qtdHoras < 20 || qtdHoras > 200)
        resultado = "A quantidade de horas trabalhadas deve estar entre 20 e 200."

    document.querySelector("#resultado").innerHTML = resultado;
}

function calcularINSS(salarioBruto) {
    if (salarioBruto <= 1500.99) {
        return salarioBruto * 0.075;
    } else if (salarioBruto <= 3000.99) {
        return salarioBruto * 0.09;
    } else if (salarioBruto <= 5000.99) {
        return salarioBruto * 0.12;
    } else {
        return salarioBruto * 0.14;
    }
}

function calcularIRPF(salarioBruto) {
    if (salarioBruto <= 1500.99) {
        return 0;
    } else if (salarioBruto <= 2000.99) {
        return salarioBruto * 0.075;
    } else if (salarioBruto <= 3000.99) {
        return salarioBruto * 0.15;
    } else if (salarioBruto <= 4000.99) {
        return salarioBruto * 0.225;
    } else {
        return salarioBruto * 0.275;
    }
}

function calcularISS(salarioBruto) {
    return salarioBruto * 0.05;
}

document.querySelector('button').addEventListener('click', calcularPagamento);