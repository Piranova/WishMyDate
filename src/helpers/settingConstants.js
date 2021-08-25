import tailwind from "tailwind-rn";
import { StyleSheet } from "react-native";

/******************Setting Screen Styling constants ***********************************/

export const selectViewMain = tailwind(`w-full absolute top-20`);
export const selectMemberPreferenceViewTwo = tailwind(`w-full absolute`);
export const headerSelectView = tailwind(`w-full h-16 absolute top-0 flex-row items-center`);

export const selectMemberPreferenceView = tailwind(`absolute w-full `);
export const selectMemberText = tailwind(`text-xl mb-2 mt-2 ml-4`);
export const headerText = tailwind(`text-xl ml-5 tracking-wide text-gray-700 `);
export const selectMemberTextRed = tailwind(`text-xs font-bold mb-2 mt-2.5 ml-5 tracking-wide text-pink-700 font-bold`);

export const selectMemberTextView = tailwind(`absolute bottom-48 flex flex-row justify-between items-center`);

export const selectView = tailwind(`mb-4 h-16 w-96 flex flex-row justify-between items-center border-2 border-gray-300 bg-gray-50`);

export const selectText = tailwind(`text-base ml-6`);


export const styles = StyleSheet.create({
    headerSelectView: {
        borderBottomColor: "#a1a8b0",
        borderBottomWidth: 1,
    },
    arrowLeft: {
        height: ".8rem",
        width: ".5rem",
        marginLeft: "1.2rem",
    },
    selectArrow: {
        height: ".6rem",
        width: "1rem",
        marginRight: "1.5rem",
    },
    pickerInput: {
        height: "3.90rem",
        width: "90%",
        border: "none",
        backgroundColor: "transparent",
        zIndex: 1,
        fontSize: "1rem",
        marginTop: "1.3rem",
    },
    selectViewBox:{
        padding: ".2px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    selectText2:{
        position: "absolute",
        left: 0,
        marginTop: ".3rem",
        color: "#a59bbc",
      },
})
