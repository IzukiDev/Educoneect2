const emailsRegistrados = ["usuario1@example.com", "usuario2@example.com", "usuario3@example.com"];

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    
    if(emailsRegistrados.includes(email)) {
        if(senha !== "251118") {
            window.location.href = "parte1/index1.html";
        } else {
            alert("Por favor, insira sua senha.");
        }
    } else {
        alert("E-mail não registrado. Por favor, insira um e-mail válido.");
    }
});
