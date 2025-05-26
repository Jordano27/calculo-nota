document.getElementById("verMedia").addEventListener("click",  function(event) {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let media = document.getElementById("media");

    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        media.innerHTML = "Por favor, insira valores numéricos válidos!";
        return;
    }

    let nota = (nota1 + nota2 + nota3) / 3;

    if (nota === 10) {
        media.innerHTML = `🎉 Parabéns! Sua média é ${nota.toFixed(2)}!`;
    } else if (nota >= 7) {
        media.innerHTML = `✅ Aprovado! Sua média é ${nota.toFixed(2)}`;
    } else {
        media.innerHTML = `❌ Reprovado! Sua média é ${nota.toFixed(2)}`;
    }
});

["nota1", "nota2", "nota3"].forEach(function(id) {
    document.getElementById(id).addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            document.getElementById("verMedia").click(); 
        }
    });
});