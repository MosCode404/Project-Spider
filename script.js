const spiders = [
  {
    name: "Brachypelma hamorii",
    commonName: "Mexican Red Knee",
    type: "Terrestrial",
    region: "Mexico",
    description: "A famous Mexican tarantula known for its dark body and striking orange-red knees.",
    experience: "Beginner-friendly"
  },

  {
    name: "Tliltocatl albopilosus",
    commonName: "Curly Hair Tarantula",
    type: "Terrestrial",
    region: "Central America",
    description: "A distinctive tarantula with dense, curly hairs and a generally robust appearance.",
    experience: "Beginner-friendly"
  },

  {
    name: "Grammostola pulchripes",
    commonName: "Chaco Golden Knee",
    type: "Terrestrial",
    region: "South America",
    description: "Recognized for its golden leg markings and attractive dark body.",
    experience: "Beginner-friendly"
  },

  {
    name: "Caribena versicolor",
    commonName: "Martinique Pinktoe",
    type: "Arboreal",
    region: "Martinique",
    description: "A colorful arboreal tarantula that develops striking coloration as it matures.",
    experience: "Intermediate"
  },

  {
    name: "Chromatopelma cyaneopubescens",
    commonName: "Green Bottle Blue",
    type: "Terrestrial",
    region: "Venezuela",
    description: "A highly colorful tarantula famous for its blue legs, orange abdomen and metallic appearance.",
    experience: "Intermediate"
  },

  {
    name: "Theraphosa blondi",
    commonName: "Goliath Bird-Eating Tarantula",
    type: "Terrestrial",
    region: "South America",
    description: "One of the largest and most impressive tarantulas, known for its enormous size.",
    experience: "Advanced"
  }
];


const grid = document.getElementById("spider-grid");


/* CREATE SPECIES CARDS */

spiders.forEach(spider => {

  const card = document.createElement("div");

  card.className = "spider-card";

  card.innerHTML = `
    
    <div class="spider-image">
      🕷️
    </div>

    <div class="spider-info">

      <p class="eyebrow">
        ${spider.type}
      </p>

      <h3>
        ${spider.commonName}
      </h3>

      <p>
        <em>${spider.name}</em>
      </p>

      <p>
        ${spider.description}
      </p>

      <p>
        <strong>Region:</strong> ${spider.region}
      </p>

      <p class="price">
        ${spider.experience}
      </p>

    </div>
  `;

  grid.appendChild(card);

});


/* =========================
   BIRD SPIDER ASSISTANT
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


  if (
    q.includes("bird spider") ||
    q.includes("tarantula")
  ) {

    return "Bird spider is a common term associated with tarantulas. Tarantulas belong primarily to the family Theraphosidae and include many different species.";
  }


  if (
    q.includes("beginner") ||
    q.includes("start")
  ) {

    return "Some terrestrial tarantulas are commonly considered more suitable for beginners, but the choice should always depend on the individual species and the keeper's experience.";
  }


  if (
    q.includes("goliath") ||
    q.includes("theraphosa")
  ) {

    return "The Goliath bird-eating tarantula (Theraphosa blondi) is one of the largest tarantulas. Despite its name, birds are not its normal food.";
  }


  if (
    q.includes("red knee") ||
    q.includes("hamorii")
  ) {

    return "Brachypelma hamorii, commonly called the Mexican Red Knee, is a terrestrial Mexican tarantula famous for its orange-red leg markings.";
  }


  if (
    q.includes("curly") ||
    q.includes("albopilosus")
  ) {

    return "Tliltocatl albopilosus is commonly known as the Curly Hair Tarantula and is recognized for its dense, curly hairs.";
  }


  if (
    q.includes("arboreal") ||
    q.includes("tree")
  ) {

    return "Arboreal tarantulas are adapted to living above the ground and generally require appropriately designed vertical enclosures with climbing opportunities.";
  }


  if (
    q.includes("molting") ||
    q.includes("molt") ||
    q.includes("shedding")
  ) {

    return "Molting is how tarantulas grow by shedding their old exoskeleton. A tarantula should not be disturbed during the molting process.";
  }


  if (
    q.includes("food") ||
    q.includes("eat") ||
    q.includes("feeding")
  ) {

    return "Tarantulas are predators that commonly eat invertebrate prey. Feeding requirements vary with species and life stage.";
  }


  if (
    q.includes("hello") ||
    q.includes("hi")
  ) {

    return "Hello! 🕷️ I'm the Bird Spider Assistant. Ask me about species, habitats, tarantula types or basic care.";
  }


  return "I can help with general information about bird spiders and tarantulas. Try asking about a species, beginner species, arboreal tarantulas, molting or feeding.";
}


function sendChatMessage() {

  const question = chatInput.value.trim();

  if (!question) return;

  addMessage(question, "user");

  chatInput.value = "";


  setTimeout(() => {

    const answer = assistantReply(question);

    addMessage(answer, "bot");

  }, 400);
}


sendMessage.addEventListener(
  "click",
  sendChatMessage
);


chatInput.addEventListener(
  "keydown",
  event => {

    if (event.key === "Enter") {

      sendChatMessage();

    }

  }
);
