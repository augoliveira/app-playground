import { getSiblings } from "./customFunctions";

const featuresEffect = () => {
  var featuresitems = document.querySelectorAll(".feat .items");
  if (featuresitems) {
    featuresitems.forEach((item) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      item.onmouseover = function (event) {
        item.classList.add("active");
        let siblings = getSiblings(item),
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          siblingEl = siblings.map((e) => e.classList.remove("active"));
      };
    });
  }
};
export default featuresEffect;
