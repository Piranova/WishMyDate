import tailwind from "tailwind-rn";
import { StyleSheet } from "react-native";

/******************Styling Premium Package constants *****************************/

export const headerView = tailwind(
  `w-full absolute p-7 flex flex-row justify-between`
);
export const premiumHeaderLogoView = tailwind(`w-20 h-20 rounded-full z-10`);

export const mainLogoView = tailwind(`absolute top-32`);
export const mainLogoImg = tailwind(`w-44 rounded-full h-40`);
export const membershipViewText = tailwind(`absolute top-40 text-3xl`);

export const buttonTouch = tailwind(
  `w-64 h-12 bg-pink-700 rounded-full mx-1 flex flex-row items-center justify-center`
);
export const buttonTouchText = tailwind(`text-sm font-bold text-white`);

export const membershipButtonView = tailwind(
  `w-full h-full absolute top-96 mt-16`
);
export const dotsView = tailwind(`absolute bottom-28 w-full flex flex-row`);

export const membershipRulesView = tailwind(`w-full absolute top-60`);
export const membershipRule = tailwind(`w-4/5 flex flex-row mr-6 mb-2`);
export const membershipRuleText = tailwind(
  `text-base ml-4 text-left tracking-wide`
);

export const styles = StyleSheet.create({
  logoView: {
    backgroundColor: "#fff",
  },
  headerView: { top: 0, width: "95%" },
  girlsProfileLogoView: {
    backgroundColor: "rgba(256,256,256, .3)",
  },
  searchView: {
    backgroundColor: "#e92679",
  },
  listIcon: { width: "1.4rem", height: "1.4rem" },
  dotsStyle: {
    height: ".4rem",
    marginLeft: ".3rem",
    marginRight: ".3rem",
    borderRadius: 50,
    backgroundColor: "rgba(0,0,0,.1)",
  },
});
