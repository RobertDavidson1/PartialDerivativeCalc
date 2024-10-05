const handleOnMouseMove = e => {
  const { currentTarget: target } = e;
  
  const rect = target.getBoundingClientRect(),  
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
  
  target.style.setProperty('--x', `${x}px`);
  target.style.setProperty('--y', `${y}px`);
}

for (const card of document.querySelectorAll('.card')) {
  card.onmousemove = handleOnMouseMove;
}

// Removed the incorrect line
// document.getElementById('card').onmousemove = e => handleOnMouseMove(e);
