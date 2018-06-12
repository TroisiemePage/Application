import React from "react";
import {Dimensions, Image, ScrollView, Text, View, Animated, Easing, TouchableOpacity} from "react-native";

const {height, width} = Dimensions.get('window');

import fil1 from "../../Assets/Images/Pages/Page0/fil1.png";
import fil2 from "../../Assets/Images/Pages/Page0/fil2.png";
import ipad from "../../Assets/Images/Pages/Page0/ipad.png";
import livre from "../../Assets/Images/Pages/Page0/livre.png";
import carotte from "../../Assets/Images/Pages/Page0/perso-carotte.png";
import menuPicto from "../../Assets/Images/Elements/MENU2.png";
import trompette from "../../Assets/Images/Elements/MICRO.png";
import {InlineManicule} from "../Manicule/InlineManicule";
import {PageDetector} from "../../Modules/PageDetector";
import flecheDroite from "../../Assets/Images/Elements/fleche_02.png"
export class Page0 extends React.Component {

    state = {
        animation: new Animated.Value(0)
    };

    constructor() {
        super();
        PageDetector.onPageChange((currentPage) => {
            console.log(currentPage);
            let pageNumber = 5;
            let currentPageIntervalized = (currentPage >= 0 ? (currentPage < pageNumber ? currentPage : (pageNumber - 1)) : 0);
            this.props.navigation.navigate("Page" + (currentPageIntervalized + 1));
            console.log("PAGE ROUTER", currentPageIntervalized);
        });
    }

