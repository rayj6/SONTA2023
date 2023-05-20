import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    continueContainer: {
        marginTop: WIDTH / 10,

        width: WIDTH,
        height: HEIGHT / 1.2,
    },

    continueTitleContainer: {
        position: "relative",

        marginTop: WIDTH / 20,
        paddingLeft: WIDTH / 20,
        paddingRight: WIDTH / 20,
        width: WIDTH,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    continueTitle: {
        fontSize: WIDTH / 15,
        fontWeight: "500",
    },

    continueList: {
        width: WIDTH,
        height: "80%",
    },

    continueFlatList: {
        alignItems: "center",
    },

    continueItem: {
        width: WIDTH / 1.1,
        height: WIDTH / 2.4,

        marginTop: "5%",
        overflow: "hidden",

        borderWidth: 1,
        borderRadius: WIDTH / 40,
    },

    topPart: {
        width: "100%",
        height: "60%",

        flexDirection: "row",
        justifyContent: "space-between",
    },

    continueLogoContainer: {
        width: WIDTH / 4,
        height: WIDTH / 4,

        marginTop: WIDTH / 40,
        marginLeft: WIDTH / 40,

        justifyContent: "center",
        alignItems: "center",

        overflow: "hidden",

        borderRadius: WIDTH / 40,

        backgroundColor: "#ccc",
    },

    continueTitlePart: {
        width: "60%",
        height: "100%",

        marginTop: WIDTH / 40,
        marginRight: WIDTH / 40,

        overflow: "hidden",
        justifyContent: "space-around",
    },

    continueCourseName: {
        fontSize: WIDTH / 25,
        fontWeight: "600",
        width: "100%",
        height: "30%",
        overflow: "hidden",
    },

    continueProperties: {
        fontSize: WIDTH / 30,
        fontWeight: "300",
    },

    bottomPart: {
        width: "100%",
        height: "38%",

        position: "absolute",
        bottom: 0,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",

        paddingLeft: WIDTH / 40,
        paddingRight: WIDTH / 40,
        paddingBottom: WIDTH / 40,

        // backgroundColor: "#ccc",
    },

    Teacher: {
        fontSize: WIDTH / 30,
    },

    continueBtn: {
        width: WIDTH / 4,
        height: WIDTH / 15,

        justifyContent: "center",
        alignItems: "center",

        borderRadius: WIDTH / 50,
        backgroundColor: "#42C2FF",
    },

    continueBtnTxt: {
        fontSize: WIDTH / 30,
        fontWeight: "600",
        letterSpacing: 1,
    },
});

export default styles;
