import { View, Text, TextInput, Image } from "react-native";
import styles from "./styles";

export default function HomeSearchBar() {
    return (
        <View style={styles.searchBarContainer}>
            <View style={styles.searchBar}>
                <Image style={styles.searchLogo} resizeMode="contain" source={require("../../../assets/search.png")} />
                <TextInput style={styles.searchInput} placeholder="Tìm kiếm" />
                <Image style={styles.searchLogo} resizeMode="contain" source={require("../../../assets/microphone.png")} />
            </View>
        </View>
    );
}
