const numDivs = 10;

for (let i = 0; i < numDivs; i++) {
  createDiv();
}

function createDiv() {
  const name = document.createElement('div');
  name.classList.add('name');
  name.appendChild(document.createTextNode('ABOUT ME'));

  const randomX = Math.random() * (window.innerWidth - 200);
  const randomY = Math.random() * (window.innerHeight + 400);

  name.style.left = `${randomX}px`;
  name.style.top = `${randomY}px`;

  let isDragging = false;
  let offsetX, offsetY;

  name.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - name.getBoundingClientRect().left;
    offsetY = e.clientY - name.getBoundingClientRect().top;
    name.style.cursor = 'grabbing';
    document.body.style.setProperty("user-select", "none");
    document.body.style.setProperty("-webkit-user-select", "none"); // Safari fix

  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;

      name.style.left = `${x}px`;
      name.style.top = `${y}px`;

      document.body.style.userSelect = "none";
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    name.style.cursor = 'grab';
    document.body.style.removeProperty("user-select");
    document.body.style.removeProperty("-webkit-user-select");

  });

  document.body.appendChild(name);

}