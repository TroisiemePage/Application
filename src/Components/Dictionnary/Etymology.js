import React from 'react';
import {Text, View, Animated, Dimensions, TouchableWithoutFeedback} from 'react-native';
import ApngPlayer from "../ApngPlayer/ApngPlayer";

const {height, width} = Dimensions.get('window');

export class Etymology extends React.Component {

    state = {
        selectedWord: 0,
        leftOffset: new Animated.Value(0)
    };
    etymology = [...this.props.word.etymology];

    componentWillMount() {
        this.etymology.push({
            word: this.props.word.word,
            gender: this.props.word.gender,
            definition: this.props.word.definition,
            animation: [this.props.word.animation[1]]
        })
    }

    selectWord(index) {
        this.setState({selectedWord: index});
        Animated.timing(this.state.leftOffset, {
            toValue: index,
            duration: 500,
            delay: 0
        }).start();
    }

    render() {
        return (
            <View style={{
                width: width,
                height: height,
                backgroundColor: '#FEFBEB',
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <Animated.View style={{
                        marginLeft: this.state.leftOffset.interpolate({
                            inputRange: [0, this.etymology.length - 1],
                            outputRange: [-400, 400]
                        }),
                        marginBottom: 50
                    }}>
                        <ApngPlayer
                            playlist={[this.props.word.animation[1]]}
                            maxFrameSize={height / 2}

                            onPlaylistItemFinish={(playlistIndex) => {
                            }}

                        />

                    </Animated.View>

                    <View style={{
                        width: "40%",
                    }}>

                        <View style={{
                            flex: 1,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                            height: 0,
                            borderBottomWidth: 1,
                            borderBottomColor: "#999999"
                        }}>
                            {this.etymology.map((synonym, i) => {
                                let radius = 25;
                                let color = "#999999";
                                if (i === this.state.selectedWord) {
                                    radius = 50;
                                    color = "#fd5641";
                                }

                                return (
                                    <TouchableWithoutFeedback
                                        onPress={() => this.selectWord(i)}
                                        key={i}>
                                        <View style={{
                                            width: radius,
                                            height: radius,
                                            borderRadius: radius,
                                            backgroundColor: color
                                        }}/>
                                    </TouchableWithoutFeedback>
                                );
                            })}
                        </View>

                        <View style={{
                            marginTop: 50,
                            height: 200
                        }}>
                            <Text style={{
                                fontSize: 60,
                                fontFamily: "AGaramondPro-Bold",
                                color: "#0E0637",
                                textAlign: "left",
                            }}>
                                {this.etymology[this.state.selectedWord].word},<Text style={{
                                fontSize: 35,
                                fontFamily: "AGaramondPro-Semibold",
                                color: "#0E0637",
                                marginTop: 20
                            }}> {this.etymology[this.state.selectedWord].gender}</Text>
                            </Text>
                            <Text style={{
                                textAlign: "left",
                                fontSize: 20,
                                fontFamily: "AGaramondPro-Regular",
                                color: "#0E0637",
                            }}>{this.etymology[this.state.selectedWord].definition}</Text>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}