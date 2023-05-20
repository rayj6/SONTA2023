import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#fff",
    },

    body: {
        width: WIDTH,
    },

    bodyContainer: {
        width: WIDTH,
        position: "absolute",
        top: 0,
        left: 0,
    },

    topBarContainer: {
        position: "relative",
        marginTop: WIDTH / 7,
        paddingLeft: WIDTH / 20,
        paddingRight: WIDTH / 20,

        width: WIDTH,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    homeTitle: {
        fontSize: WIDTH / 12,
        fontWeight: "700",
    },

    notifications: {
        width: WIDTH / 10,
        height: WIDTH / 10,

        justifyContent: "center",
        alignItems: "center",

        borderWidth: 1,
        borderRadius: WIDTH / 2,
    },
});

export default styles;
