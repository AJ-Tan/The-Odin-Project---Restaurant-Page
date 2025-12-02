import "./css/contentAbout.css";
import { pageBackground } from "./_pageBackground";
import { nightSkyBg, aboutUsImg } from "./assetImports";
import { dataAboutContent } from "./contentData/dataAbout";

export const contentAbout = () => {
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
  mainHeaderTextNode.textContent = dataAboutContent.pageHeader;
  mainHeaderContainer.appendChild(mainHeaderTextNode);

  const contentSection = document.createElement("section");
  contentSection.classList.add("content-section");
  mainNode.appendChild(contentSection);

  const contentSectionContainer = document.createElement("div");
  contentSectionContainer.classList.add("content-section-container");
  contentSection.appendChild(contentSectionContainer);

  const contentSectionItemNode = document.createElement("div");
  contentSectionItemNode.classList.add("content-section-item");
  contentSectionContainer.appendChild(contentSectionItemNode);

  const contentHeaderNode = document.createElement("header");
  contentHeaderNode.classList.add("content-header");
  contentSectionItemNode.appendChild(contentHeaderNode);

  const contentHeaderTextNode = document.createElement("h2");
  contentHeaderTextNode.textContent = dataAboutContent.contentHeader;
  contentHeaderNode.appendChild(contentHeaderTextNode);

  const contentTextGroup = document.createElement("div");
  contentTextGroup.classList.add("content-text-group");
  contentSectionItemNode.appendChild(contentTextGroup);

  dataAboutContent.contentText.forEach(val => {
    const contentTestNode = document.createElement("p");
    contentTestNode.textContent = val;
    contentTextGroup.appendChild(contentTestNode);
  })

  const aboutUsImgNode = document.createElement("img");
  aboutUsImgNode.classList.add("about-img");
  aboutUsImgNode.src = aboutUsImg;
  contentSectionItemNode.appendChild(aboutUsImgNode);

  return mainNode;
}