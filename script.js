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
      club: "Arsenal",
      year: 2015,
      images: [
        { src: "images/ARSENAL_FRONT.jpg", caption: " The 2015/2016 Puma home shirt features the distinctive grandad collar and the Fly Emirates sponsor in white across the chest. A clean, elegant design that stays true to the Gunner's traditional look." },
        { src: "images/ARSENAL_BACK.jpg", caption: "" },
        { src: "images/ARSENAL_LOGO.jpg", caption: " The Arsenal logo feauturesa gold cannon, reflecting the club's historic roots in the Royal Arsenal munition and symbolizing strenght and heritage. " },
        { src: "images/ARSENAL_EMIRATES.jpg", caption: "" },
        { src: "images/ARSENAL_SLEEVE.jpg", caption: " Gold accents on the collar and cuffs highlight Arsenal's heritage of success, adding a refined touch to Puma's 2015/16 design. " },
        { src: "images/ARSENAL_DOWN.jpg", caption: " DryCell it's the Puma breathable and quick-drying  fabric technology, smilar to Adidas'Climacool and Nike's Dry-FIT." },
        { src: "images/ARSENAL_BACKUP.jpg", caption: " This logo it's a stylized geometric detail used in Puma's kit from that period, it's not related to Arsenal itself." },
        { src: "images/ARSENAL_AUTHENTIC.jpg", caption: " This label confirms that the shirt is officially licensed by Puma." },
      ],
      history: "Showcasing Arsenal's calssic red and white design, the 2015/16 home shirt pays homepage to club's iconic colors. Red symbolizing energy and passion, with white sleeves adding striking contrast. Inspired by the original kit gifted by Nottingham Forest in 1888 and redifined by Herbert Chapman in 1933, this shirt blends tradition with modern style. Famous players like  <b> Mesut Ozil </b> and <b> Alexis Sanchez </b> proudly wore it on the pitch.",
    },
    {
      id: "eng3",
      country: "England",
      club: "M. United",
      year: 1997,
      images: [
        { src: "images/MU_1997_FRONT.jpg", caption: " The bold Sharp Viewcam sponsor highlights United partnership with Sharp innovative camcorder brand, symbolizing cutting-edge technology and the rise of digital media at the time. " },
        { src: "images/MU_1997_BACK.jpg", caption: " " },
        { src: "images/MU_1997_LOGO.jpg", caption: " The club crest is embroidered, not printed, giving it a textured, high-quality feel. The stitched logo features the red devil with a trident on a yellow-and-red shield, preserving the club traditional emblem." },
        { src: "images/MU_1997_UMBRO.jpg", caption: " Umbro kit became synonymous with United dominance in the 1990s, blending tradition with modern football aesthetics." },
        { src: "images/MU_1997_JAC.jpg", caption: " The shirt fabric features a jacquard weave with repeating MUFC crests, subtly embedded into the material. This woven pattern wasn not printed — it was integrated directly into the fabric, showcasing Umbro premium craftsmanship. The design adds texture, depth, and an elegant nod to Manchester United proud identit." },
        { src: "images/MU_1997_FLAG.jpg", caption: " The small flag logo on the sleeve of the 1997 Manchester United shirt features a vertical red and black bicolor design. On the black section, there is a small yellow crown above a red lion, taken from Manchester coat of arms. This emblem was used by Umbro to represent the clubs English identity and heritage during the late 1990s. " },
        { src: "images/MU_1997_TECH.jpg", caption: " The back of the shirt features Umbro Vapa Tech Performance label, showcasing the brands 90s innovation in breathable and moisture-wicking fabric. The navy, red, and white collar adds a refined, structured finish. A subtle blend of style and performance, true to Manchester United era of excellence." },
        
      ],
      history: "The 1997 Manchester United home shirt, made by Umbro, is a classic short-sleeve cotton/poly blend jersey featuring the club iconic red with black-and-white trim. Worn by legends such as <b> Eric Cantona </b>,<b> Ryan Giggs </b>, <b> David Beckham </b>, and <b> Peter Schmeichel </b>, it reflects the team just after their famous 1996/97 Premier League title win. The sleeve patch with subtle red, yellow, and black accents represents the Premier League branding at the time. This shirt is remembered not only for its bold design but also as a symbol of United dominance in the late 1990s, combining style, performance, and football history in one iconic kit.",
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
      club: "Marseille",
      year: 2018,
      images: [
      { src: "images/MARS_FRONT.jpg", caption: "The base of the jersey is a deep black (sometimes seen as a near-navy tone certain lighting). This color represent the nighttime atmosphere of MArseille, especially the coastal skyline." },
      { src: "images/MARS_BACK.jpg", caption: "Front" },
      { src: "images/MARS_LOGO.jpg", caption: "Under the club crest appears the motto -Droit Au But- which means -Straight to the Goal-." },
      { src: "images/MARS_SLEEVE.jpg", caption: "The sleeves feature a textured, horizontal streak graphic in shades of blue. This mirrored the idea of Movement of the water, reflecting the port of Marseille. " },
      { src: "images/MARS_PUMA.jpg", caption: "The Puma brand arrival as Marseille new kit sponsor in 2018 marked the beginning of a fresh era, bringing modrrn design innovation and a bold rebranding to the club identity." },
      { src: "images/MARS_DRY.jpg", caption: "The jersey uses The Puma dryCELL technology, a moisture-wicking fabric designed to keep players cool and dry." }
      ],
      history: "The Olympique de Marseille 2018/19 away shirt marks Puma's bold debut season with the club after two decades of wearing Adidas, mixing modern streetwear style with strong Marseille identity. For this launch, Puma created a series of third kits for all their major clubs inspired by the nightscape and architecture of each club's city. For Marseille, the theme was <b> -La Nuit Marseillaise- </b>.",
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
              <img src="${s.images[0].src}" alt="${s.club}" loading="lazy" />
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
            <img src="${s.images[0].src}" alt="${s.club}" class="shirt-img" loading="lazy"/>
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
            <img src="${img.src}" alt="${s.club}" data-index="${i}" loading="lazy" />
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
      <img src="${shirt.images[currentIndex].src}" class="lightbox-img" alt="${shirt.club}" loading="lazy">
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
