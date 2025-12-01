import "./css/pageBackground.css";

import { imgHomeBg,videoHomeBg } from "./assetImports";

export const pageBackground = (() => {
  const bgVideoNode = document.createElement("video");
  const bgImageNode = document.createElement("img");

  const init = () => {
    const bgVideoContainerNode = document.createElement("div");
    const bgOverlayNode = document.createElement("div");

    bgVideoContainerNode.classList.add("bg-container");
    document.body.appendChild(bgVideoContainerNode);

    bgOverlayNode.classList.add("bg-overlay");
    bgVideoContainerNode.appendChild(bgOverlayNode);

    bgVideoNode.id = "bg-video";
    bgVideoNode.setAttribute("autoplay", "");
    bgVideoNode.setAttribute("loop", "");
    bgVideoNode.setAttribute("muted", "");
    bgVideoNode.src = videoHomeBg;
    bgOverlayNode.appendChild(bgVideoNode);

    bgImageNode.id = "bg-image";
    bgImageNode.classList.add("bg-static-img");
    bgImageNode.src = imgHomeBg;
    bgOverlayNode.appendChild(bgImageNode);
  }

  const setPageBg = (bgImg, hideVideo = false, bgVideo = videoHomeBg) => {
    bgImageNode.src = bgImg;
    bgVideoNode.src = bgVideo;
    bgVideoNode.style.visibility = hideVideo ? "hidden" : "visible";
  }
  
  return {init, setPageBg};
})()