import * as React from "react";
import {Button, Dimensions, Text, View, Animated} from "react-native";
import ApngPlayer from "../ApngPlayer/ApngPlayer";

const {height, width} = Dimensions.get('window');

export class Definition extends React.Component {

    state = {
        definitionOpacity: new Animated.Value(0)
    };

    showDefinition() {
        Animated.timing(this.state.definitionOpacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }

    render() {
        return (
            <View
            style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                width: "40%",
            }}>
            <View style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
            }}>
                <ApngPlayer
                    playlist={this.props.word.animation}
                    maxFrameSize={height / 2}
                    onPlaylistItemFinish={(playlistIndex) => {
                        this.showDefinition();
                        this.props.introFinished();
                    }}

                />
                <Animated.View
                style={{
                    opacity: this.state.definitionOpacity,
                    marginTop: 50
                }}>
                    <View style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "flex-start",
                        alignContent: "flex-start",
                        alignItems: "flex-end"
                    }}>
                        <Text style={{
                            fontSize: 60,
                            fontFamily: "AGaramondPro-Bold",
                            color: "#0E0637",
                            textAlign: "left",
                            lineHeight: 60
                        }}>
                            {this.props.word.word},
                        </Text>
                        <Text style={{
                            fontSize: 35,
                            lineHeight: 35,
                            fontFamily: "AGaramondPro-Semibold",
                            color: "#0E0637",
                            marginBottom: 13
                        }}> {this.props.word.gender}</Text>
                    </View>
                    <Text style={{
                        marginTop: 20,
                        textAlign: "left",
                        fontSize: 20,
                        fontFamily: "AGaramondPro-Regular",
                        color: "#0E0637",
                    }}>{this.props.word.definition}</Text>
                </Animated.View>
            </View>
        </View>
        );
    }

}