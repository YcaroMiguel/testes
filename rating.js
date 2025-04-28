document.addEventListener('DOMContentLoaded', function () {
    const studentsData = [
        { name: "Aimê Laís", points: 120, history: ["Atraso: 2x", "Ajuda no Pequeno Grupo: 1x"] },
        { name: "Alanna Gabrielly", points: 150, history: ["Conversa: 1x", "Ajuda aos colegas: 3x"] },
        { name: "Alice Feitosa", points: 90, history: ["Brincadeiras na sala: 2x", "Ajuda no Pequeno Grupo: 1x"] },
        { name: "Ana Clara", points: 110, history: ["Atraso: 1x", "Uso do celular: 1x"] },
        { name: "Ana Sophia", points: 105, history: ["Brincadeiras na sala: 1x", "Ajuda aos colegas: 2x"] },
        { name: "André Lucas", points: 95, history: ["Atraso: 1x", "Uso do celular: 1x"] },
        { name: "Ashira Giovanna", points: 130, history: ["Ajuda aos colegas: 2x", "Brincadeiras na sala: 1x"] },
        { name: "Bruna Vitória", points: 100, history: ["Ajuda no Pequeno Grupo: 1x", "Conversa: 2x"] },
        { name: "Cesar Miguel", points: 140, history: ["Atraso: 3x", "Ajuda aos colegas: 1x"] }
    ];

    const sliderTrack = document.querySelector('.slider-track');
    const popup = document.createElement('div');
    popup.classList.add('popup');
    document.body.appendChild(popup);

    studentsData.forEach((student, index) => {
        const sliderItem = document.createElement('div');
        sliderItem.classList.add('slider-item');
        
        const img = document.createElement('img');
        img.src = `https://via.placeholder.com/100?text=${student.name.charAt(0)}`;
        sliderItem.appendChild(img);

        const p = document.createElement('p');
        p.textContent = `#${index + 1} - ${student.name}`;
        sliderItem.appendChild(p);

        sliderItem.addEventListener('click', function () {
            popup.style.display = 'flex';
            popup.innerHTML = `
                <div class="popup-content">
                    <h2>${student.name}</h2>
                    <ul>
                        ${student.history.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    <button class="close-popup">Fechar</button>
                </div>
            `;

            document.querySelector('.close-popup').addEventListener('click', () => {
                popup.style.display = 'none';
            });
        });

        sliderTrack.appendChild(sliderItem);
    });

    // Atualizar o contador de jogadores
    document.getElementById('player-count').textContent = `Total de jogadores: ${studentsData.length}`;
});