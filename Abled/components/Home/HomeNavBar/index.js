import { View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

export default function HomeNavBar() {
    return (
        <View style={styles.navBarContainer}>
            <TouchableOpacity style={styles.navBarBtn}>
                <Image style={{ width: "60%", height: "60%" }} resizeMode="contain" source={require("../../../assets/HomeNavBtn.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBarBtn}>
                <Image style={{ width: "60%", height: "60%" }} resizeMode="contain" source={require("../../../assets/ExploreNavBtn.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBarBtn}>
                <Image style={{ width: "60%", height: "60%" }} resizeMode="contain" source={require("../../../assets/MessageNavBtn.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBarBtn}>
                <Image style={{ width: "60%", height: "60%" }} resizeMode="contain" source={require("../../../assets/ProfileNavBtn.png")} />
            </TouchableOpacity>
        </View>
    );
}
