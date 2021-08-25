import tailwind from "tailwind-rn";
import { StyleSheet } from "react-native";

/******************Styling Girls Profile constants *****************************/

export const socialButtonText = tailwind(`text-sm font-bold text-white tracking-wider`);
export const girlProfileImgView = tailwind(`absolute w-full top-32`);
export const iconsMainView = tailwind(`w-72 absolute bottom-20 flex flex-row items-center justify-evenly`);
export const girlProfileIconView = tailwind(`w-14 h-14 rounded-full bg-indigo-100`);
export const iconLargeView = tailwind(`w-20 h-20 rounded-full bg-pink-700 border-2 border-white`);

export const styles = StyleSheet.create({
  blurImg: {
    width: "21rem",
    height: "30rem",
    borderRadius: "1rem",
    resizeMode: "cover",
    zIndex: 2,
  },
  skewGirl: {
    zIndex: 55555,
    width: "21rem",
    height: "38rem",
    resizeMode: "cover",
    position: "absolute",
    left: 0,
    top: "-1rem",
    },
    iconViewShadow: {
        boxShadow: "0 1px 11px 0 rgb(0 0 0 / 25%)",
      },
});
