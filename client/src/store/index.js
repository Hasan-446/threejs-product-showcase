import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#6C5B7B",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});
export default state;
