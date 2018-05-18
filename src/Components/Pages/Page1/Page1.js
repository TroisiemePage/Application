import * as React from "react";
import {WordDetector} from "../../../Modules/WordDetector";
import {Image, Text, Dimensions, View} from "react-native";
const wordDetector = new WordDetector();
import decor from "../../../Assets/Images/Pages/Page1/Decor_pageMoines.png";
import moines from "../../../Assets/Animations/Pages/compiled/MOINES_loop.png";
import precepteur from "../../../Assets/Animations/Pages/compiled/PRECEPTEUR_loop.png";
import ApngPlayer from "../../ApngPlayer/ApngPlayer";
import {LetterSelector} from "./LetterSelector";

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
                width: width,
                height: height
            }}>
                <Image
                    source={decor}
                    style={{
                        position: "absolute",
                        width: width,
                        height: height,
                        left: 0,
                        top: 0,
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
                <ApngPlayer ref={"precepteur"}
                            style={{
                                position: "absolute",
                                bottom: 140,
                                left: 110
                            }}
                            scale={0.5}
                            playlist={[precepteur]}
                />
                <LetterSelector
                    style={{
                        marginLeft: 280,
                        marginTop: 200
                    }}
                />

            </View>
        )
    }
}