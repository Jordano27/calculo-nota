let contadorNotas = 2;

document.getElementById("adicionarNota").addEventListener("click", function () {
    contadorNotas++;
    const novasNotas = document.getElementById("novasNotas");

    const novoInput = document.createElement("input");
    novoInput.type = "text";
    novoInput.className = "notas";
    novoInput.id = `nota${contadorNotas}`;
    novoInput.placeholder = `Nota ${contadorNotas}`;

    // Adiciona evento Enter ao novo input
    novoInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById("verMedia").click();
        }
    });

    novasNotas.appendChild(novoInput);
});

document.getElementById("verMedia").addEventListener("click", function () {
    const notasInputs = document.querySelectorAll(".notas");
    const mediaEl = document.getElementById("media");

    let soma = 0;
    let count = 0;

    notasInputs.forEach(input => {
        const valor = parseFloat(input.value);
        if (!isNaN(valor)) {
            soma += valor;
            count++;
        }
    });

    if (count < 2) {
        mediaEl.innerHTML = "Por favor, insira ao menos duas notas.";
        return;
    }

    const media = soma / count;

    if (media === 10) {
        mediaEl.innerHTML = `🎉 Parabéns! Sua média é ${media.toFixed(2)}!`;
    } else if (media >= 7) {
        mediaEl.innerHTML = `✅ Aprovado! Sua média é ${media.toFixed(2)}`;
    } else {
        mediaEl.innerHTML = `❌ Reprovado! Sua média é ${media.toFixed(2)}`;
    }
});

["nota1", "nota2", "nota3"].forEach(function(id) {
    const input = document.getElementById(id);
    if (input) {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                document.getElementById("verMedia").click();
            }
        });
    }
});
