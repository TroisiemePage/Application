import * as React from "react";
import {WordDetector} from "../../Modules/WordDetector";
import {Image, Text, Dimensions, View} from "react-native";
const wordDetector = new WordDetector();
import decor from "../../../src/Assets/Images/Pages/Page1/Decor/Page01_DecorJeuMoine.png";
import moines from "../../../src/Assets/Animations/Pages/compiled/PAGE-05-MOINES.png";
import precepteur from "../../../src/Assets/Animations/Pages/compiled/PAGE-05-PRECEPTEUR.png";
import ApngPlayer from "../ApngPlayer/ApngPlayer";

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        width: width,
        height: height
    },
    image: {
        width: width,
        height: height,
        alignSelf: "flex-end"
    }
})

export class Page1 extends React.Component {
    constructor() {
        super();
        wordDetector.setWordList([
            "Lotis",
            "Oriflant"
        ]);
        this.state = {
            duration: 0,
            imageNumber: 0,
            animated: true
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={decor}
                    style={styles.image}
                    resizeMode={"contain"}
                    resizeMethod={"scale"}
                />
                <ApngPlayer
                    ref={"moines"}
                    style={{
                        position: "absolute",
                        bottom: 30,
                        right: 15
                    }}
                    scale={0.5}
                    source={moines}
                />
                <ApngPlayer
                    ref={"moines"}
                    style={{
                        position: "absolute",
                        bottom: 140,
                        left: 190
                    }}
                    scale={0.5}
                    source={precepteur}
                />
            </View>
        )
    }
}