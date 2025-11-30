// DEBUG: Uncomment during development to pretend it's Dec 24
// const debugDayOverride = 24;

const placeholderImage = "https://images.unsplash.com/photo-1512914890250-353c97c9e7db?auto=format&fit=crop&w=1200&q=60";

// Pflege nur dieses Array: Inhalte fuer alle 24 Tage
const days = [
  {
    day: 1,
    title: "Tag 1",
    shortText: "Kleine Vorschau fuer Tag 1",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 2,
    title: "Tag 2",
    shortText: "Kleine Vorschau fuer Tag 2",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 3,
    title: "Tag 3",
    shortText: "Kleine Vorschau fuer Tag 3",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 4,
    title: "Tag 4",
    shortText: "Kleine Vorschau fuer Tag 4",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 5,
    title: "Tag 5",
    shortText: "Kleine Vorschau fuer Tag 5",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 6,
    title: "Tag 6",
    shortText: "Kleine Vorschau fuer Tag 6",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 7,
    title: "Tag 7",
    shortText: "Kleine Vorschau fuer Tag 7",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 8,
    title: "Tag 8",
    shortText: "Kleine Vorschau fuer Tag 8",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 9,
    title: "Tag 9",
    shortText: "Kleine Vorschau fuer Tag 9",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 10,
    title: "Tag 10",
    shortText: "Kleine Vorschau fuer Tag 10",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 11,
    title: "Tag 11",
    shortText: "Kleine Vorschau fuer Tag 11",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 12,
    title: "Tag 12",
    shortText: "Kleine Vorschau fuer Tag 12",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 13,
    title: "Tag 13",
    shortText: "Kleine Vorschau fuer Tag 13",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 14,
    title: "Tag 14",
    shortText: "Kleine Vorschau fuer Tag 14",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 15,
    title: "Tag 15",
    shortText: "Kleine Vorschau fuer Tag 15",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 16,
    title: "Tag 16",
    shortText: "Kleine Vorschau fuer Tag 16",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 17,
    title: "Tag 17",
    shortText: "Kleine Vorschau fuer Tag 17",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 18,
    title: "Tag 18",
    shortText: "Kleine Vorschau fuer Tag 18",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 19,
    title: "Tag 19",
    shortText: "Kleine Vorschau fuer Tag 19",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 20,
    title: "Tag 20",
    shortText: "Kleine Vorschau fuer Tag 20",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 21,
    title: "Tag 21",
    shortText: "Kleine Vorschau fuer Tag 21",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 22,
    title: "Tag 22",
    shortText: "Kleine Vorschau fuer Tag 22",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 23,
    title: "Tag 23",
    shortText: "Kleine Vorschau fuer Tag 23",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
  {
    day: 24,
    title: "Tag 24",
    shortText: "Kleine Vorschau fuer Tag 24",
    fullText: "Langer Text fuer dieses Tuerchen mit mehr Details und lieben Worten.",
    imageUrl: placeholderImage,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const modalBackdrop = document.querySelector(".modal-backdrop");
  const modalTitle = document.querySelector(".modal-title");
  const modalContent = document.querySelector(".modal-content");
  const modalImage = document.querySelector(".modal-image");
  const modalClose = document.querySelector(".modal-close");
  const doors = document.querySelectorAll(".door");

  const today = new Date();
  const computedDay = today.getMonth() === 11 ? today.getDate() : 24; // 11 = December
  const currentDay = typeof debugDayOverride === "number" ? debugDayOverride : computedDay;

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

  doors.forEach((door) => {
    door.addEventListener("click", () => {
      const dayNumber = Number(door.dataset.day);
      const dayData = days.find((entry) => entry.day === dayNumber);
      if (!dayData) return;

      if (dayNumber > currentDay || door.classList.contains("locked")) return;

      door.classList.add("opened");
      addPreviewToDoor(door, dayData);
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
