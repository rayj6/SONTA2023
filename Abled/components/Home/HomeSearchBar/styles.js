import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    searchBarContainer: {
        position: "relative",
        marginTop: WIDTH / 30,

        width: WIDTH,
        height: WIDTH / 6,

        justifyContent: "center",
        alignItems: "center",
    },

    searchBar: {
        width: "90%",
        height: "60%",

        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",

        borderWidth: 1,
        borderRadius: WIDTH / 40,
    },

    searchLogo: {
        width: "10%",
        height: "60%",
    },

    searchInput: {
        marginLeft: "2%",

        width: "80%",
        height: "100%",

        letterSpacing: 1,

        fontSize: WIDTH / 25,
    },
});

export default styles;
