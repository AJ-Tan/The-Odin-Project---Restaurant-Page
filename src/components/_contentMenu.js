import "./css/contentMenu.css";
import { pageBackground } from "./_pageBackground";
import { nightSkyBg, menuBackground } from "./assetImports";
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

  dataMenuContent.menuTypes.forEach((menuType) => {

    const contentSectionItemNode = document.createElement("div");
    contentSectionItemNode.classList.add("content-section-item");
    contentSectionContainer.appendChild(contentSectionItemNode);

    const contentHeaderNode = document.createElement("header");
    contentHeaderNode.classList.add("content-header");
    contentSectionItemNode.appendChild(contentHeaderNode);

    const contentHeaderTextNode = document.createElement("h2");
    contentHeaderTextNode.textContent = menuType.header;
    contentHeaderNode.appendChild(contentHeaderTextNode);

    const menuItemsContainerNode = document.createElement("div");
    menuItemsContainerNode.classList.add("menu-items-container");
    contentSectionItemNode.appendChild(menuItemsContainerNode)
    
    dataMenuContent.menuList.filter(({type}) => type === menuType.type)
    .forEach(menuItem => {
      const menuItemNode = document.createElement("article");
      menuItemNode.classList.add("menu-item");
      menuItemsContainerNode.appendChild(menuItemNode);

      const menuImageContainerNode = document.createElement("div");
      menuImageContainerNode.classList.add("menu-image-container");
      menuImageContainerNode.style.backgroundImage = `url(${menuBackground})`;
      menuItemNode.appendChild(menuImageContainerNode);

      const menuImageNode = document.createElement("img");
      menuImageNode.classList.add("menu-image");
      menuImageNode.src = menuItem.img;
      menuImageContainerNode.appendChild(menuImageNode);

      const menuDetailsNode = document.createElement("div");
      menuDetailsNode.classList.add("menu-details");
      menuItemNode.appendChild(menuDetailsNode);

      const menuHeaderNode = document.createElement("header");
      menuHeaderNode.classList.add("menu-header");
      menuDetailsNode.appendChild(menuHeaderNode);

      const menuNameNode = document.createElement("h3");
      menuNameNode.classList.add("menu-name");
      menuNameNode.textContent = menuItem.name;
      menuHeaderNode.appendChild(menuNameNode);

      const menuPriceNode = document.createElement("span");
      menuPriceNode.classList.add("menu-price");
      menuPriceNode.textContent = menuItem.price;
      menuHeaderNode.appendChild(menuPriceNode);

      const menuDescription = document.createElement("p");
      menuDescription.classList.add("menu-description");
      menuDescription.textContent = menuItem.description;
      menuDetailsNode.appendChild(menuDescription);

      const menuButton = document.createElement("button");
      menuButton.classList.add("btn-menu");
      menuButton.setAttribute("type", "button");
      menuButton.textContent = "BUY NOW";
      menuDetailsNode.appendChild(menuButton);
    })
  })

  return mainNode;
}