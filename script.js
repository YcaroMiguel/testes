const alunos = [
    { nome: "Aimê Laís", pontos: 25, historico: "Quietos", apontamentos: [] },
    { nome: "Alanna Gabrielly", pontos: 0, historico: "Sem registros", apontamentos: [] },
    { nome: "Alice Feitosa", pontos: -20, historico: "Atraso, Conversa demais", apontamentos: ["Atraso", "Conversa demais"] },
    { nome: "Ana Clara", pontos: -25, historico: "Bagunça excessiva", apontamentos: ["Bagunça excessiva"] },
    { nome: "Ana Sophia", pontos: -25, historico: "Notificação, Outra Notificação", apontamentos: ["Notificação (conversas em excesso)", "Outra Notificação"] },
    { nome: "André Lucas", pontos: -15, historico: "Sem registros", apontamentos: [] },
    { nome: "Ashira Giovanna", pontos: 0, historico: "Sem registros", apontamentos: [] },
    { nome: "Bruna Vitória", pontos: 0, historico: "Sem registros", apontamentos: [] },
    { nome: "Cesar Miguel", pontos: 0, historico: "Sem registros", apontamentos: [] },
    { nome: "Elias Maia", pontos: 0, historico: "Sem registros", apontamentos: [] },
    { nome: "Emanuelly Ester", pontos: 0, historico: "Sem registros", apontamentos: [] },
    { nome: "Felipe de Melo", pontos: 25, historico: "Quietos", apontamentos: [] },
    { nome: "Gabriel Pinheiro", pontos: 0, historico: "Sem registros", apontamentos: [] },
    { nome: "Gustavo Luiz", pontos: 0, historico: "Sem registros", apontamentos: [] },
    { nome: "Hiel Alves", pontos: 0, historico: "Quietos", apontamentos: [] },
    { nome: "Isabelly Lins", pontos: -25, historico: "Sem registros", apontamentos: [] },
    { nome: "João Lucas", pontos: 25, historico: "Quietos", apontamentos: [] },
    { nome: "Júlio Cezar", pontos: 25, historico: "Quietos", apontamentos: [] },
    { nome: "Kaira Vitória", pontos: -15, historico: "Falta sem justificativa", apontamentos: ["Falta sem justificativa"] },
    { nome: "Luiz Gabriel", pontos: 0, historico: "Sem registros", apontamentos: [] },
    { nome: "Lyvia Emanuelly", pontos: -25, historico: "Sem registros", apontamentos: [] },
    { nome: "Maria Alice", pontos: -35, historico: "Conversa demais, Bagunça excessiva", apontamentos: ["Conversa demais", "Bagunça excessiva"] },
    { nome: "Maria Eduarda", pontos: 0, historico: "Sem registros", apontamentos: [] },
    { nome: "Marya Luiza", pontos: 25, historico: "Quietos", apontamentos: [] },
    { nome: "Matheus Vitor", pontos: -60, historico: "Sair da sala sem permissão, Bagunça excessiva", apontamentos: ["Sair da sala s/Permissão", "Bagunça excessiva"] },
    { nome: "Pedro Henrique", pontos: -15, historico: "Falta sem justificativa", apontamentos: ["Falta sem justificativa"] },
    { nome: "Rebecca Silva", pontos: 0, historico: "Sem registros", apontamentos: [] },
    { nome: "Samuel Asafe", pontos: -10, historico: "Conversa demais", apontamentos: ["Conversa demais"] },
    { nome: "Sury de França", pontos: -50, historico: "Notificação, Bagunça excessiva", apontamentos: ["Notificação (conversas em excesso)", "Bagunça excessiva"] },
    { nome: "Thais Lopez", pontos: 25, historico: "Quietos", apontamentos: [] },
    { nome: "Ycaro Miguel", pontos: 0, historico: "Quietos", apontamentos: [] },
  ];
  
  // Fotos dos alunos
  const fotos = {
    "Aimê Laís": "aimê.jpg",
    "Alanna Gabrielly": "alanna.jpg",
    "Alice Feitosa": "alice.jpg",
    "Ana Clara": "ana_clara.jpg",
    "Ana Sophia": "ana_sophia.jpg",
    "André Lucas": "andre.jpg",
    "Ashira Giovanna": "ashira.jpg",
    "Bruna Vitória": "bruna.jpg",
    "Cesar Miguel": "cesar.jpg",
    "Elias Maia": "elias.jpg",
    "Emanuelly Ester": "emanuely.jpg",
    "Felipe de Melo": "felipe.jpg",
    "Gabriel Pinheiro": "gabriel.jpg",
    "Gustavo Luiz": "gustavo.jpg",
    "Hiel Alves": "hiel.jpg",
    "Isabelly Lins": "isabelly.jpg",
    "João Lucas": "joao_lucas.jpg",
    "Júlio Cezar": "julio.jpg",
    "Kaira Vitória": "kaira.jpg",
    "Luiz Gabriel": "luiz.jpg",
    "Lyvia Emanuelly": "lyvia.jpg",
    "Maria Alice": "maria_alice.jpg",
    "Maria Eduarda": "maria_eduarda.jpg",
    "Marya Luiza": "marya.jpg",
    "Matheus Vitor": "matheus.jpg",
    "Pedro Henrique": "pedro.jpg",
    "Rebecca Silva": "rebecca.jpg",
    "Samuel Asafe": "samuel.jpg",
    "Sury de França": "sury.jpg",
    "Thais Lopez": "thais.jpg",
    "Ycaro Miguel": "ycaro.jpg",
  };
  
  // Função para ordenar os alunos
  function ordenarAlunos() {
    alunos.sort((a, b) => {
      // Primeiramente, ordena por pontos (decrescente)
      if (b.pontos !== a.pontos) {
        return b.pontos - a.pontos;
      }
      // Em caso de empate, ordena por nome (alfabeticamente)
      return a.nome.localeCompare(b.nome);
    });
  }
  
  // Função para gerar os cards
  function gerarCards() {
    ordenarAlunos(); // Ordena os alunos antes de gerar os cards
    const container = document.getElementById("ranking-container");
    alunos.forEach(aluno => {
      const foto = fotos[aluno.nome] || "fotos/padrao.jpg"; // Usa foto padrão se não tiver foto específica
      const card = document.createElement("div");
      card.className = "profile-card";
      card.innerHTML = `
        <img src="${foto}" alt="${aluno.nome}">
        <div class="profile-info">
          <h3>${aluno.nome}</h3>
          <p class="points">Pontos: ${aluno.pontos}</p>
          <p><strong>Histórico:</strong> ${aluno.historico}</p>
          <p><strong>Apontamentos:</strong> ${aluno.apontamentos.length > 0 ? aluno.apontamentos.join(", ") : "Nenhum"}</p>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  // Carregar os cards assim que a página for carregada
  window.onload = gerarCards;
  
