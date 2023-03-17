import getSiblings from "./getSiblings";

const cardMouseEffect = (featureEl) => {
  var featuresitems = featureEl;
  if (featuresitems) {
    featuresitems.forEach((item) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      item.onmouseover = function (event) {
        item.classList.add("active");
        const siblings = getSiblings(item);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const siblingEl = siblings.map((e) => e.classList.remove("active"));
      };
    });
  }
};

export default cardMouseEffect;
