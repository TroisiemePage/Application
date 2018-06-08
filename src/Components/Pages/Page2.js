import * as React from "react";
import {Dimensions, Image, Text, View, TouchableOpacity, Animated, Easing} from "react-native";
import Decor from "../../Assets/Images/Pages/Page2/decor.png";
import Roue1 from "../../Assets/Images/Pages/Page2/roue1.png";
import Roue2 from "../../Assets/Images/Pages/Page2/roue2.png";
import Roue3 from "../../Assets/Images/Pages/Page2/roue3.png";
import Roue4 from "../../Assets/Images/Pages/Page2/roue4.png";
import Roue5 from "../../Assets/Images/Pages/Page2/roues5.png";
import Levier from "../../Assets/Images/Pages/Page2/levier.png";
import Pots from "../../Assets/Images/Pages/Page2/pots.png";
import Vache1 from "../../Assets/Images/Pages/Page2/vache1.png";
import Vache2 from "../../Assets/Images/Pages/Page2/vache2.png";
import Bouteille3 from "../../Assets/Images/Pages/Page2/bouteille3.png";
import Bouteilles4 from "../../Assets/Images/Pages/Page2/bouteilles4.png";
import Bouteille5 from "../../Assets/Images/Pages/Page2/bouteille5.png";
import Bouteille6 from "../../Assets/Images/Pages/Page2/bouteille6.png";
import Bouteille7 from "../../Assets/Images/Pages/Page2/bouteille7.png";
import Bouteille8 from "../../Assets/Images/Pages/Page2/bouteille8.png";
import Bouteilles9 from "../../Assets/Images/Pages/Page2/bouteilles9.png";
import Bouteille10 from "../../Assets/Images/Pages/Page2/bouteille10.png";
import Passerelle from "../../Assets/Images/Pages/Page2/passerelle.png";
import Meuble from "../../Assets/Images/Pages/Page2/meuble.png";
import Tuyeaux from "../../Assets/Images/Pages/Page2/tuyeaux.png";

import {Page1} from "./Page1/Page1";
import {Overlay} from "../PageRouter/PageRouter";

const {height, width} = Dimensions.get('window');
const styles = {
    container: {
        flex: 1,
        flexDirection: "row",
        width: width,
        height: height
    },
    image: {
        width: width,
        height: height,
        alignSelf: "flex-end",
        position: 'absolute',
    }
};

export class Page2 extends React.Component {

    state = {
        moveLevier: new Animated.Value(0),
        moveVAches: new Animated.Value(0),
        moveBottles: new Animated.Value(0)
    };

    levierAnimation() {
        Animated.sequence([
            Animated.timing(this.state.moveLevier, {
                toValue: 1,
                duration: 1000,
                delay: 0,
                easing: Easing.bezier(0,.53,.47,1),
            }),
            Animated.timing(this.state.moveLevier, {
                toValue: 0,
                duration: 1000,
                delay: 0,
                easing: Easing.bezier(0,.53,.47,1),
            })
        ]).start();
    }

    vachesAnimation() {
        Animated.sequence([
            Animated.timing(this.state.moveVAches, {
                toValue: 1,
                duration: 3000,
                delay: 0,
                easing: Easing.bezier(.57,.31,.29,.93),
            }),
            Animated.timing(this.state.moveVAches, {
                toValue: 0,
                duration: 3000,
                delay: 0,
                easing: Easing.bezier(.57,.31,.29,.93),
            })
        ]).start();
    }

    bottlesAnimation() {
        Animated.sequence([
            Animated.timing(this.state.moveBottles, {
                toValue: 1,
                duration: 3000,
                delay: 0,
                easing: Easing.bezier(.57,.31,.29,.93),
            }),
            Animated.timing(this.state.moveBottles, {
                toValue: 0,
                duration: 3000,
                delay: 0,
                easing: Easing.bezier(.57,.31,.29,.93),
            })
        ]).start();
    }

