import { StatusBar } from "react-native";
import Home from "./MainScreen/Home/index.js";

export default function App() {
    return (
        <>
            <StatusBar hidden={true} />
            <Home />
        </>
    );
}
