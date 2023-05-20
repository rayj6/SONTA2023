import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    popularContainer: {
        marginTop: WIDTH / 20,

        width: WIDTH,
        height: WIDTH / 2,
    },

    popularTitleContainer: {
        paddingLeft: WIDTH / 20,
        paddingRight: WIDTH / 20,
        width: WIDTH,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    popularTitle: {
        fontSize: WIDTH / 15,
        fontWeight: "500",
    },

    seeMore: {
        fontSize: WIDTH / 30,
        fontWeight: "300",
        color: "#006D31",
    },

    popularCoursesContainer: {
        marginTop: "5%",
        width: WIDTH,
        height: "80%",
    },

    itemContainer: {
        width: WIDTH / 1.5,
        height: "100%",

        marginRight: WIDTH / 20,

        padding: WIDTH / 30,

        borderWidth: 1,
        borderRadius: WIDTH / 40,
    },

    popularFlatList: {
        paddingLeft: WIDTH / 20,
    },

    itemLogo: {
        width: "80%",
        height: "100%",
    },

    rate: {
        marginLeft: "10%",
        fontSize: WIDTH / 30,
        fontWeight: "500",
    },

    courseName: {
        marginTop: "8%",
        width: "95%",
        fontSize: WIDTH / 25,
        fontWeight: "500",
    },

    lessonAndLevelContainer: {
        position: "relative",

        marginTop: "1%",
        width: "100%",
        flexDirection: "row",
    },

    lesson: {
        fontSize: WIDTH / 30,
    },

    decorPart: {
        fontSize: WIDTH / 30,
        marginLeft: "5%",
    },

    rank: {
        marginLeft: "5%",
        fontSize: WIDTH / 30,
    },
});

export default styles;
