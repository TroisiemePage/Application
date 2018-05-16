import * as React from "react";
import {WordDetector} from "../../../Modules/WordDetector";
import {Image, Text, Dimensions, View} from "react-native";
const wordDetector = new WordDetector();
import decor from "../../../Assets/Images/Pages/Page1/Decor/Decor_pageMoines.png";
import moines from "../../../Assets/Animations/Pages/compiled/MOINES_loop.png";
import precepteur from "../../../Assets/Animations/Pages/compiled/PRECEPTEUR_loop.png";
import ApngPlayer from "../../ApngPlayer/ApngPlayer";

const {
    height,
    width} = Dimensions.get('window');

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
            <View style={{
                flex: 1,
                flexDirection: "row",
                width: width,
                height: height
            }}>
                <Image
                    source={decor}
                    style={{
                        width: width,
                        height: height,
                        alignSelf: "flex-end",
                    }}
                    resizeMode={"contain"}
                    resizeMethod={"scale"}
                />
                <ApngPlayer ref={"moines"}
                            style={{
                                position: "absolute",
                                bottom: 30,
                                right: 50
                            }}
                            scale={0.45}
                            playlist={[moines]}
                />
                <Text style={{
                    fontFamily: "ClairvauxLTStd",
                    position: "absolute",
                    top: 20,
                    bottom: 20,
                    right: 20,
                    left: 20,
                    margin: "auto",
                    fontSize: 500
                }}>b</Text>
                <ApngPlayer ref={"precepteur"}
                            style={{
                                position: "absolute",
                                bottom: 140,
                                left: 110
                            }}
                            scale={0.5}
                            playlist={[precepteur]}
                />
            </View>
        )
    }
}