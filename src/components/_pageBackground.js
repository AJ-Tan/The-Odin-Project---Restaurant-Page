import "./css/pageBackground.css";
import bgVideo from "../asset/video/bg-video.mp4";
import bgImg from "../asset/images/bg-static.jpeg";

export const pageBackground = () => {
  const bgVideoContainerNode = document.createElement("div");
  bgVideoContainerNode.classList.add("bg-video-container");
  document.body.appendChild(bgVideoContainerNode);

  const bgOverlayNode = document.createElement("div");
  bgOverlayNode.classList.add("bg-overlay");
  bgVideoContainerNode.appendChild(bgOverlayNode);

  const bgVideoNode = document.createElement("video");
  bgVideoNode.id = "bg-video";
  bgVideoNode.setAttribute("autoplay", "");
  bgVideoNode.setAttribute("loop", "");
  bgVideoNode.setAttribute("muted", "");
  bgVideoNode.src = bgVideo;
  bgOverlayNode.appendChild(bgVideoNode);

  const bgImageNode = document.createElement("img");
  bgImageNode.id = "bg-image";
  bgImageNode.classList.add("bg-static-img");
  bgImageNode.src = bgImg;
  bgOverlayNode.appendChild(bgImageNode);
}