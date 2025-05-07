const quotes = {
    science: [
      "Science is a way of thinking much more than it is a body of knowledge. – Carl Sagan",
      "The good thing about science is that it's true whether or not you believe in it. – Neil deGrasse Tyson",
      "Equipped with his five senses, man explores the universe around him. – Edwin Hubble",
      "Somewhere, something incredible is waiting to be known. – Carl Sagan",
      "The important thing is to never stop questioning. – Albert Einstein",
      "Science knows no country, because knowledge belongs to humanity. – Louis Pasteur",
      "Research is what I'm doing when I don't know what I'm doing. – Wernher von Braun",
      "Science is organized knowledge. Wisdom is organized life. – Immanuel Kant",
      "The science of today is the technology of tomorrow. – Edward Teller",
      "We cannot solve our problems with the same thinking we used when we created them. – Albert Einstein"
    ],
    life: [
      "Life is what happens when you're busy making other plans. – John Lennon",
      "The purpose of our lives is to be happy. – Dalai Lama",
      "In the middle of every difficulty lies opportunity. – Albert Einstein",
      "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
      "The only way to do great work is to love what you do. – Steve Jobs",
      "Believe you can and you're halfway there. – Theodore Roosevelt",
      "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
      "It does not matter how slowly you go as long as you do not stop. – Confucius",
      "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
      "Dream big and dare to fail. – Norman Vaughan"
    ]
  };
  
  
  let currentCategory = "science";
  let currentIndex = 0;
  let fontSize = 1.2;
  
  const quoteText = document.getElementById("quoteText");
  const modeToggle = document.getElementById("modeToggle");
  const fontIncrease = document.getElementById("fontIncrease");
  const fontDecrease = document.getElementById("fontDecrease");
  const categorySelect = document.getElementById("categorySelect");
  
  function updateQuote() {
    const categoryQuotes = quotes[currentCategory];
    quoteText.textContent = categoryQuotes[currentIndex];
  }
  
  categorySelect.addEventListener("change", (e) => {
    currentCategory = e.target.value;
    currentIndex = 0;
    updateQuote();
  });
  
  document.getElementById("nextBtn").addEventListener("click", () => {
    const categoryQuotes = quotes[currentCategory];
    currentIndex = (currentIndex + 1) % categoryQuotes.length;
    updateQuote();
  });
  
  document.getElementById("prevBtn").addEventListener("click", () => {
    const categoryQuotes = quotes[currentCategory];
    currentIndex = (currentIndex - 1 + categoryQuotes.length) % categoryQuotes.length;
    updateQuote();
  });
  
  document.getElementById("randomBtn").addEventListener("click", () => {
    const categoryQuotes = quotes[currentCategory];
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * categoryQuotes.length);
    } while (randomIndex === currentIndex);
    currentIndex = randomIndex;
    updateQuote();
  });
  
  modeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", modeToggle.checked);
  });
  
  fontIncrease.addEventListener("click", () => {
    fontSize += 0.1;
    quoteText.style.fontSize = `${fontSize}rem`;
  });
  
  fontDecrease.addEventListener("click", () => {
    fontSize = Math.max(0.8, fontSize - 0.1);
    quoteText.style.fontSize = `${fontSize}rem`;
  });
  
  updateQuote();
  
