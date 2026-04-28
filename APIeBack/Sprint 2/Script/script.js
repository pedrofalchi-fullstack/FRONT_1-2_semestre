function MudarDiv() {
    var section = document.getElementById("contato-section")

  section.innerHTML = `
    <div class="mensagem-sucesso">
        <h2>Mensagem enviada com sucesso!</h2>
        <p>Obrigado por entrar em contato. Nossa equipe responderá o mais rápido possível.</p>
        <button onclick="window.location.reload()">Enviar outra mensagem</button>
    </div>
  `;

  section.style.textAlign = "center";
  section.style.padding = "60px";
}


function ExibirMenu() {
    var menu = document.getElementById("menu");
    var links = document.querySelectorAll(".menu a");
    var botao = document.querySelectorAll(".menu #botao");
    

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.position = "absolute";
        menu.style.top = "100%";
        menu.style.left = "0";
        menu.style.width = "100%";
        menu.style.background = "white";
        menu.style.borderTop = "1px solid #f1f3f5";
        menu.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
        menu.style.padding = "20px";
        menu.style.gap = "0";

        links.forEach(link => {
            link.style.display = "block";
            link.style.width = "100%";
            link.style.textAlign = "center";
            link.style.padding = "15px";
            link.style.borderBottom = "1px solid #f1f3f5";
            link.style.fontSize = "16px";
            link.style.color = "#495057";
        });
        menu.querySelector("a:last-child").style.borderBottom = "none";

        menu.querySelectorAll("a").forEach(link => {
            link.addEventListener("mouseenter", () => link.style.background = "#f8f9fa");
            link.addEventListener("mouseleave", () => link.style.color = "#2c3e50");
        });
        botao.style.margin = "10px 0" 
        botao.style.background = "#2c3e50" 
        botao.style.color = "white" 
        botao.style.width =  "100%"; 
        botao.style.textAlign = "center";
    }
}