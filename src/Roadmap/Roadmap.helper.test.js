import { render, screen } from "@testing-library/react";
import { buildGrid } from "./Roadmap.helper";

const roadmap = {
  rows: 3,
  cols: 3,
  entryLevel: "sami",
  levels: {
    sami: {
      name: "Sami",
      row: 0,
      col: 0,
      description: "Lorem Ipsum",
      resources: ["https://www.google.com"],
      problems: ["https://www.youtube.com"],
      next: ["salah"],
    },
    salah: {
      name: "Salah",
      row: 0,
      col: 1,
      description: "Lorem Ipsum",
      resources: ["https://www.google.com"],
      problems: ["https://www.youtube.com"],
      next: ["zin_eddine", "oussama"],
    },
    zin_eddine: {
      name: "Zin Eddine",
      row: 0,
      col: 2,
      description: "Lorem Ipsum",
      resources: ["https://www.google.com"],
      problems: ["https://www.youtube.com"],
      next: ["el_mehdi"],
    },
    oussama: {
      name: "Oussama",
      row: 1,
      col: 1,
      description: "Lorem Ipsum",
      resources: ["https://www.google.com"],
      problems: ["https://www.youtube.com"],
      next: ["el_mehdi", "abderrahman"],
    },
    el_mehdi: {
      name: "El Mehdi",
      row: 1,
      col: 2,
      description: "Lorem Ipsum",
      resources: ["https://www.google.com"],
      problems: ["https://www.youtube.com"],
      next: [],
    },
    abderrahman: {
      name: "Abderrahaman",
      row: 2,
      col: 1,
      description: "Lorem Ipsum",
      resources: ["https://www.google.com"],
      problems: ["https://www.youtube.com"],
      next: [],
    },
  },
};

describe("roadmap helpers", () => {
  it("should build grid given roadmap", () => {
    render(buildGrid(roadmap));

    const grid = screen.getByTestId("grid");

    expect(grid.childElementCount).toBe(roadmap.rows);

    expect(grid.children[0].childElementCount).toBe(roadmap.cols);
    expect(grid.children[1].childElementCount).toBe(roadmap.cols);
    expect(grid.children[2].childElementCount).toBe(roadmap.cols);
  });
});
