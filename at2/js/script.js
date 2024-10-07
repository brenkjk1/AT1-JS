function exibirResultado() {
    let name = document.querySelector('#nome').value;
    let Ninscricao = document.querySelector('#inscricao').value;
    let ano = parseInt(document.querySelector('#nascimento').value);
    let nat = parseFloat(document.querySelector('#materia1').value);
    let hum = parseFloat(document.querySelector('#materia2').value);
    let lin = parseFloat(document.querySelector('#materia3').value);
    let mat = parseFloat(document.querySelector('#materia4').value);
    let red = parseFloat(document.querySelector('#materia5').value);
    let resultado = "";

    if (!name || isNaN(ano) || !Ninscricao || isNaN(nat) || isNaN(hum) || isNaN(lin) || isNaN(mat) || isNaN(red)) {
        resultado = "Todos os campos devem ser preenchidos.";
    } else if (ano < 1901 || ano > 2007) {
        resultado = "Ano de nascimento inválido.";
    } else if (Ninscricao.length !== 10 || !Ninscricao.startsWith("2024")) {
        resultado = "Número de inscrição inválido.";
    } else {
        let aprovados = "";
        let reprovados = "";
        let emRecuperacao = "";

        if (nat >= 550) {
            aprovados += "Natureza (" + nat + ") ";
        } else if (nat <= 400) {
            reprovados += "Natureza (" + nat + ") ";
        } else {
            emRecuperacao += "Natureza (" + nat + ") ";
        }

        if (hum >= 550) {
            aprovados += "Humanas (" + hum + ") ";
        } else if (hum <= 400) {
            reprovados += "Humanas (" + hum + ") ";
        } else {
            emRecuperacao += "Humanas (" + hum + ") ";
        }

        if (lin >= 550) {
            aprovados += "Linguagens (" + lin + ") ";
        } else if (lin <= 400) {
            reprovados += "Linguagens (" + lin + ") ";
        } else {
            emRecuperacao += "Linguagens (" + lin + ") ";
        }

        if (mat >= 550) {
            aprovados += "Matemática (" + mat + ") ";
        } else if (mat <= 400) {
            reprovados += "Matemática (" + mat + ") ";
        } else {
            emRecuperacao += "Matemática (" + mat + ") ";
        }

        if (red >= 550) {
            aprovados += "Redação (" + red + ") ";
        } else if (red <= 400) {
            reprovados += "Redação (" + red + ") ";
        } else {
            emRecuperacao += "Redação (" + red + ") ";
        }

        resultado = `${name}, você está: `;
        if (reprovados) {
            resultado += "Reprovado em: <span class='reprovado'>" + reprovados + "</span><br>";
        }
        if (emRecuperacao) {
            resultado += "Em recuperação em: <span class='recuperacao'>" + emRecuperacao + "</span><br>";
        }
        if (aprovados) {
            resultado += "Aprovado em: <span class='aprovado'>" + aprovados + "</span>";
        }
    }

    document.querySelector("#resultado").innerHTML = resultado;
}
document.querySelector('button').addEventListener('click', exibirResultado);