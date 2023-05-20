import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    navBarContainer: {
        position: "absolute",
        bottom: 30,

        width: WIDTH / 1.05,
        height: WIDTH / 8,

        backgroundColor: "#fff",

        borderRadius: WIDTH / 20,

        elevation: 8,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 50,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },

    navBarBtn: {
        width: "23%",
        height: "80%",

        justifyContent: "center",
        alignItems: "center",
    },
});
export default styles;
