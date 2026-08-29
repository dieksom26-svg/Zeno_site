```javascript
const botoesCompra = document.querySelectorAll(".buy-button");

botoesCompra.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const plano = botao.getAttribute("data-plan");

        // Salva o plano escolhido
        localStorage.setItem("planoZeno", plano);

        // Abre a página de pagamento
        window.location.href = "./pagamento.html";

    });

});
```
