document.addEventListener("DOMContentLoaded", function () {


/* =========================================
   BIRD SPIDER INVENTORY

   EDIT THIS SECTION WHEN ADDING PRODUCTS
========================================= */

const birdSpiders = [

  {
    id: 1,

    name: "Mexican Red Knee",

    scientific: "Brachypelma hamorii",

    type: "terrestrial",

    region: "Mexico",

    stage: "Juvenile",

    sex: "Unsexed",

    price: 75,

    available: true,

    description:
      "A highly recognizable bird spider known for its dark body and distinctive orange-red markings."
  },


  {
    id: 2,

    name: "Curly Hair Bird Spider",

    scientific: "Tliltocatl albopilosus",

    type: "terrestrial",

    region: "Central America",

    stage: "Juvenile",

    sex: "Unsexed",

    price: 55,

    available: true,

    description:
      "A distinctive bird spider recognized by its dense, curly hairs and generally robust appearance."
  },


  {
    id: 3,

    name: "Chaco Golden Knee",

    scientific: "Grammostola pulchripes",

    type: "terrestrial",

    region: "South America",

    stage: "Juvenile",

    sex: "Unsexed",

    price: 65,

    available: true,

    description:
      "A beautiful terrestrial bird spider with striking golden markings on the legs."
  },


  {
    id: 4,

    name: "Martinique Pinktoe",

    scientific: "Caribena versicolor",

    type: "arboreal",

    region: "Martinique",

    stage: "Juvenile",

    sex: "Unsexed",

    price: 90,

    available: true,

    description:
      "A colorful arboreal bird spider known for its dramatic coloration."
  },


  {
    id: 5,

    name: "Green Bottle Blue",

    scientific: "Chromatopelma cyaneopubescens",

    type: "terrestrial",

    region: "Venezuela",

    stage: "Juvenile",

    sex: "Unsexed",

    price: 85,

    available: true,

    description:
      "A spectacular bird spider with vivid blue legs and a contrasting orange abdomen."
  },


  {
    id: 6,

    name: "Goliath Bird-Eating Spider",

    scientific: "Theraphosa blondi",

    type: "terrestrial",

    region: "South America",

    stage: "Juvenile",

    sex: "Unsexed",

    price: 150,

    available: false,

    description:
      "One of the largest known bird spiders, famous for its impressive size."
  }

];



/* =========================================
   PRODUCT GRID
========================================= */

const grid =
  document.getElementById("spider-grid");

const search =
  document.getElementById("species-search");

const filter =
  document.getElementById("species-filter");

const noResults =
  document.getElementById("no-results");


function renderProducts() {

  if (!grid) return;

  const searchTerm =
    search.value.toLowerCase().trim();

  const selectedType =
    filter.value;


  const filtered =
    birdSpiders.filter(function (spider) {

      const matchesSearch =
        spider.name
          .toLowerCase()
          .includes(searchTerm)
        ||
        spider.scientific
          .toLowerCase()
          .includes(searchTerm);


      const matchesType =
        selectedType === "all"
        ||
        spider.type === selectedType;


      return matchesSearch && matchesType;

    });


  grid.innerHTML = "";


  if (filtered.length === 0) {

    noResults.style.display = "block";

    return;

  }


  noResults.style.display = "none";


  filtered.forEach(function (spider) {

    const card =
      document.createElement("article");

    card.className = "product-card";


    card.innerHTML = `

      <div class="product-image">

        <span class="availability">

          ${
            spider.available
              ? "Available"
              : "Sold / Unavailable"
          }

        </span>

        🕷️

      </div>


      <div class="product-info">

        <span class="product-type">
          ${spider.type} bird spider
        </span>


        <h3>
          ${spider.name}
        </h3>


        <p class="scientific">
          ${spider.scientific}
        </p>


        <div class="product-meta">

          <span>
            ${spider.stage}
          </span>

          <span>
            ${spider.sex}
          </span>

          <span>
            ${spider.region}
          </span>

        </div>


        <div class="product-bottom">

          <span class="price">
            €${spider.price}
          </span>


          <button
            class="view-product"
            data-id="${spider.id}"
          >

            View details →

          </button>

        </div>

      </div>

    `;


    grid.appendChild(card);

  });

}



/* SEARCH */

if (search) {

  search.addEventListener(
    "input",
    renderProducts
  );

}


/* FILTER */

if (filter) {

  filter.addEventListener(
    "change",
    renderProducts
  );

}


renderProducts();



/* =========================================
   PRODUCT MODAL
========================================= */

const modal =
  document.getElementById("product-modal");

const modalBody =
  document.getElementById("modal-body");

const closeModal =
  document.getElementById("close-modal");

const modalOverlay =
  document.querySelector(".modal-overlay");


function openProduct(id) {

  const spider =
    birdSpiders.find(
      item => item.id === id
    );


  if (!spider) return;


  modalBody.innerHTML = `

    <div class="modal-image">
      🕷️
    </div>


    <span class="product-type">
      ${spider.type} bird spider
    </span>


    <h2>
      ${spider.name}
    </h2>


    <p class="modal-scientific">
      ${spider.scientific}
    </p>


    <p class="modal-description">
      ${spider.description}
    </p>


    <div class="modal-details">

      <div class="modal-detail">

        <small>
          Type
        </small>

        <strong>
          ${spider.type}
        </strong>

      </div>


      <div class="modal-detail">

        <small>
          Native region
        </small>

        <strong>
          ${spider.region}
        </strong>

      </div>


      <div class="modal-detail">

        <small>
          Life stage
        </small>

        <strong>
          ${spider.stage}
        </strong>

      </div>


      <div class="modal-detail">

        <small>
          Sex
        </small>

        <strong>
          ${spider.sex}
        </strong>

      </div>

    </div>


    <div class="product-bottom">

      <span class="price">
        €${spider.price}
      </span>


      ${
        spider.available

        ?

        `
        <a
          class="btn btn-primary"
          href="mailto:your-email@example.com?subject=Inquiry about ${encodeURIComponent(spider.name)}"
        >
          Make an inquiry
        </a>
        `

        :

        `
        <span
          style="color:#777"
        >
          Currently unavailable
        </span>
        `
      }

    </div>

  `;


  modal.classList.add("active");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

}


document.addEventListener(
  "click",
  function (event) {

    const button =
      event.target.closest(".view-product");


    if (!button) return;


    openProduct(
      Number(button.dataset.id)
    );

  }
);


function closeProduct() {

  modal.classList.remove("active");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

}


closeModal.addEventListener(
  "click",
  closeProduct
);


modalOverlay.addEventListener(
  "click",
  closeProduct
);



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


chatButton.addEventListener(
  "click",
  function () {

    chatWindow.style.display = "flex";

    chatInput.focus();

  }
);


closeChat.addEventListener(
  "click",
  function () {

    chatWindow.style.display = "none";

  }
);


function addMessage(text, type) {

  const message =
    document.createElement("div");


  message.className =
    type === "user"
      ? "user-message"
      : "bot-message";


  message.textContent = text;


  chatMessages.appendChild(message);


  chatMessages.scrollTop =
    chatMessages.scrollHeight;

}


function assistantAnswer(question) {

  const q =
    question.toLowerCase();


  if (
    q.includes("hello") ||
    q.includes("hi") ||
    q.includes("hey")
  ) {

    return (
      "Welcome to Bird Spider World! 🕷️ " +
      "I can help you learn about bird spiders, " +
      "species and keeping."
    );

  }


  if (
    q.includes("available") ||
    q.includes("for sale") ||
    q.includes("buy")
  ) {

    const available =
      birdSpiders
        .filter(s => s.available)
        .map(s => s.name)
        .join(", ");


    return (
      "Currently listed as available: " +
      available +
      ". You can browse the Available Bird Spiders section " +
      "and open a listing to make an inquiry."
    );

  }


  if (
    q.includes("price") ||
    q.includes("cost")
  ) {

    return (
      "Prices are displayed on each available bird spider " +
      "listing. Select 'View details' for the current " +
      "price and inquiry option."
    );

  }


  if (
    q.includes("red knee") ||
    q.includes("hamorii")
  ) {

    return (
      "Brachypelma hamorii, the Mexican Red Knee, " +
      "is a terrestrial bird spider native to Mexico. " +
      "It's known for its distinctive orange-red markings."
    );

  }


  if (
    q.includes("goliath") ||
    q.includes("theraphosa")
  ) {

    return (
      "Theraphosa blondi, commonly called the Goliath " +
      "bird-eating spider, is one of the largest known " +
      "bird spiders."
    );

  }


  if (
    q.includes("molt") ||
    q.includes("molting")
  ) {

    return (
      "Molting is how bird spiders replace their old " +
      "exoskeleton as they grow. A spider should generally " +
      "be left undisturbed during this vulnerable period."
    );

  }


  if (
    q.includes("care") ||
    q.includes("keeping") ||
    q.includes("enclosure")
  ) {

    return (
      "Bird spider care depends on the species. Important " +
      "considerations include enclosure design, ventilation, " +
      "substrate, hydration, temperature and feeding."
    );

  }


  if (
    q.includes("habitat") ||
    q.includes("where")
  ) {

    return (
      "Bird spiders occur across many warm regions. " +
      "Depending on the species, they can be terrestrial, " +
      "burrowing or arboreal."
    );

  }


  if (
    q.includes("food") ||
    q.includes("eat") ||
    q.includes("feeding")
  ) {

    return (
      "Bird spiders are predators that commonly consume " +
      "appropriate invertebrate prey. Feeding frequency " +
      "depends on species, age and conditions."
    );

  }


  return (
    "I'm the Bird Spider Assistant 🕷️. " +
    "Ask me about available species, prices, habitats, " +
    "care, feeding, molting or bird spiders in general."
  );

}


function sendChatMessage() {

  const question =
    chatInput.value.trim();


  if (!question) return;


  addMessage(
    question,
    "user"
  );


  chatInput.value = "";


  setTimeout(
    function () {

      addMessage(
        assistantAnswer(question),
        "bot"
      );

    },
    300
  );

}


sendMessage.addEventListener(
  "click",
  sendChatMessage
);


chatInput.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Enter") {

      sendChatMessage();

    }

  }
);



/* =========================================
   MOBILE MENU
========================================= */

const mobileMenu =
  document.getElementById("mobile-menu");

const navLinks =
  document.querySelector(".nav-links");


mobileMenu.addEventListener(
  "click",
  function () {

    navLinks.classList.toggle("mobile-open");

  }
);

});
