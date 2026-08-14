const birdSpiders = [
  {
    commonName: "Mexican Red Knee",
    scientificName: "Brachypelma hamorii",
    type: "Terrestrial",
    region: "Mexico",
    description:
      "A famous bird spider recognized by its dark body and distinctive orange-red markings."
  },

  {
    commonName: "Curly Hair Bird Spider",
    scientificName: "Tliltocatl albopilosus",
    type: "Terrestrial",
    region: "Central America",
    description:
      "A hairy bird spider known for its characteristic curly setae."
  },

  {
    commonName: "Chaco Golden Knee",
    scientificName: "Grammostola pulchripes",
    type: "Terrestrial",
    region: "South America",
    description:
      "A striking bird spider with golden markings on its legs."
  },

  {
    commonName: "Martinique Pinktoe",
    scientificName: "Caribena versicolor",
    type: "Arboreal",
    region: "Martinique",
    description:
      "A colorful arboreal bird spider that develops beautiful adult coloration."
  },

  {
    commonName: "Green Bottle Blue",
    scientificName: "Chromatopelma cyaneopubescens",
    type: "Terrestrial",
    region: "Venezuela",
    description:
      "A spectacular bird spider known for its blue legs and contrasting orange abdomen."
  },

  {
    commonName: "Goliath Bird-Eating Spider",
    scientificName: "Theraphosa blondi",
    type: "Terrestrial",
    region: "Northern South America",
    description:
      "One of the largest bird spiders in the world, famous for its impressive size."
  }
];


/* =========================================
   SPECIES CARDS
========================================= */

