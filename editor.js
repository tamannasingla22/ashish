document.getElementById("generateBtn").addEventListener("click", () => {
    const festival = document.getElementById("festival").value.trim();
    const message = document.getElementById("message").value.trim();
  
    const card = document.getElementById("greetingCard");
    card.innerHTML = `
      <h2 class="text-2xl font-bold text-blue-700 mb-2">${festival}</h2>
      <p class="text-gray-700 text-lg">${message}</p>
    `;
  });
  
  document.getElementById("downloadBtn").addEventListener("click", () => {
    const card = document.getElementById("greetingCard");
  
    html2canvas(card, { backgroundColor: null }).then(canvas => {
      const link = document.createElement("a");
      link.download = "parvpost-greeting.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  });
  