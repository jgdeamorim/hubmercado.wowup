import { verticalMenuData } from "@/data/navigation/verticalMenuData";
import { horizontalMenuData } from "@/data/navigation/horizontalMenuData";

export const getMenuItems = (menuType: "vertical" | "horizontal") => {
  return menuType === "vertical" ? verticalMenuData : horizontalMenuData;
};
