import * as React from "react";
import {WordDetector} from "../../Modules/WordDetector";
import {Image, Text, Dimensions, View} from "react-native";

const wordDetector = new WordDetector();
import Decor from "../../../src/Assets/Images/Pages/Page1/Decor/Page01_DecorJeuMoine.png";

const {height, width} = Dimensions.get('window');

export class Page1 extends React.Component {

    constructor() {
        super();
        wordDetector.setWordList([
            "Lotis",
            "Oriflant"
        ]);
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: "row",
                width: width,
                height: height
            }}>
                <Image
                    source={Decor}
                    style={{
                        width: width,
                        height: height,
                        alignSelf: "flex-end",
                    }}
                    resizeMode={"contain"}
                    resizeMethod={"scale"}
                />

                

            </View>
        )
    }
}