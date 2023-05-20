import { Text, View, TouchableOpacity, Image, ScrollView, StatusBar } from "react-native";
import styles from "./styles";

import HomeSearchBar from "../../components/Home/HomeSearchBar/index";
import HomeFunction from "../../components/Home/HomeFunctions/index";
import HomePopular from "../../components/Home//HomePopular/index";
import HomeContinue from "../../components/Home/HomeContinue/index";
import HomeNavBar from "../../components/Home/HomeNavBar/index";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.body}>
                    <View style={styles.topBarContainer}>
                        <Text style={styles.homeTitle}>ABLED</Text>
                        <TouchableOpacity style={styles.notifications}>
                            <Image style={{ width: "60%", height: "60%" }} resizeMode="contain" source={require("../../assets/notifications.png")} />
                        </TouchableOpacity>
                    </View>

                    <HomeSearchBar />
                    <HomeFunction />
                    <HomePopular />
                    <HomeContinue />
                </View>
            </ScrollView>

            <HomeNavBar />
        </View>
    );
}
