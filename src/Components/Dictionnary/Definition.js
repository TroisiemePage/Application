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
            duration: 1000
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
                    <Text style={{
                        fontSize: 60,
                        fontFamily: "AGaramondPro-Bold",
                        color: "#0E0637",
                        textAlign: "left",
                    }}>
                        {this.props.word.word},<Text style={{
                        fontSize: 35,
                        fontFamily: "AGaramondPro-Semibold",
                        color: "#0E0637",
                        marginTop: 20
                    }}> {this.props.word.gender}</Text>
                    </Text>
                    <Text style={{
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