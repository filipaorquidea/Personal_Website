const numDivs = 10;

for (let i = 0; i < numDivs; i++) {
  createDiv();
}

function createDiv() {
  const work = document.createElement('div');
  work.classList.add('work');
  work.appendChild(document.createTextNode('WORK'));

  const randomX = Math.random() * (window.innerWidth - 150);
  const randomY = Math.random() * (window.innerHeight + 350);

  work.style.left = `${randomX}px`;
  work.style.top = `${randomY}px`;


  let isDragging = false;
  let offsetX, offsetY;

  work.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - work.getBoundingClientRect().left;
    offsetY = e.clientY - work.getBoundingClientRect().top;
    work.style.cursor = 'grabbing';
    document.body.style.setProperty("user-select", "none");
    document.body.style.setProperty("-webkit-user-select", "none"); // Safari fix
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;

      work.style.left = `${x}px`;
      work.style.top = `${y}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    work.style.cursor = 'grab';
    document.body.style.removeProperty("user-select");
    document.body.style.removeProperty("-webkit-user-select");

  });

  document.body.appendChild(work);

}

const projects = {
  project1: {
    title: "Sistema Interativo + Identidade Visual",
    date: "2025",
    client: "Dissertação de Mestrado",
    description: [""],
    tags: ["Sistema", "Interatividade", "Identidade Visual", "Tipografia"],
    images: [
      "Images/tese/tese2.png",
      "Images/tese/tese1.png",
      "Images/tese/tese3.png",
      "Images/tese/tese4.png",
      "Images/tese/tese5.png",
      "Images/tese/tese6.png"
    ]
  },
  project2: {
    title: "Identidade Visual - Exposição",
    date: "2024",
    client: "Oficina de Meios Digitais",
    description: ["LAGEN destaca o trabalho de Daniela Haufe, uma das cofundadoras do Cyan Studio. Esta exposição faz parte de uma série do Colégio das Artes, dedicada a promover a história do design gráfico, apresentando as contribuições de designers contemporâneos e históricos.",
      "A exposição tem como objetivo explorar as camadas do trabalho de Haufe, uma técnica que ela emprega com frequência. Cada sala representa uma camada diferente do seu processo criativo, com o layout projetado para refletir esse conceito.",
      "Em algumas salas, dispositivos tecnológicos capturam momentos específicos dentro desse espaço, permitindo que os visitantes criem cartazes personalizados da sua experiência no final da exposição.",
      "A tecnologia por trás dessa interação envolve etiquetas RFID que rastreiam o percurso de cada visitante pelo espaço.",
      "O cartaz final é composto usando dados de várias salas: uma cor da Sala de Cores, uma pose capturada na Sala de Movimento e um filtro visual da Sala de Sobreposição.",
      "A exposição também apresenta uma mini impressora tipográfica impressa em 3D, oferecendo uma experiência que conecta as técnicas iniciais de design gráfico com as ferramentas digitais contemporâneas, simbolizando uma jornada dos métodos tradicionais aos modernos, à medida que os visitantes levam seus cartazes personalizados para casa."],
    tags: ["Identidade Visual", "Exposição", "Tecnologia", "3D"],
    images: [
      "Images/odm/odm11.png",
      "Images/odm/odm1.png",
      "Images/odm/odm2.png",
      "Images/odm/odm4.png",
      "Images/odm/odm5.png",
      "Images/odm/odm7.png",
      "Images/odm/odm3.png"
    ]
  },
  project3: {
    title: "Design Editorial",
    date: "2023",
    client: "Laboratório Editorial",
    description: "Criação de embalagens para linha de produtos orgânicos. O design privilegiou a sustentabilidade visual e física, com ilustrações botânicas originais e informações claras sobre os produtos. Sistema flexível aplicável a toda a linha de produtos.",
    tags: ["Packaging", "Ilustração", "Sustentabilidade", "Produto"],
    images: [
      "Images/le/le1.jpeg",
      "Images/le/le2.jpeg",
      "Images/le/le3.jpeg",
      "Images/le/le4.png",
      "Images/le/le5.png",
      "Images/le/le6.png",
      "Images/le/le7.png"
    ]
  },
  project4: {
    title: "Tipografia Modular",
    date: "2023",
    client: "Tiporafia Avançada",
    description: "Criação de embalagens para linha de produtos orgânicos. O design privilegiou a sustentabilidade visual e física, com ilustrações botânicas originais e informações claras sobre os produtos. Sistema flexível aplicável a toda a linha de produtos.",
    tags: ["Packaging", "Ilustração", "Sustentabilidade", "Produto"],
    images: [
      "Images/ta/tp1.jpg",
      "Images/ta/tp2.png",
      "Images/ta/tp3.jpg"
    ]
  },
  project5: {
    title: "Objeto Editorial",
    date: "2022",
    client: "Projeto 3 - ",
    description: "Criação de embalagens para linha de produtos orgânicos. O design privilegiou a sustentabilidade visual e física, com ilustrações botânicas originais e informações claras sobre os produtos. Sistema flexível aplicável a toda a linha de produtos.",
    tags: ["Packaging", "Ilustração", "Sustentabilidade", "Produto"],
    images: [
      "Images/p3/p31.jpg",
      "Images/p3/p32.jpg",
      "Images/p3/p33.jpg",
      "Images/p3/p34.png"
    ]
  },
  project6: {
    title: "Identidade Visual - Museu",
    date: "2021",
    client: "Teoria do Design de Comunicação",
    description: "Criação de embalagens para linha de produtos orgânicos. O design privilegiou a sustentabilidade visual e física, com ilustrações botânicas originais e informações claras sobre os produtos. Sistema flexível aplicável a toda a linha de produtos.",
    tags: ["Packaging", "Ilustração", "Sustentabilidade", "Produto"],
    images: [
      "Images/tdc/tdc1.jpg",
      "Images/tdc/tdc2.jpg",
      "Images/tdc/tdc3.jpg",
      "Images/tdc/tdc4.jpg",
      "Images/tdc/tdc5.jpg",
      "Images/tdc/tdc6.png"
    ]
  },
  project7: {
    title: "Design Editorial",
    date: "2020",
    client: "História do Design",
    description: "Design de revista mensal com foco em arte e cultura contemporânea. Trabalho incluiu desenvolvimento de layout, seleção tipográfica, tratamento de imagens e criação de elementos gráficos personalizados para cada edição.",
    tags: ["Editorial", "Layout", "Tipografia", "Revista"],
    images: [
      "Images/hd/capa bauhaus .PNG",
      "Images/hd/revista.png",
      "Images/hd/revista2.png",
      "Images/hd/revista3.png"
    ]
  }
};


function openModal(projectId) {
  const project = projects[projectId];
  const modal = document.getElementById('modal');

  document.getElementById('projectTitle').textContent = project.title;
  document.getElementById('projectDate').textContent = project.date;
  document.getElementById('projectClient').textContent = project.client;
  document.getElementById('projectDescription').textContent = project.description;

  // Main image
  document.getElementById('mainImage').src = project.images[0];

  // Thumbnails
  const thumbnailGrid = document.getElementById('thumbnailGrid');
  thumbnailGrid.innerHTML = '';
  project.images.forEach(img => {
    const thumb = document.createElement('img');
    thumb.src = img;
    thumb.className = 'thumbnail';
    thumb.onclick = () => {
      document.getElementById('mainImage').src = img;
    };
    thumbnailGrid.appendChild(thumb);
  });

  // Tags
  const tagsContainer = document.getElementById('projectTags');
  tagsContainer.innerHTML = '';
  project.tags.forEach(tag => {
    const tagElement = document.createElement('span');
    tagElement.className = 'tag';
    tagElement.textContent = tag;
    tagsContainer.appendChild(tagElement);
  });

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function closeModalOnBackground(event) {
  if (event.target.id === 'modal') {
    closeModal();
  }
}

// Fechar com tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

