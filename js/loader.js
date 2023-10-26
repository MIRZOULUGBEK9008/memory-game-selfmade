import cssClassModifiers from "./css-class-modifiers.js";
import { elLoader } from "./html-elements.js";

// CSS class modifiers
const { loaderOpacity, loaderNone } = cssClassModifiers;

const loader = (value = true) => {
  if (value) {
    elLoader.classList.remove(loaderOpacity, loaderNone);
    elLoader.classList.remove();
  } else {
    elLoader.classList.add(loaderOpacity);
    elLoader.ontransitionend = () => {
      elLoader.classList.add(loaderNone);
    };
  }
};

export default loader;
