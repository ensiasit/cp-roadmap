import { render, screen } from "@testing-library/react";
import { buildGrid } from "./Roadmap.helper";

const roadmap = {
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

describe("roadmap helpers", () => {
  it("should build grid given roadmap", () => {
    render(buildGrid(roadmap));

    expect(screen.getByTestId("grid").childElementCount).toBe(roadmap.rows);
    expect(screen.getByTestId("grid").children[0].children[0].textContent).toBe(
      "Sami"
    );
    expect(screen.getByTestId("grid").children[0].children[1].textContent).toBe(
      "Salah"
    );
    expect(screen.getByTestId("grid").children[0].children[2].textContent).toBe(
      "Zin Eddine"
    );
    expect(screen.getByTestId("grid").children[1].children[1].textContent).toBe(
      "Oussama"
    );
    expect(screen.getByTestId("grid").children[1].children[2].textContent).toBe(
      "El Mehdi"
    );
    expect(screen.getByTestId("grid").children[2].children[1].textContent).toBe(
      "Abderrahaman"
    );
  });
});
