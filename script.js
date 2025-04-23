function atualizarRanking() {
  const tbody = document.getElementById("ranking-body");
  const perfilBox = document.getElementById("perfil-conteudo");

  const alunos = [
    {
      nome: "Aimê Laís",
      pontos: 0,
      caracteristicas: "Organizada, prestativa, observadora.",
      imagem: "img/aime.jpg"
    },
    {
      nome: "Alice Feitosa",
      pontos: -50,
      caracteristicas: "Criativa, dedicada, curiosa.",
      imagem: "img/alice.jpg"
    },
    {
      nome: "Bruno Cardoso",
      pontos: 100,
      caracteristicas: "Engraçado, esforçado, bom líder.",
      imagem: "img/bruno.jpg"
    },
    // Adicione mais alunos aqui...
  ];

  // Ordena por pontos decrescente e, em caso de empate, por nome
  alunos.sort((a, b) => {
    if (b.pontos !== a.pontos) return b.pontos - a.pontos;
    return a.nome.localeCompare(b.nome);
  });

  tbody.innerHTML = "";

  alunos.forEach((aluno, index) => {
    const tr = document.createElement("tr");

    let medalha = "";
    if (index === 0) medalha = "🥇";
    else if (index === 1) medalha = "🥈";
    else if (index === 2) medalha = "🥉";

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td><a href="#" onclick="mostrarPerfil('${aluno.nome}')">${medalha ? `<span class='medal'>${medalha}</span>` : ""}${aluno.nome}</a></td>
      <td>${aluno.pontos}</td>
    `;

    tbody.appendChild(tr);
  });

  // Torna os dados acessíveis fora da função
  window.listaAlunos = alunos;
}

function mostrarPerfil(nome) {
  const aluno = window.listaAlunos.find(a => a.nome === nome);
  const perfil = document.getElementById("perfil-conteudo");

  if (aluno) {
    perfil.innerHTML = `
      <img src="${aluno.imagem}" alt="Foto de ${aluno.nome}">
      <h3>${aluno.nome}</h3>
      <p><strong>Características:</strong> ${aluno.caracteristicas}</p>
      <p><strong>Pontos atuais:</strong> ${aluno.pontos}</p>
    `;
  }
}

window.onload = atualizarRanking;