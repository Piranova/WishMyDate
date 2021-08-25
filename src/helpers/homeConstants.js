import tailwind from "tailwind-rn";
import {StyleSheet} from "react-native";

/******************Common Styling constants for Home screen***********************************/

export const SplashMainImage = tailwind(`w-full h-2/4 absolute rounded-full`);
export const homeViews = tailwind(`w-full absolute top-0`);                      
export const logoView = tailwind(`w-20 h-20 rounded-full bg-purple-50 mt-2`);                      
export const logoViewOfFullProfile = tailwind(`absolute top-7 left-7 flex items-center justify-center bg-white`);                      
export const homeLogo = tailwind(`w-12 h-9`);

export const kiss = tailwind(`flex flex-row`)
export const kissDateView = tailwind(`w-full -mt-2`);
export const kissDateImg = tailwind(`w-full h-60 relative`);
export const kissDateText = tailwind(`text-white font-bold absolute left-8 top-2/4 text-base leading-5 w-28`);

export const dotCommonStyle = tailwind(`text-gray-600 text-opacity-25 mr-1.5`);
export const descriptionsHeading = tailwind(`text-base font-bold text-purple-900`);

export const descriptionsText = tailwind(`text-sm mt-1 mb-2 leading-5`);
export const existingUserView = tailwind(`w-full absolute flex flex-wrap flex-row items-center justify-evenly overflow-scroll`);

export const existingUserImg = tailwind(`relative w-44 h-60 mb-5 rounded-2xl`);
export const existingUserImgOverlay = tailwind(`absolute w-44 h-60 mb-5 rounded-2xl`);

export const existingMemberNameText = tailwind(`font-bold text-white text-base`);
export const existingMemberName = tailwind(`font-bold text-white text-xs mt-1`);

export const sliderDotView = tailwind(`relative flex flex-row -top-14`);


export const styles = StyleSheet.create({
  dotTextFonts: {
    fontSize: 50
  },
  kissDateImgOverlay: {
    height: "11.1rem",
    width: "24.7rem",
    position: "absolute",
    top: "8%",
    right: 0,
    borderRadius: 15,
  },
  descriptionsView: {
    position: "absolute",
    top: "100%",
    width: "89%",
    marginTop:".5rem"
  },
  existingMemberNameView: {
    position: "absolute",
    top: "72%",
    left:"9%",
    zIndex:1,
  },
  footer: {
    resizeMode: "cover",
  },

});
