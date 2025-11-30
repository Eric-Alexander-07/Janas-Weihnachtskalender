// DEBUG: Uncomment during development to pretend it's Dec 24
// const debugDayOverride = 24;

const placeholderImage = "https://images.unsplash.com/photo-1512914890250-353c97c9e7db?auto=format&fit=crop&w=1200&q=60";
const OPENED_STORAGE_KEY = "calendarOpenedDays";

// Pflege nur dieses Array: Inhalte fuer alle 24 Tage
const days = [
  {
    day: 1,
    title: "Silvester 2024",
    shortText: "Wunderkerzen",
    fullText: "Ein wundervoller Tag und ein noch schöneres Bild.\nDein Lächeln macht jeden Tag heller.",
    imageUrl: "pictures/day01.jpg",
  },
  {
    day: 2,
    title: "Tag 2",
    shortText: "Kakao-Gruesschen",
    fullText: "Ein warmer Kakao-Moment nur fuer dich.\nDanke, dass du da bist.",
    imageUrl: "pictures/day02.jpg",
  },
  {
    day: 3,
    title: "Tag 3",
    shortText: "Du bist wundervoll",
    fullText: "Kleine Erinnerung: du bist wundervoll.\nHeute wird schoen, weil du darin vorkommst.",
    imageUrl: "pictures/day03.jpg",
  },
  {
    day: 4,
    title: "Tag 4",
    shortText: "Umarmung durchs Netz",
    fullText: "Ich schick dir eine Umarmung durchs Netz.\nDu machst jede Woche weicher.",
    imageUrl: "pictures/day04.jpg",
  },
  {
    day: 5,
    title: "Tag 5",
    shortText: "Winterglitzern fuer dich",
    fullText: "Fuer dich glitzert der Winter besonders.\nBleib so strahlend.",
    imageUrl: "pictures/day05.jpg",
  },
  {
    day: 6,
    title: "Tag 6",
    shortText: "Nikolaus-Gruesschen",
    fullText: "Nikolaus-Gruss zum Anlehnen.\nIch freu mich, dich zu kennen.",
    imageUrl: "pictures/day06.jpg",
  },
  {
    day: 7,
    title: "Tag 7",
    shortText: "Tief durchatmen",
    fullText: "Einmal tief durchatmen und laecheln.\nAlles wird leicht mit dir.",
    imageUrl: "pictures/day07.jpg",
  },
  {
    day: 8,
    title: "Tag 8",
    shortText: "Lieblingsmoment im Tag",
    fullText: "Du bist mein Lieblingsmoment im Tag.\nDanke fuer deine Freundlichkeit.",
    imageUrl: "pictures/day08.jpg",
  },
  {
    day: 9,
    title: "Tag 9",
    shortText: "Ein Funken Sternenstaub",
    fullText: "Ein Funken Sternenstaub fuer dich.\nDu bringst Licht in alles.",
    imageUrl: "pictures/day09.jpg",
  },
  {
    day: 10,
    title: "Tag 10",
    shortText: "Reminder: du bist genug",
    fullText: "Kurzer Reminder: du bist genug.\nImmer.",
    imageUrl: "pictures/day10.jpg",
  },
  {
    day: 11,
    title: "Tag 11",
    shortText: "Plaetzchen fuer dein Herz",
    fullText: "Ein Plaetzchen fuer dein Herz.\nIch halte dir den Platz frei.",
    imageUrl: "pictures/day11.jpg",
  },
  {
    day: 12,
    title: "Tag 12",
    shortText: "Sonntagsruhe im Kopf",
    fullText: "Sonntagsruhe im Kopf.\nDu darfst einfach sein.",
    imageUrl: "pictures/day12.jpg",
  },
  {
    day: 13,
    title: "Tag 13",
    shortText: "Du machst Tage bunt",
    fullText: "Du machst graue Tage bunt.\nDanke fuer dein Sein.",
    imageUrl: "pictures/day13.jpg",
  },
  {
    day: 14,
    title: "Tag 14",
    shortText: "Brief voller Waerme",
    fullText: "Ein kleiner Brief voller Waerme.\nBitte aufmachen und fuehlen.",
    imageUrl: "pictures/day14.jpg",
  },
  {
    day: 15,
    title: "Tag 15",
    shortText: "Gelassenheit und Tee",
    fullText: "Ich schicke Gelassenheit und Tee.\nHeute nur weiche To-Dos.",
    imageUrl: "pictures/day15.jpg",
  },
  {
    day: 16,
    title: "Tag 16",
    shortText: "Dein Mut steckt an",
    fullText: "Dein Mut steckt an.\nIch glaube an dich.",
    imageUrl: "pictures/day16.jpg",
  },
  {
    day: 17,
    title: "Tag 17",
    shortText: "Ein Lachen fuer dich",
    fullText: "Hier steckt ein Lachen drin.\nPass auf, es ist ansteckend.",
    imageUrl: "pictures/day17.jpg",
  },
  {
    day: 18,
    title: "Tag 18",
    shortText: "Lieblingswinterlied",
    fullText: "Du bist mein Lieblingswinterlied.\nDanke fuer jeden Ton.",
    imageUrl: "pictures/day18.jpg",
  },
  {
    day: 19,
    title: "Tag 19",
    shortText: "Ein Lichtlein",
    fullText: "Ein Lichtlein fuer dich.\nEs geht weiter, Schritt fuer Schritt.",
    imageUrl: "pictures/day19.jpg",
  },
  {
    day: 20,
    title: "Tag 20",
    shortText: "Fast geschafft!",
    fullText: "Fast geschafft! Du machst das toll.\nIch bin stolz auf dich.",
    imageUrl: "pictures/day20.jpg",
  },
  {
    day: 21,
    title: "Tag 21",
    shortText: "Gedankenspaziergang",
    fullText: "Ein Spaziergang im Kopf.\nFrische Luft fuer die Seele.",
    imageUrl: "pictures/day21.jpg",
  },
  {
    day: 22,
    title: "Tag 22",
    shortText: "Kleine Vorfreude",
    fullText: "Kleine Vorfreude zum Mitnehmen.\nBald wirds festlich.",
    imageUrl: "pictures/day22.jpg",
  },
  {
    day: 23,
    title: "Tag 23",
    shortText: "Ein Stern fuer dich",
    fullText: "Ein Stern fuer dein Fenster.\nDu bringst ihn zum Funkeln.",
    imageUrl: "pictures/day23.jpg",
  },
  {
    day: 24,
    title: "Tag 24",
    shortText: "Mein schoenstes Geschenk",
    fullText: "Frohe Weihnachten!\nDu bist mein schoenstes Geschenk.",
    imageUrl: "pictures/day24.jpg",
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const modalBackdrop = document.querySelector(".modal-backdrop");
  const modalTitle = document.querySelector(".modal-title");
  const modalContent = document.querySelector(".modal-content");
  const modalImage = document.querySelector(".modal-image");
  const modalClose = document.querySelector(".modal-close");
  const doors = document.querySelectorAll(".door");

  const today = new Date();
  const computedDay = today.getMonth() === 11 ? Math.min(today.getDate(), 24) : 0; // 11 = December, sonst alles gesperrt
  const currentDay = typeof debugDayOverride === "number" ? debugDayOverride : computedDay;

  const loadOpenedDays = () => {
    try {
      const stored = JSON.parse(localStorage.getItem(OPENED_STORAGE_KEY) || "[]");
      return new Set(stored.filter((n) => Number.isInteger(n)));
    } catch (err) {
      return new Set();
    }
  };

  const saveOpenedDays = (openedSet) => {
    const values = Array.from(openedSet.values());
    localStorage.setItem(OPENED_STORAGE_KEY, JSON.stringify(values));
  };

  const openedDays = loadOpenedDays();

  // Mark doors that are still locked for future days
  doors.forEach((door) => {
    const dayNumber = Number(door.dataset.day);
    if (dayNumber > currentDay) {
      door.classList.add("locked");
    }
  });

  const openModal = (dayData) => {
    modalTitle.textContent = dayData.title;
    modalContent.textContent = dayData.fullText;
    if (modalImage) {
      modalImage.src = dayData.imageUrl || placeholderImage;
      modalImage.alt = dayData.title || "Adventskalender Bild";
    }
    modalBackdrop.classList.remove("hidden");
    modalBackdrop.setAttribute("aria-hidden", "false");
  };

  const closeModal = () => {
    modalBackdrop.classList.add("hidden");
    modalBackdrop.setAttribute("aria-hidden", "true");
  };

  const addPreviewToDoor = (door, dayData) => {
    door.classList.add("has-preview");
    door.style.setProperty("--door-photo", `url("${dayData.imageUrl || placeholderImage}")`);

    let preview = door.querySelector(".door-preview");
    if (!preview) {
      preview = document.createElement("div");
      preview.className = "door-preview";
      door.appendChild(preview);
    }

    let text = preview.querySelector(".door-preview-text");
    if (!text) {
      text = document.createElement("p");
      text.className = "door-preview-text";
      preview.appendChild(text);
    }

    text.textContent = dayData.shortText || "";
  };

  const markDoorAsOpened = (door, dayData, dayNumber) => {
    door.classList.add("opened");
    addPreviewToDoor(door, dayData);
    openedDays.add(dayNumber);
    saveOpenedDays(openedDays);
  };

  // Re-apply opened state from previous sessions (but not for future days)
  doors.forEach((door) => {
    const dayNumber = Number(door.dataset.day);
    const dayData = days.find((entry) => entry.day === dayNumber);
    if (!dayData) return;

    if (openedDays.has(dayNumber) && dayNumber <= currentDay) {
      markDoorAsOpened(door, dayData, dayNumber);
    }
  });

  doors.forEach((door) => {
    door.addEventListener("click", () => {
      const dayNumber = Number(door.dataset.day);
      const dayData = days.find((entry) => entry.day === dayNumber);
      if (!dayData) return;

      if (dayNumber > currentDay || door.classList.contains("locked")) return;

      markDoorAsOpened(door, dayData, dayNumber);
      openModal(dayData);
    });
  });

  modalClose?.addEventListener("click", closeModal);
  modalBackdrop?.addEventListener("click", (event) => {
    if (event.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
});
