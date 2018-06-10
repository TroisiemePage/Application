import React from "react";
import {Dimensions, Image, ScrollView, Text, View, Animated, Easing} from "react-native";

const {height, width} = Dimensions.get('window');

import fil1 from "../../Assets/Images/Pages/Page0/fil1.png";
import fil2 from "../../Assets/Images/Pages/Page0/fil2.png";
import ipad from "../../Assets/Images/Pages/Page0/ipad.png";
import livre from "../../Assets/Images/Pages/Page0/livre.png";
export class Page0 extends React.Component {

    state = {
        animation: new Animated.Value(0)
    };

    componentWillMount() {
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.state.animation, {
                    toValue: 1,
                    duration: 1000,
                    delay: 0,
                    easing: Easing.bezier(0,.53,.47,1),
                }),
                Animated.timing(this.state.animation, {
                    toValue: 0,
                    duration: 1000,
                    delay: 0,
                    easing: Easing.bezier(0,.53,.47,1),
                })
            ])
        ).start();

    }

    render() {
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                bounces={false}
                style={{
                    backgroundColor: "#064D76",
                    width: width,
                    height: height,
                }}>

                <View style={{
                    width: width,
                    height: height,
                    flex: 1,
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <Text style={{
                        fontSize: 60,
                        fontFamily: "AGaramondPro-Bold",
                        color: "white",
                        textAlign: "center",
                        marginTop: 50
                    }}>{"Oyez Oyez !".toUpperCase()}</Text>
                    <Image
                        source={fil1}
                        resizeMode={"contain"}
                        style={{
                            height: 25,
                            width: "100%",
                        }}/>
                    <Text
                    style={{
                        fontSize: 25,
                        fontFamily: "AGaramondPro-Regular",
                        color: "white",
                        textAlign: "center",
                        marginTop: 50
                    }}>
                        {"Avant toute chose, vérifie que ta tablette est bien placée en face du livre.\n" +
                        "Place ton iPad de façon à ce que la carotte se trouve en face du cheval !"}
                    </Text>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            marginTop: 30
                        }}>
                        <Animated.Image
                            source={livre}
                            resizeMode={"contain"}
                            style={{
                                height: 50,
                                width: 150,
                                marginRight: this.state.animation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -30]
                                })
                            }}
                        />
                        <Animated.Image
                            source={ipad}
                            resizeMode={"contain"}
                            style={{
                                height: 50,
                                width: 150,
                                marginLeft: this.state.animation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -30]
                                })
                            }}
                        />
                    </View>
                    <Image
                        source={fil2}
                        resizeMode={"contain"}
                        style={{
                            height: 25,
                            width: "100%",
                        }}/>

                </View>

                <View style={{
                    width: width,
                    height: height
                }}>

                </View>

                <View style={{
                    width: width,
                    height: height
                }}>

                </View>

            </ScrollView>
        );
    }
}

Page0.navigationOptions = {
    header: null
};