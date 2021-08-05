import tailwind from "tailwind-rn";
import {StyleSheet} from "react-native";

/******************Common Styling constants ***********************************/
export const SplashView = tailwind(`flex-1 justify-center items-center`);
export const backgroundImage = tailwind(`relative top-0 left-0`);
export const SplashMainImage = tailwind(`w-full h-2/4 absolute rounded-full`);
export const transButton = tailwind(
  `w-40 h-11 border-2 border-black rounded-full mx-1 flex items-center justify-center`
);
export const whiteButton = tailwind(
  `w-40 h-11 border-2 border-white bg-white rounded-full mx-1 flex items-center justify-center`
);
export const buttonText = tailwind(`text-sm font-bold text-black`);

export const styles = StyleSheet.create({
  stretch: {
    width: "100vw",
    height: "100vh",
    resizeMode: "cover",
  },
  roundImg: {
    top: "4.6%",
    left: "-31.5%",
    resizeMode: "cover",
  },
});
