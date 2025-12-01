import "./css/pageHeader.css";
import buttonBg from "../asset/images/button-bg.webp";
import headerBg from "../asset/images/header-bg.webp";
import headerLogo from "../asset/images/hsr logo.webp";

export const pageHeader = (() => {

  const initialize = () => {
    const pageHeaderNode = document.createElement("header");
    pageHeaderNode.classList.add("page-header");

    const pageLogoNode = document.createElement("img");
    pageLogoNode.classList.add("page-logo");
    pageLogoNode.setAttribute("src", headerLogo);
    pageHeaderNode.appendChild(pageLogoNode);

    const pageNavNode = document.createElement("nav");
    pageNavNode.classList.add("page-nav");
    pageNavNode.style.backgroundImage = `url(${headerBg})`;
    pageHeaderNode.appendChild(pageNavNode);

    const navListNode = document.createElement("ul");
    navListNode.classList.add("nav-list");
    pageNavNode.appendChild(navListNode);

    const btnList = [["btn-Home","Home"], ["btn-menu", "Menu"], ["btn-about", "About"]];
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

  const headerButton = ([id, btnText]) => {
    const buttonNode = document.createElement("button");
    buttonNode.setAttribute("type", "button");
    buttonNode.classList.add("btn-header");
    buttonNode.id = id;
    
    const buttonBgNode = document.createElement("img");
    buttonBgNode.setAttribute("src", buttonBg);
    buttonNode.appendChild(buttonBgNode);

    const buttonTextNode = document.createElement("span");
    buttonTextNode.textContent = btnText;
    buttonTextNode.classList.add("btn-header-text");
    buttonNode.appendChild(buttonTextNode);

    return buttonNode;
  }

  return {initialize};
})();