import "./css/contentHome.css";
import { pageBackground } from "./_pageBackground";
import { btnAnimatedBg,btnBorder,homeText,imgHomeBg,videoHomeBg } from "./assetImports";


export const contentHome = () => {
  pageBackground.setPageBg(imgHomeBg, false);
  const homeContainerNode = document.createElement("div");
  homeContainerNode.classList.add("home-container");

  const homeImgNode = document.createElement("img");
  homeImgNode.classList.add("home-img");
  homeImgNode.src = homeText;
  homeContainerNode.appendChild(homeImgNode);

  const homeButtonNode = document.createElement("button");
  homeButtonNode.classList.add("btn-home");
  homeContainerNode.appendChild(homeButtonNode);

  const buttonAnimatedBGNode = document.createElement("img");
  buttonAnimatedBGNode.classList.add("btn-home-animated-bg");
  buttonAnimatedBGNode.src = btnAnimatedBg;
  homeButtonNode.appendChild(buttonAnimatedBGNode);

  const buttonBorderNode = document.createElement("img");
  buttonBorderNode.classList.add("btn-border");
  buttonBorderNode.src = btnBorder;
  homeButtonNode.appendChild(buttonBorderNode);

  const buttonTextNode = document.createElement("span");
  buttonTextNode.classList.add("btn-home-text");
  buttonTextNode.textContent = "Order Now";
  homeButtonNode.appendChild(buttonTextNode);

  return homeContainerNode;
}