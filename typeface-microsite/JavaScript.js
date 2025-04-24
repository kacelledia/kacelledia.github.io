document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll('.scattered');
  
    boxes.forEach(box => {
      const randTop = Math.random() * 80 + 10;   // 10% to 90%
      const randLeft = Math.random() * 80 + 10;  // 10% to 90%
      
      box.style.top = `${randTop}%`;
      box.style.left = `${randLeft}%`;
    });
  });