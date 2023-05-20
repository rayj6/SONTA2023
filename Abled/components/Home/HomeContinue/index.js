import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const continue_data = [
    {
        id: 1,
        courseName: "Ngôn ngữ lập trình Javascript",
        done: "10",
        lesson: "42",
        evalute: "Tốt",
        Teacher: "Ray Johnson",
        logo: require("../../../assets/code3.png"),
    },
    {
        id: 2,
        courseName: "Ngôn ngữ lập trình Javascript",
        done: "10",
        lesson: "42",
        evalute: "Tốt",
        Teacher: "Ray Johnson",
        logo: require("../../../assets/code3.png"),
    },
    {
        id: 3,
        courseName: "Ngôn ngữ lập trình Javascript",
        done: "10",
        lesson: "42",
        evalute: "Tốt",
        Teacher: "Ray Johnson",
        logo: require("../../../assets/code3.png"),
    },
];

function renderContinueItem({ item, index }) {
    return (
        <TouchableOpacity style={styles.continueItem}>
            <View style={styles.topPart}>
                <View style={styles.continueLogoContainer}>
                    <Image style={{ width: "100%", height: "100%" }} resizeMode="contain" source={item.logo} />
                </View>
                <View style={styles.continueTitlePart}>
                    <Text style={styles.continueCourseName}>{item.courseName}</Text>
                    <Text style={styles.continueProperties}>
                        Đã hoàn thành : {item.done} / {item.lesson}
                    </Text>
                    <Text style={styles.continueProperties}>Đánh giá : {item.evalute}</Text>
                </View>
            </View>

            <View style={styles.bottomPart}>
                <Text style={styles.Teacher}>{item.Teacher}</Text>
                <TouchableOpacity style={styles.continueBtn}>
                    <Text style={styles.continueBtnTxt}>TIẾP TỤC</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

export default function HomeContinue() {
    return (
        <View style={styles.continueContainer}>
            <View style={styles.continueTitleContainer}>
                <Text style={styles.continueTitle}>ĐANG THAM GIA</Text>
                <TouchableOpacity>
                    <Text style={styles.seeMore}>Xem thêm</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.continueList}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={continue_data}
                    scrollEnabled={false}
                    renderItem={renderContinueItem}
                    contentContainerStyle={styles.continueFlatList}
                />
            </View>
        </View>
    );
}
