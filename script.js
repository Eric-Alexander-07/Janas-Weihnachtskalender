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
    fullText: "Ein wundervoller Tag und ein noch schöneres Bild.\nDein Lächeln macht jeden Tag heller.\n\nErfreue dich an 24 süßen Einblicken in unsere Vergangenheit.",
    imageUrl: "pictures/day01.jpg",
  },
  {
    day: 2,
    title: "Fotobox - Amsterdamm",
    shortText: "Fotobox",
    fullText: "Eine schöne Erinnerung und mit meine Lieblingsbilder von uns.\nEine süße Erinnerung, die ich immer bei mir tragen werde.",
    imageUrl: "pictures/day02.jpg",
  },
  {
    day: 3,
    title: "Du bist wundervoll",
    shortText: "Du bist wundervoll",
    fullText: "Kleine Erinnerung: Du bist wundervoll und ich bin froh, dass es dich gibt.",
    imageUrl: "pictures/day03.jpg",
  },
  {
    day: 4,
    title: "Volksfest 2023",
    shortText: "Volksfest",
    fullText: "Fühl dich gedrückt, ich schick dir eine Umarmung durchs Netz.\n\nPs. Wenn wir mal wieder auf dem Volskfest sind, bekommst du gebrannte Mandeln.",
    imageUrl: "pictures/day04.jpg",
  },
  {
    day: 5,
    title: "5 Juni 2023",
    shortText: "Ein wahres Kunstwerk",
    fullText: "Erinnerst du dich noch an den Tag, an dem wir zusammen gekommen sind?\n\nEine schöne Geschichte, geprägt von einem wahren Kunstwerk. Ich bin bis heute noch beeindruckt von deinen Malerein.\n\nBehalte deine kunst und Kreativität bei. Sie ist ein sehr attraktiver Teil von dir.",
    imageUrl: "pictures/day05.jpg",
  },
  {
    day: 6,
    title: "Rollerblades - Amsterdamm",
    shortText: "Rollerblades",
    fullText: "Ich glaube, dass ich nicht hingeflogen bin aber bin mir dabei aber auch nicht 100% sicher.\nRollerblades waren eine schöne Idee und haben echt Spaß gemacht.\n\nFrohen Nikolaus!",
    imageUrl: "pictures/day06.jpg",
  },
  {
    day: 7,
    title: "Gesellschaftszertifikat 2023",
    shortText: "Manners Maketh Men",
    fullText: "Es gab für mich keine Tanzpartnerin, mit der ich lieber getanzt hätte. Das Tanzen wurde durch dich erst wertvoll für mich.\n\n Außerdem können wir jetzt mit so einem Gesellschaftszertifikat angeben.",
    imageUrl: "pictures/day07.jpg",
  },
  {
    day: 8,
    title: "Lego ist schon was schönes",
    shortText: "Lego Rosen <3",
    fullText: "Jedes mal, wenn ich die Lego Rosen sehe, muss ich an diesen Tag zurückdenken <3",
    imageUrl: "pictures/day08.jpg",
  },
  {
    day: 9,
    title: "Ein Gefühl von Nähe",
    shortText: "Zuhause",
    fullText: "Sich zu Hause und wohl zu fühlen ist nicht nur ein Ort, sondern eine Person.\nDu bist eine dieser Personen, bei der ich mich zu Hause fühlen kann.",
    imageUrl: "pictures/day09.jpg",
  },
  {
    day: 10,
    title: "Reminder: Du bist genug",
    shortText: "Du bist genug",
    fullText: "Kurzer Reminder: Du bist genug und trägst eine zärtlichkeit in dir, die alle Probleme kleiner wirken lassen kann.",
    imageUrl: "pictures/day10.jpg",
  },
  {
    day: 11,
    title: "Eigentlich Apfelringe",
    shortText: "Plätzchen",
    fullText: "Ich finde es sehr schön, das du so wundervoll backen kannst.\nIch bin jedes mal glücklich, wenn du mir etwas selbstgebackenes mitbringst.\n\nAußerdem war es ein ganz süßer Zeitvertreib.",
    imageUrl: "pictures/day11.jpg",
  },
  {
    day: 12,
    title: "Kürbisschnitzen 2023",
    shortText: "Kürbisschnitzen",
    fullText: "Schau nur wie jung und unschuldig...\n\n...unsere Kürbisse waren.",
    imageUrl: "pictures/day12.jpg",
  },
  {
    day: 13,
    title: "Ballett <3",
    shortText: "Ballet <3",
    fullText: "Wohlmöglich meine größte Bewunderung an dir. Es it wirklich unglaublich, wie du dich bewegen kannst.\nDafür wirst du auf jeden Fall immer meinen größten Respekt haben.",
    imageUrl: "pictures/day13.jpg",
  },
  {
    day: 14,
    title: "Mensch ärger dich nicht",
    shortText: "Mensch ärger dich nicht",
    fullText: "Mensch ärger dich nicht ist eigentlich eine ganz gute Leitline für sein Leben.\n\nUnd wenn man sich mal ärgert, ist es aber wichtig, immer wieder zueinander zu finden. Ich bin froh, dass das bei uns eigentlich immer geklappt hat.",
    imageUrl: "pictures/day14.jpg",
  },
  {
    day: 15,
    title: "Tanzen",
    shortText: "Tanzen",
    fullText: "Fast schon frech, dass ich mehr Komplimente als du in dem Jumpsuit bekommen habe.",
    imageUrl: "pictures/day15.jpg",
  },
  {
    day: 16,
    title: "Silvester 2023",
    shortText: "Silvester",
    fullText: "Ein weiterer schöner Abend. Ich bin mir ziemlich sicher, das eine Rakete umgefallen und in irgend einen Busch geflogen ist. Glücklicherweise ist nix passiert.\n\nIch hab dich lieb Jana <3",
    imageUrl: "pictures/day16.jpg",
  },
  {
    day: 17,
    title: "Juicy Schneemann",
    shortText: "Schnee",
    fullText: "Erinnerst du dich noch an unseren wundervollen, kruvigen Schneemann.\n\nEin wahres Meisterwerk.",
    imageUrl: "pictures/day17.jpg",
  },
  {
    day: 18,
    title: "Aachen",
    shortText: "Aachen",
    fullText: "Wundervolle Erinnerungen und echt leckere Lasagne.\n\nAber am meisten aus Aachen vermisse ich die beiden kleinen Quälgeister.",
    imageUrl: "pictures/day18.jpg",
  },
  {
    day: 19,
    title: "Ein Küsschen",
    shortText: "Ein Küsschen",
    fullText: "<3",
    imageUrl: "pictures/day19.jpg",
  },
  {
    day: 20,
    title: "Eine Umarmung",
    shortText: "Eine Umarmung!",
    fullText: "Ein sehr schönes Bild von uns.\n\nIch erinnere mich noch daran, dass eine Rakete umgefallen und in einen Busch geflogen ist.",
    imageUrl: "pictures/day20.jpg",
  },
  {
    day: 21,
    title: "Lecker Essen",
    shortText: "Lecker Essen",
    fullText: "Abgesehen davon, dass ich mich auf dem Bild ü40 fühle, war das ein sehr leckeres Essen.",
    imageUrl: "pictures/day21.jpg",
  },
  {
    day: 22,
    title: "Aquaphobie",
    shortText: "Auqaphobie",
    fullText: "Nicht unbedingt meine lieblingsmusik aber der Tag war am Ende echt Lustig und hat Spaß gemacht.\n\nMein Rücken hat seehr rot geleuchtet.",
    imageUrl: "pictures/day22.jpg",
  },
  {
    day: 23,
    title: "Ein Anfang",
    shortText: "Ein Anfang",
    fullText: "Das war mit die erste Party auf der wir gemeinsam waren und ich weiß noch, dass wir sehr schön getanzt haben.",
    imageUrl: "pictures/day23.jpg",
  },
  {
    day: 24,
    title: "Frohe Weihnachten",
    shortText: "Mein schönstes Geschenk",
    fullText: "Frohe Weihnachten, ich hab dich lieb <3\nEs gibt für mich kein größeres Geschenk.",
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
