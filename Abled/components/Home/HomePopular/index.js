import { View, Image, TouchableOpacity, FlatList, Text } from "react-native";
import styles from "./styles";

const data = [
    { id: 1, courseName: "Cấu trúc dữ liệu và giải thuật", lesson: "12", rank: "Dễ", rate: "4.5", logo: require("../../../assets/code1.png") },
    { id: 2, courseName: "Ngôn ngữ lập trình python", lesson: "40", rank: "Cơ bản", rate: "5.0", logo: require("../../../assets/code2.png") },
];

function renderPopularItem({ item, index }) {
    return (
        <TouchableOpacity style={styles.itemContainer}>
            <View style={{ width: "100%", height: "60%", flexDirection: "row", justifyContent: "space-between" }}>
                <View style={styles.itemLogo}>
                    <Image style={{ width: "40%", height: "100%" }} resizeMode="contain" source={item.logo} />
                </View>
                <View style={{ width: "20%", height: "30%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ width: "30%", height: "100%" }} resizeMode="contain" source={require("../../../assets/rateStar.png")} />
                    <Text style={styles.rate}>{item.rate}</Text>
                </View>
            </View>
            <Text style={styles.courseName}>{item.courseName}</Text>
            <View style={styles.lessonAndLevelContainer}>
                <Text style={styles.lesson}>{item.lesson} Bài học</Text>
                <Text style={styles.decorPart}>|</Text>
                <Text style={styles.rank}>{item.rank}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default function HomePopular() {
    return (
        <View style={styles.popularContainer}>
            <View style={styles.popularTitleContainer}>
                <Text style={styles.popularTitle}>PHỔ BIẾN</Text>
                <TouchableOpacity>
                    <Text style={styles.seeMore}>Xem thêm</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.popularCoursesContainer}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={data}
                    renderItem={renderPopularItem}
                    contentContainerStyle={styles.popularFlatList}
                />
            </View>
        </View>
    );
}
