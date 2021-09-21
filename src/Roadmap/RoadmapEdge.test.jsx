import {render, screen} from "@testing-library/react";
import RoadmapEdge from "./RoadmapEdge";

describe("Testing RoadmapEdge", () => {
  it("Should render edge coming from left", () => {
    const props = {
      node: {row: 0, col: 1},
      adjacent: {row: 0, col: 0},
    };

    render(<RoadmapEdge {...props} />)

    const edge = screen.getByTestId("roadmap-edge");

    expect(edge.style.transform).toBe("rotate(0deg)");
  });

  it("Should render edge coming from top", () => {
    const props = {
      node: {row: 1, col: 0},
      adjacent: {row: 0, col: 1},
    };

    render(<RoadmapEdge {...props} />)

    const edge = screen.getByTestId("roadmap-edge");

    expect(edge.style.transform).toBe("rotate(90deg)");
  });

  it("Should render edge coming from right", () => {
    const props = {
      node: {row: 0, col: 0},
      adjacent: {row: 0, col: 1},
    };

    render(<RoadmapEdge {...props} />)

    const edge = screen.getByTestId("roadmap-edge");

    expect(edge.style.transform).toBe("rotate(180deg)");
  });

  it("Should render edge coming from bottom", () => {
    const props = {
      node: {row: 0, col: 0},
      adjacent: {row: 1, col: 1},
    };

    render(<RoadmapEdge {...props} />)

    const edge = screen.getByTestId("roadmap-edge");

    expect(edge.style.transform).toBe("rotate(270deg)");
  });
});