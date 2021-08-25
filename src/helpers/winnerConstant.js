import tailwind from "tailwind-rn";
import { StyleSheet } from "react-native";

/******************Winner Screen Styling constants ***********************************/

export const winnerScreenView = tailwind(`w-full absolute`);
export const winnerLogo = tailwind(`absolute top-4 w-40 h-36`);
export const greetingTextView = tailwind(`w-4/5 text-center mt-40`);
export const greetingTextHeading = tailwind(`text-2xl font-bold tracking-wide`);
export const greetingText = tailwind(`text-sm mt-6 leading-1 tracking-wide`);
export const citySelectView = tailwind(
  `absolute w-80 h-14 border-2 border-gray-300 flex flex-row justify-between items-center bg-indigo-50`
);
export const selectText = tailwind(`text-base font-bold ml-6 text-gray-400`);
export const selectArrow = tailwind(`w-4 h-2.5 mr-6`);
export const previousWinnerView = tailwind(`absolute bottom-48 ml-6`);
export const previousWinnerText = tailwind(`font-bold text-base`);
export const tagView = tailwind(
  `absolute left-2 top-2 rounded-full leading-1 w-28 h-4`
);
export const tagText = tailwind(`text-white text-xs`);

export const styles = StyleSheet.create({
  winnerLogo: {
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
  },
});
