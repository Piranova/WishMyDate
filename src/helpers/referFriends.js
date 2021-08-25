import tailwind from "tailwind-rn";
import { StyleSheet } from "react-native";

/******************Styling Refer Friends constants *****************************/

export const referFriendsViewText = tailwind(`absolute top-6 text-3xl w-2/4`);
export const referFriendsViewLine = tailwind(
  `absolute top-24 w-9 h-1 rounded-2xl bg-pink-700`
);

export const referFriendsCodeView = tailwind(`absolute bottom-32`);
export const referTextAmount = tailwind(`text-center w-3/5 text-lg`);
export const textAmount = tailwind(`font-bold text-pink-700`);
export const referCode = tailwind(
  `z-10 w-72 h-20 border-2 border-dashed border-gray-300 rounded-lg bg-indigo-50 mt-6`
);

export const socialButtonsView = tailwind(`w-full absolute bottom-12 flex-row`);
export const socialButton = tailwind(
  `w-32 h-12 bg-pink-700 rounded-full mr-4 ml-4 flex-row`
);

export const socialButtonText = tailwind(
  `text-sm font-bold text-white tracking-wider`
);

export const styles = StyleSheet.create({
  code: {
    fontSize: "2.5rem",
    letterSpacing: "4px",
  },
  copyCode: {
    fontSize: ".9rem",
    marginTop: ".2rem",
    width: "18rem",
    lineHeight: "1.2rem",
  },
  buttonTouch: {
    boxShadow: " 0px 23px 35px -4px rgba(0,0,0,0.75)",
  },
  whatsApp: {
    width: "1.12rem",
    height: "1.1rem",
    marginRight: ".5rem",
  },
  faceBook: {
    width: ".5rem",
    height: "1.2rem",
    marginRight: ".5rem",
  },
});
