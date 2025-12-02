import "./css/contentCommon.css";
import { pageHeader } from "./_pageHeader";
import { pageBackground } from "./_pageBackground";
import { contentRoute } from "./contentRoute";
import { nightSkyBg } from "./assetImports";

export const pageInitialize = () => {
  pageBackground.init();
  pageHeader.init();
  contentRoute("home");

  window.addEventListener("load", () => {
    // To preload image for smooth transition
    pageBackground.setPageBg(nightSkyBg, false); 
  })
}