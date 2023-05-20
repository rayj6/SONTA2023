import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";

export default function HomeFunction() {
    return (
        <View style={styles.functionContainer}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.favourite}>
                    <View style={styles.favouriteLogoContainer}>
                        <Image style={styles.favouriteLogo} resizeMode="contain" source={require("../../../assets/favourite.png")} />
                    </View>
                    <Text style={styles.favouriteTitle}>Yêu thích</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.achivement}>
                    <View style={styles.achivementLogoContainer}>
                        <Image style={styles.achivementLogo} resizeMode="contain" source={require("../../../assets/achivements.png")} />
                    </View>
                    <Text style={styles.achivementTitle}>Thành tựu</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.leaderboard}>
                    <View style={styles.leaderboardLogoContainer}>
                        <Image style={styles.leaderboardLogo} resizeMode="contain" source={require("../../../assets/leaderboard.png")} />
                    </View>
                    <Text style={styles.leaderboardTitle}>Xếp hạng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.history}>
                    <View style={styles.historyLogoContainer}>
                        <Image style={styles.historyLogo} resizeMode="contain" source={require("../../../assets/history.png")} />
                    </View>
                    <Text style={styles.historyTitle}>Lịch sử</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
