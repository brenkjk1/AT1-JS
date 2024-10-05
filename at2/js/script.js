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
            aprovados += "Matemática (" + nat + "), ";
        } else if (nat <= 400) {
            reprovados += "Matemática (" + nat + "), ";
        } else {
            emRecuperacao += "Matemática (" + nat + "), ";
        }

        if (hum >= 550) {
            aprovados += "Língua Portuguesa (" + hum + "), ";
        } else if (hum <= 400) {
            reprovados += "Língua Portuguesa (" + hum + "), ";
        } else {
            emRecuperacao += "Língua Portuguesa (" + hum + "), ";
        }

        if (lin >= 550) {
            aprovados += "História (" + lin + "), ";
        } else if (lin <= 400) {
            reprovados += "História (" + lin + "), ";
        } else {
            emRecuperacao += "História (" + lin + "), ";
        }

        if (mat >= 550) {
            aprovados += "Geografia (" + mat + "), ";
        } else if (mat <= 400) {
            reprovados += "Geografia (" + mat + "), ";
        } else {
            emRecuperacao += "Geografia (" + mat + "), ";
        }

        if (red >= 550) {
            aprovados += "Ciências (" + red + "), ";
        } else if (red <= 400) {
            reprovados += "Ciências (" + red + "), ";
        } else {
            emRecuperacao += "Ciências (" + red + "), ";
        }

        if (aprovados) {
            aprovados = aprovados.slice(0, -2);
        }
        if (reprovados) {
            reprovados = reprovados.slice(0, -2);
        }
        if (emRecuperacao) {
            emRecuperacao = emRecuperacao.slice(0, -2);
        }

        resultado = `${name}, você está: `;
        if (reprovados) {
            resultado += "Reprovado em: <span class='reprovado'>" + reprovados + "</span>.<br>";
        }
        if (emRecuperacao) {
            resultado += "Em recuperação em: <span class='recuperacao'>" + emRecuperacao + "</span>.<br>";
        }
        if (aprovados && !reprovados && !emRecuperacao) {
            resultado += "<span class='aprovado'>Aprovado em todas as matérias.</span>";
        } else if (aprovados) {
            resultado += "Aprovado em: <span class='aprovado'>" + aprovados + "</span>.";
        }
    }

    document.querySelector("#resultado").innerHTML = resultado;
}

document.querySelector('button').addEventListener('click', exibirResultado);


// Monta o resultado
resultado = `${name}, você está: `;
if (reprovados) {
    resultado += "Reprovado em: <span class='reprovado'>" + reprovados + "</span>.<br>";
}
if (emRecuperacao) {
    resultado += "Em recuperação em: <span class='recuperacao'>" + emRecuperacao + "</span>.<br>";
}
if (aprovados && !reprovados && !emRecuperacao) {
    resultado += "<span class='aprovado'>Aprovado em todas as matérias.</span>";
} else if (aprovados) {
    resultado += "Aprovado em: <span class='aprovado'>" + aprovados + "</span>.";
}