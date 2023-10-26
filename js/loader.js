import { elLoader } from "./html-elements.js";

const loader = (value = true) => {
  if (value) {
    setTimeout(() => {
      elLoader.classList.remove("loader-wrapper--none");
    }, 800);
  } else elLoader.classList.add("loader-wrapper--none");
};

export default loader;
