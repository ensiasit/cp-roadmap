import RoadmapCell from "./RoadmapCell";
import {render, screen} from "@testing-library/react";

describe("Testing RoadmapCell", () => {
  it("Should render with light gray background color", () => {
    const props = {
      gridNode: {
        prev: [],
        next: []
      },
      row: 0,
      col: 0,
    };

    render(<RoadmapCell {...props} />);

    const cell = screen.getByTestId("roadmap-cell");

    expect(cell.style.backgroundColor).toBe("rgb(239, 239, 239)");
  });

  it("Should render with white background color", () => {
    const props = {
      gridNode: {
        prev: [],
        next: []
      },
      row: 0,
      col: 1,
    };

    render(<RoadmapCell {...props} />);

    const cell = screen.getByTestId("roadmap-cell");

    expect(cell.style.backgroundColor).toBe("white");
  });
})