    render() {
        return (
            <Overlay {...this.props}>
                <View style={styles.container}>
                    <Image
                        source={Decor}
                        style={styles.image}
                        resizeMode={"contain"}
                        resizeMethod={"scale"}
                    />

                    <Animated.Image
                        source={Pots}
                        style={{
                            width: 1074,
                            height: 347,
                            position: 'absolute',
                            left: this.state.moveLevier.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-508 , -600],
                            }),
                            top: 329,
                        }}
                    />

                    <TouchableOpacity
                        onPress={() => console.log("pressed on vache 1")}
                    >
                        <Animated.Image
                            source={Vache1}
                            style={{
                                width: 178,
                                height: 178,
                                position: 'absolute',
                                left: this.state.moveVAches.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [460, 0],
                                }),
                                top: this.state.moveVAches.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [92 , 88],
                                }),
                                transform: [{
                                    rotate: this.state.moveVAches.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["5deg" , "-5deg"],
                                    }),
                                }],
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("pressed on vache 2")}
                    >
                        <Animated.Image
                            source={Vache2}
                            style={{
                                width: 177,
                                height: 173,
                                position: 'absolute',
                                left: this.state.moveVAches.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [246, -200],
                                }),
                                top: this.state.moveVAches.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [92 , 94],
                                }),
                                transform: [{
                                    rotate: this.state.moveVAches.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["3deg" , "-3deg"],
                                    }),
                                }],
                            }}
                        />
                    </TouchableOpacity>

                    <Image
                        source={Tuyeaux}
                        style={{
                            width: 782,
                            height:  358,
                            position: 'absolute',
                            left: -560,
                            top: -40,
                            zIndex: 0
                        }}
                    />

                    <Animated.Image
                        source={Roue4}
                        style={{
                            width: 87,
                            height: 93,
                            position: 'absolute',
                            left: 1025,
                            top: 91,
                            transform: [{
                                rotate: this.state.moveVAches.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["60deg" , "300deg"],
                                }),
                            }],
                        }}
                    />

                    <TouchableOpacity
                        onPress={() => this.vachesAnimation()}
                    >
                        <Animated.Image
                            source={Roue1}
                            style={{
                                width: 170,
                                height: 154,
                                position: 'absolute',
                                left: 934,
                                top: 275,
                                transform: [{
                                    rotate: this.state.moveVAches.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0deg" , "360deg"],
                                    }),
                                }],
                            }}
                        />
                    </TouchableOpacity>

                    <Animated.Image
                        source={Roue2}
                        style={{
                            width: 114,
                            height: 115,
                            position: 'absolute',
                            left: 1000,
                            top: 180,
                            transform: [{
                                rotate: this.state.moveVAches.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg" , "360deg"],
                                }),
                            }],
                        }}
                    />

                    <Animated.Image
                        source={Roue3}
                        style={{
                            width: 143,
                            height: 140,
                            position: 'absolute',
                            left: 887,
                            top: 97,
                            transform: [{
                                rotate: this.state.moveVAches.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["120deg" , "360deg"],
                                }),
                            }],
                        }}
                    />

                    <Animated.Image
                        source={Roue5}
                        style={{
                            width: 63,
                            height: 60,
                            position: 'absolute',
                            left: 220,
                            top: 36,
                            transform: [{
                                rotate: this.state.moveVAches.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg" , "-360deg"],
                                }),
                            }],
                        }}
                    />

                    <Animated.Image
                        source={Roue5}
                        style={{
                            width: 63,
                            height: 60,
                            position: 'absolute',
                            left: 351,
                            top: 36,
                            transform: [{
                                rotate: this.state.moveVAches.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg" , "-360deg"],
                                }),
                            }],
                        }}
                    />

                    <Animated.Image
                        source={Roue5}
                        style={{
                            width: 63,
                            height: 60,
                            position: 'absolute',
                            left: 491,
                            top: 36,
                            transform: [{
                                rotate: this.state.moveVAches.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg" , "-360deg"],
                                }),
                            }],
                        }}
                    />

                    <Animated.Image
                        source={Roue5}
                        style={{
                            width: 63,
                            height: 60,
                            position: 'absolute',
                            left: 621,
                            top: 36,
                            transform: [{
                                rotate: this.state.moveVAches.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg" , "-360deg"],
                                }),
                            }],
                        }}
                    />

                    <Animated.Image
                        source={Roue5}
                        style={{
                            width: 63,
                            height: 60,
                            position: 'absolute',
                            left: 756,
                            top: 36,
                            transform: [{
                                rotate: this.state.moveVAches.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg" , "-360deg"],
                                }),
                            }],
                        }}
                    />

                    <Animated.Image
                        source={Roue5}
                        style={{
                            width: 63,
                            height: 60,
                            position: 'absolute',
                            left: 887,
                            top: 36,
                            transform: [{
                                rotate: this.state.moveVAches.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg" , "-360deg"],
                                }),
                            }],
                        }}
                    />

                    <Animated.Image
                        source={Roue5}
                        style={{
                            width: 63,
                            height: 60,
                            position: 'absolute',
                            left: 1026,
                            top: 36,
                            transform: [{
                                rotate: this.state.moveVAches.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg" , "-360deg"],
                                }),
                            }],
                        }}
                    />

                    <TouchableOpacity
                        onPress={() => console.log("pressed on bouteille10")}
                        style={{zIndex: 2}}
                    >
                        <Image
                            source={Bouteille10}
                            style={{
                                width: 49,
                                height: 89,
                                position: 'absolute',
                                left: 932,
                                top: 451
                            }}
                        />
                    </TouchableOpacity>

                    <Image
                        source={Bouteilles9}
                        style={{width: 310, height: 393, position: 'absolute', left: 724, top: 409}}
                    />

                    <TouchableOpacity
                        onPress={() => console.log("pressed on bouteille8")}
                        style={{zIndex: 2}}
                    >
                        <Image
                            source={Bouteille8}
                            style={{width: 41, height: 63, position: 'absolute', left: 918, top: 481}}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("pressed on bouteille7")}
                        style={{zIndex: 2}}
                    >
                        <Image
                            source={Bouteille7}
                            style={{width: 31, height: 112, position: 'absolute', left: 1000, top: 689}}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("pressed on bouteille6")}
                        style={{zIndex: 2}}
                    >
                        <Image
                            source={Bouteille6}
                            style={{width: 69, height: 110, position: 'absolute', left: 738, top: 556}}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("pressed on bouteille5")}
                        style={{zIndex: 2}}
                    >
                        <Image
                            source={Bouteille5}
                            style={{width: 40, height: 117, position: 'absolute', left: 817, top: 678}}
                        />
                    </TouchableOpacity>

                    <Image
                        source={Bouteilles4}
                        style={{width: 314, height: 393, position: 'absolute', left: 744, top: 403}}
                    />

                    <TouchableOpacity
                        onPress={() => this.bottlesAnimation()}
                        style={{zIndex: 2}}
                    >
                        <Animated.Image
                            source={Bouteille3}
                            style={{
                                width: 73,
                                height: 105,
                                position: 'absolute',
                                left: 922,
                                top: 682,
                                transform: [{
                                    rotate: this.state.moveVAches.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["3deg" , "-3deg"],
                                    }),
                                }],
                            }}
                        />
                    </TouchableOpacity>

                    <Image
                        source={Passerelle}
                        style={{width: 67, height: 30, position: 'absolute', left: 910, top: 636}}
                    />

                    <Image
                        source={Meuble}
                        style={{width: 476, height: 279, position: 'absolute', left: 601, top: 538}}
                    />


                    <TouchableOpacity
                        onPress={() => this.levierAnimation()}
                    >
                        <Animated.View style={{
                            width: 130,
                            height: 200,
                            left: 565,
                            top: 515,
                            alignItems: "flex-end",
                            transform: [{
                                rotate: this.state.moveLevier.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg" , "-50deg"],
                                }),
                            }],
                        }}>
                            <Image
                                source={Levier}
                                style={{
                                    width: 65,
                                    height: 100,
                                    position: 'absolute',
                                }}
                            />
                        </Animated.View>
                    </TouchableOpacity>


                </View>
            </Overlay>
        )
    }
}
Page2.navigationOptions = {
    header: null
};