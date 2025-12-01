import "./css/pageHeader.css";
import { contentRoute } from "./contentRoute";
import { btnStaticBg,pageHeaderBg,pageLogo } from "./assetImports";


export const pageHeader = (() => {

  const init = () => {
    const pageHeaderNode = document.createElement("header");
    pageHeaderNode.classList.add("page-header");

    const pageLogoNode = document.createElement("img");
    pageLogoNode.classList.add("page-logo");
    pageLogoNode.setAttribute("src", pageLogo);
    pageHeaderNode.appendChild(pageLogoNode);

    const pageNavNode = document.createElement("nav");
    pageNavNode.classList.add("page-nav");
    pageNavNode.style.backgroundImage = `url(${pageHeaderBg})`;
    pageHeaderNode.appendChild(pageNavNode);

    const navListNode = document.createElement("ul");
    navListNode.classList.add("nav-list");
    pageNavNode.appendChild(navListNode);

    const btnList = [["btn-Home","Home", "home"], ["btn-menu", "Menu", "menu"], ["btn-about", "About", "about"]];
    btnList.forEach(btnData => {
      const listItemNode = document.createElement("li");
      listItemNode.classList.add("nav-item");

      const btnNode = headerButton(btnData);

      listItemNode.appendChild(btnNode);
      navListNode.appendChild(listItemNode);
    })

    const contentNode = document.querySelector(".div-content");
    document.body.insertBefore(pageHeaderNode,contentNode);
  }

  const headerButton = ([id, btnText, route]) => {
    const buttonNode = document.createElement("button");
    buttonNode.setAttribute("type", "button");
    buttonNode.classList.add("btn-header");
    buttonNode.id = id;
    buttonNode.addEventListener("click", () => {
      contentRoute(route);
    })
    
    const buttonBgNode = document.createElement("img");
    buttonBgNode.setAttribute("src", btnStaticBg);
    buttonNode.appendChild(buttonBgNode);

    const buttonTextNode = document.createElement("span");
    buttonTextNode.textContent = btnText;
    buttonTextNode.classList.add("btn-header-text");
    buttonNode.appendChild(buttonTextNode);

    return buttonNode;
  }

  return {init};
})();