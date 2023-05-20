import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    functionContainer: {
        position: "relative",

        width: WIDTH,
        height: WIDTH / 2.5,

        // backgroundColor: "#ccc",
    },

    row: {
        paddingLeft: WIDTH / 20,
        paddingRight: WIDTH / 20,
        width: "100%",
        height: "50%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    favourite: {
        width: "46%",
        height: "70%",

        borderRadius: WIDTH / 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        backgroundColor: "#FF939A",
    },

    favouriteLogoContainer: {
        position: "relative",

        width: "30%",
        height: "80%",

        justifyContent: "center",
        alignItems: "center",

        marginLeft: "5%",
        borderRadius: WIDTH / 40,
        backgroundColor: "#FFFFFF87",
    },

    favouriteLogo: {
        width: "70%",
        height: "70%",
    },

    favouriteTitle: {
        marginRight: "5%",

        width: "60%",
        textAlign: "center",

        fontSize: WIDTH / 28,
        fontWeight: "600",
    },

    achivement: {
        width: "46%",
        height: "70%",

        borderRadius: WIDTH / 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        backgroundColor: "#FED843A6",
    },

    achivementLogoContainer: {
        position: "relative",

        width: "30%",
        height: "80%",

        justifyContent: "center",
        alignItems: "center",

        marginLeft: "5%",
        borderRadius: WIDTH / 40,
        backgroundColor: "#FFFFFF87",
    },

    achivementLogo: {
        width: "70%",
        height: "70%",
    },

    achivementTitle: {
        marginRight: "5%",

        width: "60%",
        textAlign: "center",

        fontSize: WIDTH / 28,
        fontWeight: "600",
    },

    leaderboard: {
        width: "46%",
        height: "70%",

        borderRadius: WIDTH / 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        backgroundColor: "#43D68580",
    },

    leaderboardLogoContainer: {
        position: "relative",

        width: "30%",
        height: "80%",

        justifyContent: "center",
        alignItems: "center",

        marginLeft: "5%",
        borderRadius: WIDTH / 40,
        backgroundColor: "#FFFFFF87",
    },

    leaderboardLogo: {
        width: "70%",
        height: "70%",
    },

    leaderboardTitle: {
        marginRight: "5%",

        width: "60%",
        textAlign: "center",

        fontSize: WIDTH / 28,
        fontWeight: "600",
    },

    history: {
        width: "46%",
        height: "70%",

        borderRadius: WIDTH / 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        backgroundColor: "#4294FF80",
    },

    historyLogoContainer: {
        width: "30%",
        height: "80%",

        justifyContent: "center",
        alignItems: "center",

        marginLeft: "5%",
        borderRadius: WIDTH / 40,
        backgroundColor: "#FFFFFF87",
    },

    historyLogo: {
        width: "70%",
        height: "70%",
    },

    historyTitle: {
        marginRight: "5%",

        width: "60%",
        textAlign: "center",

        fontSize: WIDTH / 28,
        fontWeight: "600",
    },
});

export default styles;
