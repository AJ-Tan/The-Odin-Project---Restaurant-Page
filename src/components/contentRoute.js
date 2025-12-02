import { contentHome } from "./_contentHome";
import { contentAbout } from "./_contentAbout";
import { contentMenu } from "./_contentMenu";

export const contentRoute = (content = "home") => {
  const divContentNode = document.querySelector(".div-content");
  const contentList = {
    home: contentHome,
    menu: contentMenu,
    about: contentAbout
  }

  divContentNode.replaceChildren(contentList[content]());
}