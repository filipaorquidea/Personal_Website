const numDivs = 5;

for (let i = 0; i < numDivs; i++) {
  createDraggableDiv();
}

// Criar um div especial que segue o cursor
const followerDiv = document.createElement('div');
followerDiv.classList.add('draggable');
followerDiv.style.pointerEvents = 'none'; // Para não interferir com cliques
followerDiv.appendChild(document.createTextNode('FILIPA ORQUIDEA'));
document.body.appendChild(followerDiv);

// Seguir o movimento do rato
document.addEventListener('mousemove', (e) => {
  followerDiv.style.left = `${e.clientX - 100}px`; // -100 para centrar aproximadamente
  followerDiv.style.top = `${e.clientY - 25}px`;   // -25 para centrar verticalmente
});

function createDraggableDiv() {
  const draggable = document.createElement('div');
  draggable.classList.add('draggable');
  draggable.appendChild(document.createTextNode('FILIPA ORQUIDEA'));
  
  const randomX = Math.random() * (window.innerWidth-200);
  const randomY = Math.random() * (window.innerHeight+400);

  draggable.style.left = `${randomX}px`;
  draggable.style.top = `${randomY}px`;

  let isDragging = false;
  let offsetX, offsetY;

  draggable.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - draggable.getBoundingClientRect().left;
    offsetY = e.clientY - draggable.getBoundingClientRect().top;
    draggable.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;

      draggable.style.left = `${x}px`;
      draggable.style.top = `${y}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    draggable.style.cursor = 'grab';
  });

  document.body.appendChild(draggable);
}