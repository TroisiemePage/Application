import * as React from "react";
import {Dimensions, Image, View, TouchableOpacity, TouchableWithoutFeedback, Animated, Easing} from "react-native";

import Decor from "../../Assets/Images/Pages/Page2/decor.png";
import Lait from "../../Assets/Animations/Pages/compiled/LAIT.png";
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

import {Overlay} from "../PageRouter/PageRouter";
import ApngPlayer from "../ApngPlayer/ApngPlayer";
import Sound from 'react-native-sound';
import {words} from "../../Stores/words";

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
        moveRoues: new Animated.Value(0),
        moveVaches: new Animated.Value(0),
        vache1Cliqued: false,
        vache2Cliqued: false,
        vache3Cliqued: false,
        moveBottles: new Array(6).fill("").map(() => new Animated.Value(0)),
    };

    glass1 = new Sound('Sound/GLASS_01.mp3', Sound.MAIN_BUNDLE);
    glass2 = new Sound('Sound/GLASS_02.mp3', Sound.MAIN_BUNDLE);
    glass3 = new Sound('Sound/GLASS_03.mp3', Sound.MAIN_BUNDLE);
    glass4 = new Sound('Sound/GLASS_04.mp3', Sound.MAIN_BUNDLE);
    glass5 = new Sound('Sound/GLASS_05.mp3', Sound.MAIN_BUNDLE);
    glass6 = new Sound('Sound/GLASS_06.mp3', Sound.MAIN_BUNDLE);
    levier = new Sound('Sound/LEVIER.mp3', Sound.MAIN_BUNDLE);
    tapisRoulant = new Sound('Sound/TAPIS_ROULANT.mp3', Sound.MAIN_BUNDLE);
    rouesQuiTournent = new Sound('Sound/ROUE_QUI_TOURNE.mp3', Sound.MAIN_BUNDLE);
    fondSonoreVaches = new Sound('Sound/FOND_SONORE_MACHINE_VACHE.mp3', Sound.MAIN_BUNDLE);
    laitVache1 = new Sound('Sound/LAIT_VACHE.mp3', Sound.MAIN_BUNDLE);
    laitVache2 = new Sound('Sound/LAIT_VACHE_2.mp3', Sound.MAIN_BUNDLE);

    componentDidMount() {
        this.fondSonoreVaches.play();
    }

    levierAnimation() {
        this.levier.play();
        this.tapisRoulant.play();
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

    rouesAnimation() {
        this.rouesQuiTournent.play();
        Animated.sequence([
            Animated.timing(this.state.moveRoues, {
                toValue: 1,
                duration: 3000,
                delay: 0,
                easing: Easing.bezier(.57,.31,.29,.93),
            }),
            Animated.timing(this.state.moveRoues, {
                toValue: 0,
                duration: 0,
                delay: 0,
                easing: Easing.bezier(.57,.31,.29,.93),
            })
        ]).start();
    }

    vachesAnimation() {
        Animated.sequence([
            Animated.timing(this.state.moveVaches, {
                toValue: 1,
                duration: 3000,
                delay: 0,
                easing: Easing.bezier(.57,.31,.29,.93),
            }),
            Animated.timing(this.state.moveVaches, {
                toValue: 0,
                duration: 3000,
                delay: 0,
                easing: Easing.bezier(.57,.31,.29,.93),
            })
        ]).start();
    }

    animatedBottlesArray = [];
    animatedBottlesArray = this.state.moveBottles.map((animationValue) => {
        return (
            Animated.timing(animationValue, {
                toValue: 1,
                duration: 290,
                delay: 0,
                easing: Easing.inOut(Easing.cubic)
            })/*,
            Animated.timing(animationValue, {
                toValue: 0,
                duration: 290,
                delay: 0,
                easing: Easing.inOut(Easing.cubic)
            })*/
        );
    });

    bottlesAnimation() {
        Animated.sequence(this.animatedBottlesArray).start();
    }

    render() {
        let laitVache1, laitVache2;

        if (this.state.vache1Cliqued) {
            laitVache1 = (
                <Animated.View
                    style={{
                        position: "absolute",
                        width: 100,
                        height: height / 1.7,
                        top: 188,
                        left: 500,
                    }}
                >
                    <ApngPlayer
                        ref={"lait"}
                        scale={0.45}
                        maxFrameSize={ height / 1.7}
                        playlist={[Lait]}
                        onPress={() => console.log("pressed on lait")}
                        onPlaylistItemFinish={(playlistIndex) => {
                            this.setState({ vache1Cliqued : false})
                        }}
                    />
                </Animated.View>
            );
        }

        if (this.state.vache2Cliqued) {
            laitVache2 = (
                <Animated.View
                    style={{
                        position: "absolute",
                        top: 170,
                        width: 100,
                        height: height / 1.7,
                        left: 290,
                    }}
                >
                    <ApngPlayer
                        ref={"lait"}
                        scale={0.45}
                        maxFrameSize={ height / 1.7}
                        playlist={[Lait]}
                        onPlaylistItemFinish={(playlistIndex) => {
                            this.setState({ vache2Cliqued : false})
                        }}
                    />
                </Animated.View>
            );
        }

        return (
            <Overlay {...this.props} wordList={words}>
                <View style={styles.container}>
                    <Image
                        source={Decor}
                        style={styles.image}
                        resizeMode={"contain"}
                        resizeMethod={"scale"}
                    />

                    <Animated.View
                        style={{
                            width: 178,
                            height: 178,
                            position: 'absolute',
                            left: this.state.moveVaches.interpolate({
                                inputRange: [-300, -100, 0, 100, 101],
                                outputRange: [300, 0, 1, 0, 0],
                                /*inputRange: [0, 1],
                                outputRange: [-34, -126],*/
                            }),
                        }}
                    >
                        <TouchableWithoutFeedback
                            onPress={() => {
                                    this.setState({ vache1Cliqued: true });
                                    this.vachesAnimation(),
                                    this.laitVache1.play();
                                }
                            }
                        >
                            <Animated.Image
                                source={Vache1}
                                style={{
                                    width: 178,
                                    height: 178,
                                    position: 'absolute',
                                    left: this.state.moveRoues.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [460, -100],
                                    }),
                                    top: this.state.moveRoues.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [92 , 88],
                                    }),
                                    transform: [{
                                        rotate: this.state.moveRoues.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ["5deg" , "-5deg"],
                                        }),
                                    }],
                                }}
                            />
                        </TouchableWithoutFeedback>
                        {laitVache1}
                    </Animated.View>

                    <Animated.View
                        style={{
                            width: 178,
                            height: 178,
                            position: 'absolute',
                            left: this.state.moveVaches.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-20, -140],
                            }),
                        }}
                    >
                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.setState({ vache2Cliqued: true });
                                this.vachesAnimation(),
                                this.laitVache2.play()
                            }}
                        >
                            <Animated.Image
                                source={Vache2}
                                style={{
                                    width: 177,
                                    height: 173,
                                    position: 'absolute',
                                    left: this.state.moveRoues.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [246, -400],
                                    }),
                                    top: this.state.moveRoues.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [92 , 94],
                                    }),
                                    transform: [{
                                        rotate: this.state.moveRoues.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ["3deg" , "-3deg"],
                                        }),
                                    }],
                                }}
                            />
                        </TouchableWithoutFeedback>
                        {laitVache2}
                    </Animated.View>

                    <Animated.View
                        style={{
                            width: 178,
                            height: 178,
                            position: 'absolute',
                            left: this.state.moveVaches.interpolate({
                                inputRange: [0, 1],
                                outputRange: [84, 6],
                            }),
                        }}
                    >
                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.setState({ vache3Cliqued: true });
                                this.vachesAnimation(),
                                this.laitVache1.play();
                                }
                            }
                        >
                            <Animated.Image
                                source={Vache2}
                                style={{
                                    width: 178,
                                    height: 178,
                                    position: 'absolute',
                                    left: this.state.moveRoues.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [560, -100],
                                    }),
                                    top: this.state.moveRoues.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [92 , 88],
                                    }),
                                    transform: [{
                                        rotate: this.state.moveRoues.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ["5deg" , "-5deg"],
                                        }),
                                    }],
                                }}
                            />
                        </TouchableWithoutFeedback>
                    </Animated.View>

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
                            height: 87,
                            position: 'absolute',
                            left: 1023,
                            top: 96,
                            transform: [{
                                rotate: this.state.moveRoues.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["60deg" , "300deg"],
                                }),
                            }],
                        }}
                    />

                    <TouchableWithoutFeedback
                        onPress={() => this.rouesAnimation()}
                    >
                        <Animated.Image
                            source={Roue1}
                            style={{
                                width: 127,
                                height: 127,
                                position: 'absolute',
                                left: 960,
                                top: 285,
                                transform: [{
                                    rotate: this.state.moveRoues.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0deg" , "360deg"],
                                    }),
                                }],
                            }}
                        />
                    </TouchableWithoutFeedback>

                    <Animated.Image
                        source={Roue2}
                        style={{
                            width: 114,
                            height: 115,
                            position: 'absolute',
                            left: 1000,
                            top: 180,
                            transform: [{
                                rotate: this.state.moveRoues.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg" , "-360deg"],
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
                                rotate: this.state.moveRoues.interpolate({
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
                                rotate: this.state.moveRoues.interpolate({
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
                                rotate: this.state.moveRoues.interpolate({
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
                                rotate: this.state.moveRoues.interpolate({
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
                                rotate: this.state.moveRoues.interpolate({
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
                                rotate: this.state.moveRoues.interpolate({
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
                                rotate: this.state.moveRoues.interpolate({
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
                                rotate: this.state.moveRoues.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg" , "-360deg"],
                                }),
                            }],
                        }}
                    />

                    <TouchableOpacity
                        onPress={
                            () => console.log("pressed on bouteille10"),
                            () => this.glass1.play()
                        }
                        style={{zIndex: 1}}
                    >
                        <Animated.Image
                            source={Bouteille10}
                            style={{
                                width: 49,
                                height: 89,
                                position: 'absolute',
                                left: 932,
                                top: 451,
                                transform: [{
                                    rotate: this.state.moveBottles[0].interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0deg" , "-10deg"],
                                    }),
                                }],
                            }}
                        />
                    </TouchableOpacity>

                    <Image
                        source={Bouteilles9}
                        style={{width: 310, height: 393, position: 'absolute', left: 724, top: 409}}
                    />

                    <TouchableOpacity
                        onPress={
                            () => console.log("pressed on bouteille8"),
                            () => this.bottlesAnimation(),
                            () => this.glass2.play()
                        }
                        style={{zIndex: 1}}
                        setOpacityTo={0.5,100}
                    >
                        <Animated.Image
                            source={Bouteille8}
                            style={{
                                width: 41,
                                height: 63,
                                position: 'absolute',
                                left: 918,
                                top: 481,
                                transform: [{
                                    rotate: this.state.moveBottles[1].interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0deg" , "-10deg"],
                                    }),
                                }],
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={
                            () => {
                                console.log("pressed on bouteille7");
                                this.bottlesAnimation();
                                this.glass3.play();
                            }
                        }
                        style={{zIndex: 1}}
                        setOpacityTo={0.5,100}
                    >
                        <Animated.Image
                            source={Bouteille7}
                            style={{
                                width: 31,
                                height: 112,
                                position: 'absolute',
                                left: 1000,
                                top: 689,
                                transform: [{
                                    rotate: this.state.moveBottles[2].interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0deg" , "-10deg"],
                                    }),
                                }],
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={
                            () => console.log("pressed on bouteille6"),
                            () => this.bottlesAnimation(),
                            () => this.glass4.play()
                        }
                        style={{zIndex: 1}}
                        setOpacityTo={0.5,100}
                    >
                        <Animated.Image
                            source={Bouteille6}
                            style={{
                                width: 69,
                                height: 110,
                                position: 'absolute',
                                left: 738,
                                top: 556,
                                transform: [{
                                    rotate: this.state.moveBottles[3].interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0deg" , "-10deg"],
                                    }),
                                }],
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={
                            () => console.log("pressed on bouteille5"),
                            () => this.bottlesAnimation(),
                            () => this.glass5.play()
                        }
                        style={{zIndex: 1}}
                        setOpacityTo={0.5,100}
                    >
                        <Animated.Image
                            source={Bouteille5}
                            style={{
                                width: 40,
                                height: 117,
                                position: 'absolute',
                                left: 817,
                                top: 678,
                                transform: [{
                                    rotate: this.state.moveBottles[4].interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0deg" , "-10deg"],
                                    }),
                                }],
                            }}
                        />
                    </TouchableOpacity>

                    <Image
                        source={Bouteilles4}
                        style={{width: 314, height: 393, position: 'absolute', left: 744, top: 403}}
                    />

                    <TouchableOpacity
                        onPress={
                            () => this.bottlesAnimation(),
                            () => this.glass6.play()
                        }
                        style={{zIndex: 1}}
                        setOpacityTo={0.5,100}
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
                                    rotate: this.state.moveBottles[5].interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0deg" , "-10deg"],
                                    }),
                                }],
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableWithoutFeedback
                        onPress={
                            () => this.levierAnimation()
                        }
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
                    </TouchableWithoutFeedback>

                    <Image
                        source={Passerelle}
                        style={{width: 67, height: 30, position: 'absolute', left: 910, top: 636}}
                    />

                    <Image
                        source={Meuble}
                        style={{width: 476, height: 279, position: 'absolute', left: 601, top: 538}}
                    />
                </View>
            </Overlay>
        )
    }
}

Page2.navigationOptions = {
    header: null
};