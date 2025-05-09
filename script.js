function atualizarRanking() {
  const tbody = document.getElementById("ranking-body");
  
  const dados = [
    { nome: "Elias Maia", pontos: 155 },
    { nome: "Ana Sophia", pontos: 150 },
    { nome: "Thais Lopez", pontos: 145 },
    { nome: "João Lucas", pontos: 135 },
    { nome: "Ycaro Miguel", pontos: 135 },
    { nome: "Gustavo Luiz", pontos: 130 },
    { nome: "Júlio Cezar", pontos: 130 },
    { nome: "Rebecca", pontos: 130 },
    { nome: "Sury de França", pontos: 124 },
    { nome: "Cesar Miguel", pontos: 120 },
    { nome: "Isabelly Lins", pontos: 115 },
    { nome: "Aimê Laís", pontos: 110 },
    { nome: "Alice Feitosa", pontos: 100 },
    { nome: "Bruna Vitória", pontos: 98 },
    { nome: "Felipe de Melo", pontos: 95 },
    { nome: "Hiel Alves", pontos: 95 },
    { nome: "Kaira Vitória (NP)", pontos: 90 },
    { nome: "Emanuelly", pontos: 88 },
    { nome: "Marya Luiza", pontos: 88 },
    { nome: "Maria Alice", pontos: 85 },
    { nome: "Ana Clara", pontos: 83 },
    { nome: "Ashira Giovanna", pontos: 80 },
    { nome: "Allanna Gabrielly", pontos: 78 },
    { nome: "Samuel", pontos: 77 },
    { nome: "Lyvia Emanuelly", pontos: 73 },
    { nome: "Pedro Henrique", pontos: 70 },
    { nome: "André Lucas", pontos: 55 },
    { nome: "Gabriel Pinheiro", pontos: 25 },
    { nome: "Maria Eduarda", pontos: 5 },
    { nome: "Luiz Gabriel", pontos: -8 },
    { nome: "Matheus Vitor", pontos: -25 },
  ];

  // Ordena por pontos (decrescente) e nome (crescente) se empatar
  dados.sort((a, b) => {
    if (b.pontos !== a.pontos) return b.pontos - a.pontos;
    return a.nome.localeCompare(b.nome);
  });

  tbody.innerHTML = "";

  dados.forEach((aluno, index) => {
    const tr = document.createElement("tr");

    let rankClass = "";
    let medalha = "";
    if (index === 0) {
      rankClass = "rank-1";
      medalha = "🥇";
    } else if (index === 1) {
      rankClass = "rank-2";
      medalha = "🥈";
    } else if (index === 2) {
      rankClass = "rank-3";
      medalha = "🥉";
    }

    tr.className = rankClass;

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td><a href="historico.html?nome=${encodeURIComponent(aluno.nome)}" target="_blank">${medalha ? `<span class="medal">${medalha}</span>` : ""}${aluno.nome}</a></td>
      <td>${aluno.pontos}</td>
    `;
    tbody.appendChild(tr);
  });
}

window.onload = atualizarRanking;
