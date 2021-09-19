export const roadmap = {
  rows: 4,
  cols: 4,
  entryLevel: "sami",
  levels: {
    sami: {
      name: "Sami",
      row: 0,
      col: 0,
      next: ["salah"],
    },
    salah: {
      name: "Salah",
      row: 0,
      col: 1,
      next: ["zin_eddine", "oussama"],
    },
    zin_eddine: {
      name: "Zin Eddine",
      row: 0,
      col: 2,
      next: ["el_mehdi"],
    },
    oussama: {
      name: "Oussama",
      row: 1,
      col: 1,
      next: ["el_mehdi", "abderrahman"],
    },
    el_mehdi: {
      name: "El Mehdi",
      row: 1,
      col: 2,
      next: [],
    },
    abderrahman: {
      name: "Abderrahaman",
      row: 2,
      col: 1,
      next: [],
    },
  },
};
