import tailwind from "tailwind-rn";
import {StyleSheet} from "react-native";

/******************Common Styling constants ***********************************/
export const CommonStyle = tailwind(`flex justify-center items-center`);
export const SplashMainImage = tailwind(`w-full h-2/4 absolute rounded-full`);
export const transButton = tailwind(
  `w-40 h-11 border-2 border-black rounded-full mx-1 flex items-center justify-center`
);
export const whiteButton = tailwind(
  `w-40 h-11 border-2 border-white bg-white rounded-full mx-1 flex items-center justify-center`
);
export const buttonText = tailwind(`text-sm font-bold text-black`);

export const fullProfileNameView = tailwind(`absolute left-8 bottom-24`);
export const fullProfileNameHeading = tailwind(`text-white`);
export const fullProfileName = tailwind(`text-pink-700 mt-1`);

export const iconsView = tailwind(`flex justify-between flex-row items-center w-20`);

export const icon = tailwind(`w-6 h-6`);

export const selectView = tailwind(`w-full absolute bottom-64`);
export const footerView = tailwind(`w-full h-16 absolute bottom-0 z-10`);

export const styles = StyleSheet.create({
  backgroundImage: {
    width: "100vw",
    height: "100vh",
    resizeMode: "cover",
    position: "relative",
  },
  roundImg: {
    top: "4.6%",
    left: "-31.5%",
    resizeMode: "cover",
  },
});
