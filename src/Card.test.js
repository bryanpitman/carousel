import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

const currCard = TEST_IMAGES[0];


it("matches snapshot", function () {
  const { container } = render(<Card
    caption={currCard.caption}
    src={currCard.src}
    currNum={0}
    totalNum={3}
  />);
  expect(container).toMatchSnapshot();
});

it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<Card
    caption={currCard.caption}
    src={currCard.src}
    currNum={0}
    totalNum={3}
  />);
});

