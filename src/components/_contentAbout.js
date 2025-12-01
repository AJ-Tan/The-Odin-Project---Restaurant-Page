import { pageBackground } from "./_pageBackground";
import { nightSkyBg } from "./assetImports";

export const contentAbout = () => {
  pageBackground.setPageBg(nightSkyBg, true);

  const contentAboutNode = document.createElement("section");
  contentAboutNode.classList.add("about");

  return contentAboutNode;
}