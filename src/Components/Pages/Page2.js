import * as React from "react";
import {Dimensions, Image, Text, View} from "react-native";
import Decor from "../../Assets/Images/Pages/Page2/illuTemp.png";
const {height, width} = Dimensions.get('window');
export class Page2 extends React.Component {
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