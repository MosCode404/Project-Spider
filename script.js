const spiders = [
  {
    name: "Caribena versicolor",
    description: "A colorful arboreal tarantula.",
    price: "€85",
    emoji: "🕷️"
  },
  {
    name: "Brachypelma hamorii",
    description: "A striking New World terrestrial tarantula.",
    price: "€95",
    emoji: "🕷️"
  },
  {
    name: "Tliltocatl albopilosus",
    description: "A hardy and distinctive curly-haired tarantula.",
    price: "€65",
    emoji: "🕷️"
  },
  {
    name: "Grammostola pulchripes",
    description: "Known for its beautiful golden markings.",
    price: "€90",
    emoji: "🕷️"
  },
  {
    name: "Poecilotheria regalis",
    description: "A striking arboreal species with dramatic markings.",
    price: "€110",
    emoji: "🕷️"
  },
  {
    name: "Chromatopelma cyaneopubescens",
    description: "A colorful species with blue, orange and green tones.",
    price: "€100",
    emoji: "🕷️"
  }
];

const grid = document.getElementById("spider-grid");

spiders.forEach(spider => {

  const card = document.createElement("div");

  card.className = "spider-card";

  card.innerHTML = `
    <div class="spider-image">
      ${spider.emoji}
    </div>

    <div class="spider-info">
      <h3>${spider.name}</h3>

      <p>${spider.description}</p>

      <p class="price">${spider.price}</p>
    </div>
  `;

  grid.appendChild(card);
});


/* =========================
   AI ASSISTANT DEMO
========================= */

const chatButton = document.getElementById("chat-button");
const chatWindow = document.getElementById("chat-window");
const closeChat = document.getElementById("close-chat");

const chatInput = document.getElementById("chat-input");
const sendMessage = document.getElementById("send-message");
const messages = document.getElementById("chat-messages");


chatButton.addEventListener("click", () => {
  chatWindow.style.display = "flex";
});


closeChat.addEventListener("click", () => {
  chatWindow.style.display = "none";
});


function addMessage(text, type) {

  const message = document.createElement("div");

  message.className =
    type === "user"
      ? "user-message"
      : "bot-message";

  message.textContent = text;

  messages.appendChild(message);

  messages.scrollTop = messages.scrollHeight;
}


function assistantReply(question) {

  const q = question.toLowerCase();

  if (q.includes("price") || q.includes("cost")) {

    return "Our demo collection currently ranges from €65 to €110. Ask me about a specific species for more information.";

  }

  if (q.includes("available")) {

    return "The spiders shown in the collection are currently listed as available in this demo.";

  }

  if (q.includes("beginner")) {

    return "For beginners, we would normally recommend researching species carefully and considering temperament, adult size, care requirements and experience level before choosing.";

  }

  if (q.includes("species")) {

    return "We currently have six demo species listed. You can browse the collection above.";

  }

  if (q.includes("hello") || q.includes("hi")) {

    return "Hello! 🕷️ What would you like to know about our collection?";

  }

  return "I can help with questions about our demo collection, prices and general information. Try asking: “What species do you have?”";
}


function sendChatMessage() {

  const question = chatInput.value.trim();

  if (!question) return;

  addMessage(question, "user");

  chatInput.value = "";

  setTimeout(() => {

    const answer = assistantReply(question);

    addMessage(answer, "bot");

  }, 500);
}


sendMessage.addEventListener("click", sendChatMessage);


chatInput.addEventListener("keydown", event => {

  if (event.key === "Enter") {

    sendChatMessage();

  }

});
