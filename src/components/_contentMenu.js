
import { pageBackground } from "./_pageBackground";
import { nightSkyBg } from "./assetImports";
import { dataMenuContent } from "./contentData/dataMenu";

export const contentMenu = () => {
  pageBackground.setPageBg(nightSkyBg, true);

  const mainNode = document.createElement("section");
  mainNode.classList.add("main");

  const mainHeaderNode = document.createElement("header");
  mainHeaderNode.classList.add("main-header");
  mainNode.appendChild(mainHeaderNode);

  const mainHeaderContainer = document.createElement("div");
  mainHeaderContainer.classList.add("main-header-container");
  mainHeaderNode.appendChild(mainHeaderContainer);

  const mainHeaderTextNode = document.createElement("h1");
  mainHeaderTextNode.textContent = dataMenuContent.pageHeader;
  mainHeaderContainer.appendChild(mainHeaderTextNode);

  const contentSection = document.createElement("section");
  contentSection.classList.add("content-section");
  mainNode.appendChild(contentSection);

  const contentSectionContainer = document.createElement("div");
  contentSectionContainer.classList.add("content-section-container");
  contentSection.appendChild(contentSectionContainer);

  const contentHeaderNode = document.createElement("div");
  contentHeaderNode.classList.add("content-header");
  contentSectionContainer.appendChild(contentHeaderNode);

  const contentHeaderTextNode = document.createElement("h2");
  contentHeaderTextNode.textContent = dataMenuContent.contentHeader;
  contentHeaderNode.appendChild(contentHeaderTextNode);

  const contentBodyNode = document.createElement("div");
  contentBodyNode.classList.add("content-body");
  contentSectionContainer.appendChild(contentBodyNode);

  const contentTextGroup = document.createElement("div");
  contentTextGroup.classList.add("content-text-group");
  contentSectionContainer.appendChild(contentTextGroup);

  dataMenuContent.contentText.forEach(val => {
    const contentTestNode = document.createElement("p");
    contentTestNode.textContent = val;
    contentTextGroup.appendChild(contentTestNode);
  })

  return mainNode;
}