    componentWillMount() {
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.state.animation, {
                    toValue: 1,
                    duration: 1000
                }),
                Animated.timing(this.state.animation, {
                    toValue: 0,
                    duration: 1000
                })
            ])
        ).start();

    }

    render() {
        return (
            <View>
                <ScrollView
                    ref={(ref) => (ref !== null) ? (this.scrollview = ref) : ""}
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
                                marginTop: 25
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
                                flexDirection: "row",
                                marginTop: 50,
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
                                marginTop: 50,
                            }}/>
                        <Text
                            style={{
                                fontSize: 25,
                                fontFamily: "AGaramondPro-Regular",
                                color: "white",
                                textAlign: "center",
                                marginTop: 50
                            }}>
                            {"Si tu ne comprends pas un mot pendant ta lecture, n'hesite pas à le dire\ntout haut en faisant sonner la trompette ! Je saurai t'aider."}
                        </Text>
                        <Animated.View
                            style={{
                                flexDirection: "row",
                                alignItems: 'center',
                                width: 100,
                                height: 100,
                                borderRadius: 100,
                                borderWidth: 1,
                                borderColor: "white",
                                marginTop: 50,
                                transform: [{
                                    scale: this.state.animation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 0.8]
                                    })
                                }]
                            }}
                        >
                            <Image
                                resizeMode={"contain"}
                                source={trompette} style={{
                                width: 70,
                                height: 70,
                                margin: 14,
                                tintColor: "white"
                            }}/>
                        </Animated.View>
                        <TouchableOpacity
                            onPress={() => this.scrollview.scrollTo({x: width, y: 0, animated: true})}
                            style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            position: "absolute",
                            right: 20,
                            bottom: 50,
                        }}>
                            <Text style={{
                                fontSize: 25,
                                fontFamily: "AGaramondPro-Regular",
                                color: "white",
                                marginRight: 10
                            }}>Suivant</Text>
                            <Image
                                source={flecheDroite}
                                resizeMode={"contain"}
                                resizeMethod={"scale"}
                                style={{
                                    width: 20,
                                    height: 20,
                                    marginBottom: 5
                                }}/>
                        </TouchableOpacity>


                    </View>

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
                        }}>{"PSSSST !".toUpperCase()}</Text>
                        <Image
                            source={fil1}
                            resizeMode={"contain"}
                            style={{
                                height: 25,
                                width: "100%",
                                marginTop: 25
                            }}/>
                        <Text
                            style={{
                                fontSize: 25,
                                fontFamily: "AGaramondPro-Regular",
                                color: "white",
                                textAlign: "center",
                                marginTop: 50
                            }}>
                            {"Tu peux retrouver tous les mots que tu as découvert dans ton dictionnaire,\n" +
                            "accessible à tout moment à partir du menu !"}
                        </Text>
                        <Animated.View
                            style={{
                                flexDirection: "row",
                                alignItems: 'center',
                                width: 100,
                                height: 100,
                                borderRadius: 100,
                                borderWidth: 1,
                                borderColor: "white",
                                marginTop: 50,
                                transform: [{
                                    scale: this.state.animation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 0.8]
                                    })
                                }]
                            }}
                        >
                            <Image
                                resizeMode={"contain"}
                                source={menuPicto} style={{
                                width: 100,
                                height: 100,
                                tintColor: "white"
                            }}/>
                        </Animated.View>
                        <Image
                            source={fil2}
                            resizeMode={"contain"}
                            style={{
                                height: 25,
                                width: "100%",
                                marginTop: 50,
                            }}/>
                        <Text
                            style={{
                                fontSize: 25,
                                fontFamily: "AGaramondPro-Regular",
                                color: "white",
                                textAlign: "center",
                                marginTop: 50
                            }}>
                            {"Pour devenir incollable sur l'univers de Gargantua, balade-toi dans les\n" +
                            "pages interactives et touche les objets indiqués par Gargantua !"}
                        </Text>
                        <InlineManicule
                            style={{
                                marginTop: 50
                            }}/>
                        <TouchableOpacity
                            onPress={() => this.scrollview.scrollTo({x: width * 2, y: 0, animated: true})}
                            style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            position: "absolute",
                            right: 20,
                            bottom: 50,
                        }}>
                            <Text style={{
                                fontSize: 25,
                                fontFamily: "AGaramondPro-Regular",
                                color: "white",
                                marginRight: 10
                            }}>Suivant</Text>
                            <Image
                                source={flecheDroite}
                                resizeMode={"contain"}
                                resizeMethod={"scale"}
                                style={{
                                    width: 20,
                                    height: 20,
                                    marginBottom: 5
                                }}/>
                        </TouchableOpacity>

                    </View>

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
                        }}>{"Pour finir !".toUpperCase()}</Text>
                        <Image
                            source={fil1}
                            resizeMode={"contain"}
                            style={{
                                height: 25,
                                width: "100%",
                                marginTop: 25
                            }}/>
                        <Text
                            style={{
                                fontSize: 25,
                                fontFamily: "AGaramondPro-Regular",
                                color: "white",
                                textAlign: "center",
                                marginTop: 50
                            }}>
                            {"Si tu est perdu, la carte du menu t'indique ta progression dans l'histoire !"}
                        </Text>
                        <Animated.View
                            style={{
                                flexDirection: "row",
                                alignItems: 'center',
                                width: 100,
                                height: 100,
                                borderRadius: 100,
                                borderWidth: 1,
                                borderColor: "white",
                                marginTop: 50,
                                transform: [{
                                    scale: this.state.animation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 0.8]
                                    })
                                }]
                            }}
                        >
                            <Image
                                resizeMode={"contain"}
                                source={menuPicto} style={{
                                width: 100,
                                height: 100,
                                tintColor: "white"
                            }}/>
                        </Animated.View>
                        <Image
                            source={fil2}
                            resizeMode={"contain"}
                            style={{
                                height: 25,
                                width: "100%",
                                marginTop: 50,
                            }}/>
                        <Text
                            style={{
                                fontSize: 35,
                                fontFamily: "AGaramondPro-Regular",
                                color: "white",
                                textAlign: "center",
                                marginTop: 50
                            }}>
                            {"Prêt pour un voyage dans le temps ?\nTourne la première page"}
                        </Text>
                    </View>

                </ScrollView>
                <Image
                    source={carotte}
                    resizeMode={"contain"}
                    style={{
                        position: "absolute",
                        left: 20,
                        bottom: 50,
                        height: height / 2,
                        width: width / 4
                    }}/>
            </View>

        );
    }
}

Page0.navigationOptions = {
    header: null
};