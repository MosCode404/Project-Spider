const spiders = [
  {
    name: "Brachypelma hamorii",
    commonName: "Mexican Red Knee",
    type: "Terrestrial",
    region: "Mexico",
    description:
      "A well-known tarantula recognized for its dark body and orange-red markings on the legs."
  },

  {
    name: "Tliltocatl albopilosus",
    commonName: "Curly Hair Tarantula",
    type: "Terrestrial",
    region: "Central America",
    description:
      "A distinctive tarantula known for its dense, curly hairs."
  },

  {
    name: "Grammostola pulchripes",
    commonName: "Chaco Golden Knee",
    type: "Terrestrial",
    region: "South America",
    description:
      "A striking tarantula recognized for its golden leg markings."
  },

  {
    name: "Caribena versicolor",
    commonName: "Martinique Pinktoe",
    type: "Arboreal",
    region: "Martinique",
    description:
      "A colorful arboreal tarantula that develops beautiful coloration as it matures."
  },

  {
    name: "Chromatopelma cyaneopubescens",
    commonName: "Green Bottle Blue",
    type: "Terrestrial",
    region: "Venezuela",
    description:
      "A spectacular species known for its blue legs, orange abdomen and metallic appearance."
  },

  {
    name: "Theraphosa blondi",
    commonName: "Goliath Bird-Eating Tarantula",
    type: "Terrestrial",
    region: "South America",
    description:
      "One of the world's largest tarantulas, famous for its impressive size."
  }
];


/* =========================
   SPECIES CARDS
========================= */

const spiderGrid = document.getElementById("spider-grid");


spiders.forEach(function(spider) {

  const card = document.createElement("article");

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
        <strong>Region:</strong>
        ${spider.region}
      </p>

    </div>

  `;


  spiderGrid.appendChild(card);

});


/* =========================
   CHAT ELEMENTS
========================= */

const chatButton =
  document.getElementById("chat-button");

const chatWindow =
  document.getElementById("chat-window");

const closeChat =
 
