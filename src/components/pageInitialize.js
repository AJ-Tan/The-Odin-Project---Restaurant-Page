import { pageHeader } from "./_pageHeader";
import { pageBackground } from "./_pageBackground";
import { contentRoute } from "./contentRoute";

export const pageInitialize = () => {
  pageBackground.init();
  pageHeader.init();
  contentRoute("home");
}