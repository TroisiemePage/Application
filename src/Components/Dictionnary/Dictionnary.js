import * as React from "react";
import {Button, Dimensions, Text, View, Animated} from "react-native";
import ApngPlayer from "../ApngPlayer/ApngPlayer";

const {height, width} = Dimensions.get('window');
import {words} from "../../Stores/words.js";

export class Dictionnary extends React.Component {
    state = {
        definitionOpacity: new Animated.Value(0)
    };

    showDefinition() {
        Animated.timing(this.state.definitionOpacity, {
            toValue: 1,
            duration: 1000
        }).start();
    }

    render() {
        let word = words.filter((word) => word.word === this.props.navigation.getParam("word", ""))[0];
        console.log(word);
        return (
            <View style={{
                width: width,
                height: height,
                backgroundColor: '#FEFBEB',
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
            }}>
                <View style={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                }}>
                    <Button
                        onPress={() => this.props.navigation.goBack()}
                        title={"Retour"}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        width: "70%",
                    }}>
                    <View style={{
                        flex: 1,
                        alignItems: "center",
                    }}>
                        <ApngPlayer
                            playlist={word.animation}
                            maxFrameSize={600}
                            onPlaylistItemFinish={(playlistIndex) => {
                                this.showDefinition();
                                console.log(playlistIndex);
                            }}

                    />
                        <Animated.View style={{
                            marginTop: 40,
                            opacity: this.state.definitionOpacity
                        }}>
                                <Text style={{
                                    fontSize: 60,
                                    fontFamily: "AGaramondPro-Bold",
                                    color: "#0E0637",
                                    textAlign: "left",
                                }}>
                                    {word.word},<Text style={{
                                    fontSize: 35,
                                    fontFamily: "AGaramondPro-Semibold",
                                    color: "#0E0637",
                                    marginTop: 20
                                }}> {word.gender}</Text>
                                </Text>
                            <Text style={{
                                textAlign: "left",
                                fontSize: 23,
                                fontFamily: "AGaramondPro-Regular",
                                color: "#0E0637",
                            }}>{word.definition}</Text>
                        </Animated.View>
                    </View>
                </View>
            </View>
        );
    }
}

Dictionnary.navigationOptions = {
    header: null
};