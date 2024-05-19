document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário
    const form = document.getElementById('contact-form');
    
    // Adiciona um evento de escuta para o envio do formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Obtém os valores dos inputs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Exibe uma mensagem de alerta com os valores (apenas para demonstração)
        alert(`Obrigado por entrar em contato, retornaremos com você em breve!`);
        
        // Aqui você pode adicionar o código para enviar os dados para um servidor
    });
});
