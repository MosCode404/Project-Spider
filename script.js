document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // BIRD SPIDER SPECIES
  // =========================

  const birdSpiders = [
    {
      commonName: "Mexican Red Knee",
      scientificName: "Brachypelma hamorii",
      type: "Terrestrial",
      region: "Mexico",
      description: "A famous bird spider known for its distinctive orange-red leg markings."
    },
    {
      commonName: "Curly Hair Bird Spider",
      scientificName: "Tliltocatl albopilosus",
      type: "Terrestrial",
      region: "Central America",
      description: "A bird spider recognized for its dense, curly hairs."
    },
    {
      commonName: "Chaco Golden Knee",
      scientificName: "Grammostola pulchripes",
      type: "Terrestrial",
      region: "South America",
      description: "A striking bird spider with golden markings on its legs."
    },
    {
      commonName: "Martinique Pinktoe",
      scientificName: "Caribena versicolor",
      type: "Arboreal",
      region: "Martinique",
      description: "A colorful arboreal bird spider with striking coloration."
    },
    {
      commonName: "Green Bottle Blue",
      scientificName: "Chromatopelma cyaneopubescens",
      type: "Terrestrial",
      region: "Venezuela",
      description: "A spectacular bird spider with blue legs and an orange abdomen."
    },
    {
      commonName: "Goliath Bird-Eating Spider",
      scientificName: "Theraphosa blondi",
      type: "Terrestrial",
      region: "South America",
      description: "One of the largest bird spiders in the world."
    }
  ];


  // =========================
  // SPECIES CARDS
  // =========================

  const spiderGrid = document.getElementById("spider-grid");

  if (spiderGrid) {

    birdSpiders.forEach(function (spider) {

      const card = document.createElement("article");

      card.className = "spider-card";

      card.innerHTML = `
        <div class="spider-image">
          🕷️
        </div>

        <div class="spider-info">

          <p class="eyebrow">
            ${spider.type} BIRD SPIDER
          </p>

          <h3>${spider.commonName}</h3>

          <p>
            <em>${spider.scientificName}</em>
          </p>

          <p>${spider.description}</p>

          <p>
            <strong>Native region:</strong>
            ${spider.region}
          </p>

        </div>
      `;

      spiderGrid.appendChild(card);

    });

  }


  // =========================
  // CHAT
  // =========================

  const chatButton = document.getElementById("chat-button");
  const chatWindow = document.getElementById("chat-window");
  const closeChat = document.getElementById("close-chat");
  const chatInput = document.getElementById("chat-input");
  const sendMessage = document.getElementById("send-message");
  const chatMessages = document.getElementById("chat-messages");


  // Make sure the chat elements exist

  if (!chatButton || !chatWindow) {
    console.log("Bird Spider Assistant elements not found.");
    return;
  }


  // OPEN ASSISTANT

  chatButton.addEventListener("click", function () {

    chatWindow.style.display = "flex";

    if (chatInput) {
      chatInput.focus();
    }

  });


  // CLOSE ASSISTANT

  if (closeChat) {

    closeChat.addEventListener("click", function () {

      chatWindow.style.display = "none";

    });

  }


  // ADD MESSAGE

  function addMessage(text, type) {

    if (!chatMessages) return;

    const message = document.createElement("div");

    message.className =
      type === "user"
        ? "user-message"
        : "bot-message";

    message.textContent = text;

    chatMessages.appendChild(message);

    chatMessages.scrollTop =
      chatMessages.scrollHeight;
  }


  // ASSISTANT ANSWERS

  function getAnswer(question) {

    const q = question.toLowerCase();


    if (
      q.includes("hello") ||
      q.includes("hi") ||
      q.includes("hey")
    ) {
      return "Hello! 🕷️ I'm the Bird Spider Assistant. What would you like to know?";
    }


    if (
      q.includes("what is a bird spider") ||
      q.includes("what are bird spiders")
    ) {
      return "Bird spider is a common name associated with tarantulas, especially large spiders of the family Theraphosidae.";
    }


    if (
      q.includes("species") ||
      q.includes("types")
    ) {
      return "Some well-known bird spiders include the Mexican Red Knee, Curly Hair Bird Spider, Chaco Golden Knee, Martinique Pinktoe, Green Bottle Blue and Goliath Bird-Eating Spider.";
    }


    if (
      q.includes("habitat") ||
      q.includes("where do they live")
    ) {
      return "Bird spiders occur mainly in warm regions around the world. Depending on the species, they may live on the ground, in burrows or in trees and vegetation.";
    }


    if (
      q.includes("molt") ||
      q.includes("molting")
    ) {
      return "Molting is the process by which a bird spider sheds its old exoskeleton as it grows. A spider should generally be left undisturbed during a molt.";
    }


    if (
      q.includes("food") ||
      q.includes("eat") ||
      q.includes("feeding")
    ) {
      return "Bird spiders are predators and commonly eat suitable invertebrate prey. Feeding frequency varies according to species, age and conditions.";
    }


    if (
      q.includes("care") ||
      q.includes("keeping")
    ) {
      return "Bird spider care is species-specific. Important considerations include enclosure design, ventilation, substrate, hydration, temperature and feeding.";
    }


    if (
      q.includes("red knee") ||
      q.includes("hamorii")
    ) {
      return "Brachypelma hamorii, the Mexican Red Knee, is a terrestrial bird spider native to Mexico and known for its orange-red markings.";
    }


    if (
      q.includes("goliath") ||
      q.includes("theraphosa")
    ) {
      return "Theraphosa blondi is commonly called the Goliath bird-eating spider and is one of the largest known bird spiders.";
    }


    return "I'm dedicated specifically to bird spiders 🕷️. Try asking about species, habitat, behavior, molting, feeding or care.";

  }


  // SEND MESSAGE

  function sendChatMessage() {

    if (!chatInput) return;

    const question = chatInput.value.trim();

    if (question === "") return;

    addMessage(question, "user");

    chatInput.value = "";

    setTimeout(function () {

      addMessage(
        getAnswer(question),
        "bot"
      );

    }, 300);

  }


  // SEND BUTTON

  if (sendMessage) {

    sendMessage.addEventListener(
      "click",
      sendChatMessage
    );

  }


  // ENTER KEY

  if (chatInput) {

    chatInput.addEventListener(
      "keydown",
      function (event) {

        if (event.key === "Enter") {
          sendChatMessage();
        }

      }
    );

  }

});
