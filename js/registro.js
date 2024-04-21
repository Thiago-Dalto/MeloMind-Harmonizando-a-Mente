// Verifica se existe uma mensagem de feedback armazenada e a exibe
if (localStorage.getItem('registrar-form')) {
    const feedbackMessage = document.getElementById('registrar-form');
    feedbackMessage.textContent = localStorage.getItem('registrar-form');
  
    // Remove a mensagem de feedback do localStorage após 5 segundos
    setTimeout(() => {
      localStorage.removeItem('registrar-form');
      feedbackMessage.textContent = '';
    }, 5000);
  }
  
  // Pega o formulário pelo seu ID
  const feedbackForm = document.getElementById('registrar-form');
  
  // Adiciona um ouvinte de evento para capturar o envio do formulário
  feedbackForm.addEventListener('submit', (event) => {
    // Previne o comportamento padrão do formulário
    event.preventDefault();
  
    // Captura os valores inseridos no formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
  
    // Cria um objeto de feedback
    const feedback = {
      nome,
      email,
      mensagem,
      data: new Date()
    };
  
    // Armazena ou atualiza a lista de feedbacks no localStorage
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbacks.push(feedback);
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  
    // Exibe uma mensagem de agradecimento e limpa o formulário
    const feedbackMessage = document.getElementById('registrar-form');
    feedbackMessage.textContent = 'Obrigado pelo seu registro!';
    feedbackForm.reset();
  });
  