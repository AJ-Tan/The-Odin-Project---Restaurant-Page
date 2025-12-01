import { contentHome } from "./_contentHome";
import { contentAbout } from "./_contentAbout";

export const contentRoute = (content = "home") => {
  const divContentNode = document.querySelector(".div-content");
  const contentList = {
    home: contentHome,
    about: contentAbout
  }

  divContentNode.replaceChildren(contentList[content]());
}