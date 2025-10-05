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
  });

  document.body.appendChild(work);

}

const projects = {
  project1: {
    title: "Branding Corporativo",
    date: "2024",
    client: "Tech Solutions",
    description: "Desenvolvimento completo de identidade visual para empresa de tecnologia, incluindo logótipo, paleta de cores, tipografia e guidelines de aplicação. O projeto visou criar uma imagem moderna e profissional que transmitisse inovação e confiança.",
    tags: ["Branding", "Identidade Visual", "Logótipo", "Guidelines"],
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800",
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800"
    ]
  },
  project2: {
    title: "Design Editorial",
    date: "2020",
    client: "História do Design",
    description: "Design de revista mensal com foco em arte e cultura contemporânea. Trabalho incluiu desenvolvimento de layout, seleção tipográfica, tratamento de imagens e criação de elementos gráficos personalizados para cada edição.",
    tags: ["Editorial", "Layout", "Tipografia", "Revista"],
    images: [
      "Images/revista.png",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800"
    ]
  },
  project3: {
    title: "Packaging Design",
    date: "2024",
    client: "Organic Foods",
    description: "Criação de embalagens para linha de produtos orgânicos. O design privilegiou a sustentabilidade visual e física, com ilustrações botânicas originais e informações claras sobre os produtos. Sistema flexível aplicável a toda a linha de produtos.",
    tags: ["Packaging", "Ilustração", "Sustentabilidade", "Produto"],
    images: [
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800"
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

