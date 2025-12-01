import { pageHeader } from "./_pageHeader";
import { pageBackground } from "./_pageBackground";

export const pageInitialize = () => {
  pageBackground();
  pageHeader.initialize();
}