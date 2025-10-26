document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("content");
  const banner = document.getElementById("main-banner");
  const collectionBtn = document.getElementById("collection-btn");

  let previousView = null;

  // --- Dane koszulek ---
  const shirts = [
    {
      id: "best1",
      country: "England",
      club: "Manchester United",
      year: 1999,
      images: [
        { src: "images/manu_1999.png", caption: "Front view" },
        { src: "images/manu_1999_back.png", caption: "Back view" },
      ],
      history: "Treble-winning season red home shirt.",
      preview: true,
    },
    {
      id: "best2",
      country: "Spain",
      club: "FC Barcelona",
      year: 1998,
      images: [
        { src: "images/barca_1998.png", caption: "Front view" },
        { src: "images/barca_1998_back.png", caption: "Back view" },
      ],
      history: "Late 90s striped home kit.",
      preview: true,
    },
    {
      id: "best3",
      country: "Germany",
      club: "Bayern Munich",
      year: 2013,
      images: [
        { src: "images/bayern_2013_front.jpeg", caption: "Front view" },
        { src: "images/bayern_2013_back.jpeg", caption: "Back view" },
        { src: "images/bayern_2013_detail.jpeg", caption: "Badge detail" },
      ],
      history: "Champions League winning season home shirt.",
      preview: true,
    },
    {
      id: "ger2",
      country: "Germany",
      club: "FC Bayern",
      year: 2026,
      images: [
        { src: "images/BAYERN_2025_FRONT.jpg", caption: "The home shirt features a bold red design with a central -M- pattern, paying tribute to Munich and the club's strong identity." },
        { src: "images/BAYERN_2025_BACK.jpg", caption: " " },
        { src: "images/BAYERN_2025_AUTOGRAF.jpg", caption: "Joshua Kimmich authentic autograph." },
        { src: "images/BAYERN_2025_KIMMICH.jpg", caption: " " },
        { src: "images/BAYERN_2025_LOGO.jpg", caption: "The Club crest comes heat-applied on the player version for that on-pitch performance feel." },
        { src: "images/BAYERN_2025_ALLIANZ.jpg", caption: "Allianz branding with a digital twist, scan the code to step into the world of FC Bayern." },
        { src: "images/BAYERN_2025_BUNDESLIGA.jpg", caption: "Sleeves features a raised Bayern Munchen detail, a subtle touch that sets the fan version apart from the player." },
        { src: "images/BAYERN_2025_MIASANMIA.jpg", caption: "The back of the shirt proudly features Bayern's iconic motto MIA SAN MIA, a tribute to the club's Bavarian spirit and identity." },
        { src: "images/BAYERN_2025_ADIDAS.jpg", caption: " " }

      ],
      history: "The 2025/2026 Bayern Munich home shirt player version, signed by <b> Joshua Kimmich </b>, combines the club's iconic red and white design with a heat-applied crest. This Player-version jersey was first worn on June 15 2025, during the FIFA Club World Cup match in Cincinnati. Kimmich, a versatile midfielder and Bayern leader since 2015, adds his autograph turning the shirt into a true collector's item.  .",
    },
    {
      id: "ger3",
      country: "Germany",
      club: "Schalke 04",
      year: 2005,
      images: [
        { src: "images/schalke_2005_front.png", caption: "Front" },
        { src: "images/schalke_2005_back.png", caption: "Back" },
      ],
      history: "Blue home kit.",
    },
    {
      id: "esp2",
      country: "Spain",
      club: "Málaga",
      year: 2015,
      images: [
        { src: "images/MALAGA_FRONT.jpg", caption: "Málaga CF's blue and white colors come from the city's footballing history and identity. Blue represents the Mediterranean Sea, white symbolizes purity and light, reflecting both the bright sunlight of Andalusia." },
        { src: "images/MALAGA_BACK.jpg", caption: "Benahavis is a local sponsor featured on the back of the shirt. It's a small town near Málaga that supports the club and promotes its local tourism, reflecting a close community-based partnership rather than a big commercial brand." },
        { src: "images/MALAGA_LOGO.jpg", caption: "The Málaga CF logo is a shield with the Gibrafrano Castle and sea above, blue and white stipes below and a gold band reading -Málaga CF- symbolizing the union of the city and the club. " },
        { src: "images/MALAGA_LFP.jpg", caption: "This patch is the last version used under the old LFP branding, before LALiga introduced its modern logo." },
        { src: "images/MALAGA_NIKE.jpg", caption: "  " },
        { src: "images/MALAGA_NUNCAM.jpg", caption: "The phrase Nunca Muerte is the right spanish translation of Never give up, expressing the spirit of the club. It's a clearly expression of perseverance, loyalty and identity for the team and the city. " },
        { src: "images/MALAGA_BRAND.jpg", caption: "  " },
        { src: "images/MALAGA_AUTHENTIC.jpg", caption: " " }
      ],
      history: "Made by Nike, this Málaga official shirt features a classic crew-neck design and subtle pinstripe details, combining modern comfort with the Team CF's traditional style. The 2015/16 season was one of the club's most important, as the team competed strongly in LaLiga and sought to estabilish itself as a rising force in Spanish football.",
    },
    {
      id: "eng2",
      country: "England",
      club: "Liverpool",
      year: 2005,
      images: [
        { src: "images/liverpool_2005_front.png", caption: "Front" },
        { src: "images/liverpool_2005_back.png", caption: "Back" },
      ],
      history: "Champions League season red shirt.",
    },
    {
      id: "ita1",
      country: "Italy",
      club: "Juventus",
      year: 2006,
      images: [{ src: "images/juventus_2006_front.png", caption: "Front" }],
      history: "Black & white stripes.",
    },
    {
      id: "fra1",
      country: "France",
      club: "PSG",
      year: 2010,
      images: [{ src: "images/psg_2010_front.png", caption: "Front" }],
      history: "Blue home kit.",
    },
    {
      id: "ned1",
      country: "Netherlands",
      club: "Ajax",
      year: 1995,
      images: [{ src: "images/ajax_1995_front.png", caption: "Front" }],
      history: "Classic white with red stripe.",
    },
    {
      id: "por1",
      country: "Portugal",
      club: "Benfica",
      year: 2009,
      images: [{ src: "images/benfica_2009_front.png", caption: "Front" }],
      history: "Red home kit.",
    },
    {
      id: "bra1",
      country: "Brazil",
      club: "Santos",
      year: 2002,
      images: [{ src: "images/santos_2002_front.png", caption: "Front" }],
      history: "White classic kit.",
    },
    {
      id: "nat1",
      country: "National",
      club: "Italy, Home",
      year: 2004,
      images: [
        {
          src: "images/ITALY_2004_FRONT.jpg",
          caption:
            "For the first time ever, Italy’s crest took center stage — a symbol of pride worn close to the heart.",
        },
        { src: "images/ITALY_2004_BACK.jpg", caption: "" },
        {
          src: "images/ITALY_2004_LOGO.jpg",
          caption:
            "Three golden stars — a tribute to Italy’s three World Cup victories.",
        },
        {
          src: "images/ITALY_2004_PUMA.jpg",
          caption:
            "The first Puma shirt, with golden logos that marked a 20-year partnership.",
        },
        { src: "images/ITALY_2004_FIFA.jpg", caption: "" },
      ],
      history:
        'First worn on March 31, 2004, against Portugal, this iconic shirt marked the start of a new chapter for the Azzurri. Legends like <b>Francesco Totti, Roberto Baggio, Antonio Cassano</b> proudly wore it as Italy prepared for Euro 2004.',
    },
    {
      id: "nat2",
      country: "National",
      club: "Brazil",
      year: 2002,
      images: [
        { src: "images/brazil_2002_front.png", caption: "Front view" },
        { src: "images/brazil_2002_back.png", caption: "Back view" },
      ],
      history: "Yellow home kit from 2002 World Cup.",
    },
  ];

  // --- Widoki ---
  function showHome() {
    banner.style.display = "flex";
    previousView = showHome;
    content.innerHTML = `
      <section class="preview">
        <h3>Preview of Collection</h3>
        <div class="grid">
          ${shirts
            .filter((s) => s.preview)
            .map(
              (s) => `
            <div class="card">
              <img src="${s.images[0].src}" alt="${s.club}" />
              <h4>${s.club} (${s.year})</h4>
              <p>${s.country}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </section>
    `;

    const cards = content.querySelectorAll(".card");
    cards.forEach((card, i) => {
      card.addEventListener("click", () => {
        previousView = showHome;
        showGallery(shirts.filter((s) => s.preview)[i].id);
      });
    });
  }

  function showCollection() {
    banner.style.display = "none";
    previousView = showHome;
    const countries = [...new Set(shirts.map((s) => s.country))];

    content.innerHTML = `
      <button class="back">← Back</button>
      <h2>Collection by Country</h2>
      <div class="grid">
        ${countries
          .map(
            (c) => `
          <div class="card">
            <img src="images/flags/${c.toLowerCase().replace(/ /g, "_")}.png" alt="${c} flag" class="flag">
            <h4>${c}</h4>
          </div>`
          )
          .join("")}
      </div>
    `;

    content.querySelector("button.back").addEventListener("click", showHome);
    const cards = content.querySelectorAll(".card");
    cards.forEach((card, i) => {
      const country = countries[i];
      card.addEventListener("click", () => {
        previousView = showCollection;
        showShirts(country);
      });
    });
  }

  function showShirts(country) {
    const items = shirts.filter((s) => s.country === country);
    previousView = showCollection;

    content.innerHTML = `
      <button class="back">← Back</button>
      <h2>${country}</h2>
      <div class="grid shirts-grid">
        ${items
          .map(
            (s) => `
          <div class="card shirt-card">
            <img src="${s.images[0].src}" alt="${s.club}" class="shirt-img"/>
            <h4>${s.club} (${s.year})</h4>
          </div>`
          )
          .join("")}
      </div>
    `;

    content.querySelector("button.back").addEventListener("click", () => previousView());
    const cards = content.querySelectorAll(".card");
    cards.forEach((card, i) => {
      const shirtId = items[i].id;
      card.addEventListener("click", () => {
        previousView = () => showShirts(country);
        showGallery(shirtId);
      });
    });
  }

  function showGallery(id) {
    const s = shirts.find((sh) => sh.id === id);
    content.innerHTML = `
      <button class="back">← Back</button>
      <h2>${s.club} (${s.year})</h2>
      <p>${s.history}</p>
      <div class="gallery">
        ${s.images
          .map(
            (img, i) => `
          <div class="gallery-item">
            <img src="${img.src}" alt="${s.club}" data-index="${i}" />
            <p class="caption">${img.caption}</p>
          </div>`
          )
          .join("")}
      </div>
    `;

    content.querySelector("button.back").addEventListener("click", () => previousView());

    // Obsługa lightboxa
    const imgs = content.querySelectorAll(".gallery-item img");
    imgs.forEach((img) => {
      img.addEventListener("click", () =>
        openLightbox(s, parseInt(img.dataset.index))
      );
    });
  }

  // --- Lightbox ---
  function openLightbox(shirt, index) {
    let currentIndex = index;
    const overlay = document.createElement("div");
    overlay.className = "lightbox";
    overlay.innerHTML = `
      <span class="close">×</span>
      <span class="arrow left">❮</span>
      <img src="${shirt.images[currentIndex].src}" class="lightbox-img" alt="">
      <span class="arrow right">❯</span>
      <p class="caption">${shirt.images[currentIndex].caption}</p>
    `;
    document.body.appendChild(overlay);

    const updateImage = () => {
      overlay.querySelector(".lightbox-img").src =
        shirt.images[currentIndex].src;
      overlay.querySelector(".caption").textContent =
        shirt.images[currentIndex].caption;
    };

    overlay.querySelector(".close").onclick = () => overlay.remove();
    overlay.querySelector(".left").onclick = () => {
      currentIndex =
        (currentIndex - 1 + shirt.images.length) % shirt.images.length;
      updateImage();
    };
    overlay.querySelector(".right").onclick = () => {
      currentIndex = (currentIndex + 1) % shirt.images.length;
      updateImage();
    };
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.remove();
    });
  }

  // --- Start ---
  collectionBtn.addEventListener("click", showCollection);
  showHome();
});
