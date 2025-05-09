function atualizarRanking() {
  const tbody = document.getElementById("ranking-body");
  const rows = Array.from(tbody.querySelectorAll("tr"));

  const dados = rows.map(row => {
    const nome = row.children[1].textContent.trim();
    const pontos = parseInt(row.children[2].textContent);
    return { nome, pontos };
  });

  // Apontamentos de hoje
  const apontamentos = [
    { nomes: ["Sury", "Matheus", "Isabelly", "Ana Sophia"], tipo: "negativo" },
    { nomes: ["Allana", "Hiel", "Ycaro"], tipo: "positivo" },
    { nomes: ["Felipe", "Kaira"], tipo: "negativo" }
  ];

  // Aplicar apontamentos
  apontamentos.forEach(ap => {
    ap.nomes.forEach(nome => {
      const aluno = dados.find(a => a.nome === nome);
      if (aluno) {
        aluno.pontos += ap.tipo === "positivo" ? 1 : -1;
      }
    });
  });

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