const spiderGrid = document.getElementById("spider-grid");

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

      <h3>
        ${spider.commonName}
      </h3>

      <p>
        <em>${spider.scientificName}</em>
      </p>

      <p>
        ${spider.description}
      </p>

      <p>
        <strong>Native region:</strong>
        ${spider.region}
      </p>

    </div>
  `;

  spiderGrid.appendChild(card);

});


/* =========================================
   BIRD SPIDER ASSISTANT
========================================= */

const chatButton =
  document.getElementById("chat-button");

const chatWindow =
  document.getElementById("chat-window");

const closeChat =
  document.getElementById("close-chat");

const chatInput =
  document.getElementById("chat-input");

const sendMessage =
  document.getElementById("send-message");

const chatMessages =
  document.getElementById("chat-messages");


/* OPEN */

chatButton.addEventListener("click", function () {

  chatWindow.style.display = "flex";

  chatInput.focus();

});


/* CLOSE */

closeChat.addEventListener("click", function () {

  chatWindow.style.display = "none";

});


/* =========================================
   ADD CHAT MESSAGE
========================================= */

function addMessage(text, type) {

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


/* =========================================
   ASSISTANT KNOWLEDGE
========================================= */

function birdSpiderAssistant(question) {

  const q = question.toLowerCase();


  /* GREETING */

  if (
    q.includes("hello") ||
    q.includes("hi") ||
    q.includes("hey")
  ) {

    return (
      "Hello! 🕷️ I'm the Bird Spider Assistant. " +
      "Ask me about bird spider species, habitats, " +
      "behavior, molting, anatomy or care."
    );

  }


  /* WHAT IS A BIRD SPIDER */

  if (
    q.includes("what is a bird spider") ||
    q.includes("what are bird spiders")
  ) {

    return (
      "Bird spider is a common name associated with " +
      "tarantulas. Tarantulas are large spiders belonging " +
      "primarily to the family Theraphosidae."
    );

  }


  /* SPECIES */

  if (
    q.includes("species") ||
    q.includes("which bird spiders") ||
    q.includes("what bird spiders")
  ) {

    return (
      "Some well-known bird spiders include the Mexican " +
      "Red Knee, Curly Hair Bird Spider, Chaco Golden Knee, " +
      "Martinique Pinktoe, Green Bottle Blue and Goliath " +
      "Bird-Eating Spider."
    );

  }


  /* HABITAT */

  if (
    q.includes("habitat") ||
    q.includes("where do") ||
    q.includes("live")
  ) {

    return (
      "Bird spiders live in many warm regions around the " +
      "world. Depending on the species, they may inhabit " +
      "forests, grasslands, savannas or other environments. " +
      "Some are terrestrial while others are arboreal."
    );

  }


  /* ANATOMY */

  if (
    q.includes("anatomy") ||
    q.includes("body") ||
    q.includes("legs")
  ) {

    return (
      "Bird spiders have eight legs and two main body " +
      "sections: the cephalothorax and abdomen. They also " +
      "have specialized structures including pedipalps " +
      "and chelicerae."
    );

  }


  /* BEHAVIOR */

  if (
    q.includes("behavior") ||
    q.includes("behaviour") ||
    q.includes("defensive")
  ) {

    return (
      "Bird spider behavior varies between species and " +
      "individuals. A spider may retreat, posture, burrow " +
      "or use other defensive behaviors when disturbed."
    );

  }


  /* MOLTING */

  if (
    q.includes("molt") ||
    q.includes("molting") ||
    q.includes("shed")
  ) {

    return (
      "Molting is how a bird spider replaces its old " +
      "exoskeleton as it grows. During this vulnerable " +
      "period, the spider should generally be left alone."
    );

  }


  /* FEEDING */

  if (
    q.includes("food") ||
    q.includes("eat") ||
    q.includes("feeding")
  ) {

    return (
      "Bird spiders are predators and commonly consume " +
      "suitable invertebrate prey. Feeding frequency varies " +
      "with species, age, size and conditions."
    );

  }


  /* CARE */

  if (
    q.includes("care") ||
    q.includes("keeping") ||
    q.includes("enclosure")
  ) {

    return (
      "Bird spider care is species-specific. Important " +
      "considerations include enclosure design, ventilation, " +
      "substrate, hydration, temperature and feeding."
    );

  }


  /* ARBOREAL */

  if (
    q.includes("arboreal") ||
    q.includes("tree")
  ) {

    return (
      "Arboreal bird spiders are adapted to living above " +
      "the ground, often in trees or vegetation. Their " +
      "enclosures need appropriate vertical space."
    );

  }


  /* MEXICAN RED KNEE */

  if (
    q.includes("red knee") ||
    q.includes("hamorii")
  ) {

    return (
      "Brachypelma hamorii, the Mexican Red Knee, is a " +
      "terrestrial bird spider native to Mexico and known " +
      "for its distinctive orange-red leg markings."
    );

  }


  /* GOLIATH */

  if (
    q.includes("goliath") ||
    q.includes("theraphosa")
  ) {

    return (
      "Theraphosa blondi, commonly called the Goliath " +
      "bird-eating spider, is one of the largest known " +
      "bird spiders and is native to northern South America."
    );

  }


  /* CURLY HAIR */

  if (
    q.includes("curly hair") ||
    q.includes("albopilosus")
  ) {

    return (
      "Tliltocatl albopilosus is commonly called the Curly " +
      "Hair Bird Spider and is known for its dense, curly hairs."
    );

  }


  /* OUTSIDE TOPIC */

  if (
    q.includes("dog") ||
    q.includes("cat") ||
    q.includes("snake") ||
    q.includes("scorpion") ||
    q.includes("fish") ||
    q.includes("bird") && !q.includes("bird spider")
  ) {

    return (
      "I'm dedicated specifically to bird spiders 🕷️. " +
      "Ask me something about bird spiders or tarantulas."
    );

  }


  /* DEFAULT */

  return (
    "I specialize in bird spiders 🕷️. " +
    "Try asking about species, habitat, anatomy, behavior, " +
    "molting, feeding, enclosures or care."
  );

}


/* =========================================
   SEND MESSAGE
========================================= */

function sendChatMessage() {

  const question =
    chatInput.value.trim();


  if (!question) {
    return;
  }


  addMessage(question, "user");

  chatInput.value = "";


  setTimeout(function () {

    const answer =
      birdSpiderAssistant(question);

    addMessage(answer, "bot");

  }, 350);

}


/* SEND BUTTON */

sendMessage.addEventListener(
  "click",
  sendChatMessage
);


/* ENTER KEY */

chatInput.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Enter") {

      sendChatMessage();

    }

  }
);
