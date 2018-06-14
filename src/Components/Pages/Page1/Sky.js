import React from "react";
import {Dimensions, Image, View, Animated} from "react-native";

const {height, width} = Dimensions.get('window');
import nuage1 from "../../../Assets/Images/Pages/Page1/NUAGE_01.png";
import nuage2 from "../../../Assets/Images/Pages/Page1/NUAGE_02.png";
import nuage3 from "../../../Assets/Images/Pages/Page1/NUAGE_03.png";
import nuage4 from "../../../Assets/Images/Pages/Page1/NUAGE_04.png";
import nuage5 from "../../../Assets/Images/Pages/Page1/NUAGE_05.png";

export class Sky extends React.Component {

    state = {
        nuage1: new Animated.Value(0.3),
        nuage2: new Animated.Value(0.6),
        nuage3: new Animated.Value(0.9),
        nuage4: new Animated.Value(0),
        nuage5: new Animated.Value(0.1)
    };

    duration = 70000;

    componentDidMount() {

        Animated.loop(
            Animated.parallel([
                Animated.sequence([
                    Animated.timing(this.state.nuage1, {
                        toValue: 1,
                        duration: this.duration,
                        useNativeDriver: true
                    }),
                    Animated.timing(this.state.nuage1, {
                        toValue: 0,
                        duration: 0,
                        useNativeDriver: true
                    })
                ]),
                Animated.sequence([
                    Animated.timing(this.state.nuage2, {
                        toValue: 1,
                        duration: this.duration,
                        useNativeDriver: true
                    }),
                    Animated.timing(this.state.nuage2, {
                        toValue: 0,
                        duration: 0,
                        useNativeDriver: true
                    })
                ]),
                Animated.sequence([
                    Animated.timing(this.state.nuage3, {
                        toValue: 1,
                        duration: this.duration,
                        useNativeDriver: true
                    }),
                    Animated.timing(this.state.nuage3, {
                        toValue: 0,
                        duration: 0,
                        useNativeDriver: true
                    })
                ]),
                Animated.sequence([
                    Animated.timing(this.state.nuage4, {
                        toValue: 1,
                        duration: this.duration,
                        useNativeDriver: true
                    }),
                    Animated.timing(this.state.nuage4, {
                        toValue: 0,
                        duration: 0,
                        useNativeDriver: true
                    })
                ]),
                Animated.sequence([
                    Animated.timing(this.state.nuage5, {
                        toValue: 1,
                        duration: this.duration,
                        useNativeDriver: true
                    }),
                    Animated.timing(this.state.nuage5, {
                        toValue: 0,
                        duration: 0,
                        useNativeDriver: true
                    })
                ])
            ])
        ).start();
    }

    render() {
        return (
            <View style={{
                width: width,
                height: height / 2
            }}>
                <Animated.Image
                    style={{
                        height: 80,
                        width: 500,
                        position: "absolute",
                        top: 50,
                        transform: [{
                            translateX: this.state.nuage1.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, height + 1000]
                            })
                        }],
                        left: -500
                    }}

                    resizeMode={"contain"}
                    source={nuage1}/>
                <Animated.Image
                    style={{
                        height: 100,
                        width: 500,
                        position: "absolute",
                        top: 100,
                        transform: [{
                            translateX: this.state.nuage2.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, height + 500]
                            })
                        }],
                        left: -500
                    }}

                    resizeMode={"contain"}
                    source={nuage2}/>
                <Animated.Image
                    style={{
                        height: 100,
                        width: 500,
                        position: "absolute",
                        top: 30,
                        transform: [{
                            translateX: this.state.nuage3.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, height + 500]
                            })
                        }],
                        left: -500
                    }}
                    resizeMode={"contain"}
                    source={nuage3}/>
                <Animated.Image
                    style={{
                        height: 100,
                        width: 500,
                        position: "absolute",
                        top: 140,
                        transform: [{
                            translateX: this.state.nuage4.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, height + 500]
                            })
                        }],
                        left: -500
                    }}
                    resizeMode={"contain"}
                    source={nuage4}/>
                <Animated.Image
                    style={{
                        height: 100,
                        width: 500,
                        position: "absolute",
                        top: 20,
                        transform: [{
                            translateX: this.state.nuage4.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, height + 500]
                            })
                        }],
                        left: -500
                    }}
                    resizeMode={"contain"}
                    source={nuage5}/>
            </View>
        );
    }
}