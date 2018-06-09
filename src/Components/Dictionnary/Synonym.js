import React from 'react';
import {Text, View, Animated, Dimensions, TouchableWithoutFeedback} from 'react-native';
import ApngPlayer from "../ApngPlayer/ApngPlayer";

const {height, width} = Dimensions.get('window');


class SynonymSelector extends React.Component {
    state = {
        animatedDelta: new Animated.Value(0),
        selectedWord: 0
    };

    radius = 400;

    deltaWord = Math.PI / 2;//(2 * Math.PI / this.props.word.synonyms.length);

    selectWord(index) {
        this.setState({selectedWord: index});
        Animated.timing(this.state.animatedDelta, {
            toValue: index * this.deltaWord,
            duration: 1000,
            delay: 0
        }).start();
    }

    render() {
        return (
            <View style={{
                height: this.radius,
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                ...this.props.style
            }}>
                <View style={{
                    width: this.radius,
                    height: this.radius,
                    position: "relative"
                }}>

                    <Animated.View style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: this.radius,
                        height: this.radius,
                        borderRadius: this.radius,
                        borderWidth: 1,
                        borderColor: "#999999",
                        transform: [{
                            rotateZ: this.state.animatedDelta.interpolate({
                                inputRange: [0, 2 * Math.PI],
                                outputRange: [0 + "rad", 2 * Math.PI + "rad"]
                            })
                        }]
                    }}>
                        {this.props.word.synonyms.map((synonym, i) => {
                            const theta = i * this.deltaWord;
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
                                        position: "absolute",
                                        left: this.radius * ((Math.cos(theta) + 1) / 2) - (radius / 2),
                                        bottom: this.radius * ((Math.sin(theta) + 1) / 2) - (radius / 2),
                                        backgroundColor: color
                                    }}/>
                                </TouchableWithoutFeedback>
                            );
                        })}
                    </Animated.View>
                    <ApngPlayer
                        style={{
                            position: "absolute",
                            top: 60,
                            left: 60,
                        }}
                        playlist={this.props.word.synonyms[this.state.selectedWord].animation}
                        maxFrameSize={this.radius - 120}
                        onPlaylistItemFinish={() => {
                        }}
                    />
                </View>

                <View style={{
                    marginLeft: 50,
                    width: "40%"
                }}>
                    <Text style={{
                        fontSize: 60,
                        fontFamily: "AGaramondPro-Bold",
                        color: "#0E0637",
                        textAlign: "left",
                    }}>
                        {this.props.word.synonyms[this.state.selectedWord].word},<Text style={{
                        fontSize: 35,
                        fontFamily: "AGaramondPro-Semibold",
                        color: "#0E0637",
                        marginTop: 20
                    }}> {this.props.word.synonyms[this.state.selectedWord].gender}</Text>
                    </Text>
                    <Text style={{
                        textAlign: "left",
                        fontSize: 20,
                        fontFamily: "AGaramondPro-Regular",
                        color: "#0E0637",
                    }}>{this.props.word.synonyms[this.state.selectedWord].definition}</Text>
                </View>
            </View>

        );
    }
}

export class Synonym extends React.Component {

    styles = {
        slide: {
            marginTop: 20,
            marginBottom: 20
        },
        wrapper: {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            width: "40%",
        },
    };

    swipe_config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    state = {
        leftOffset: new Animated.Value(0)
    };

    onSwipe(gestureName, gestureState) {
        console.log("warzazate");
    }

    render() {
        return (
            <View style={{
                width: width,
                height: height,
                backgroundColor: '#FEFBEB',
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                overflow: "hidden"
            }}>
                <SynonymSelector word={this.props.word}/>

            </View>

        );
    }
}

/*{this.props.word.synonyms.map((synonym, i) => {
    return (
        <View style={this.styles.slide} key={i}>
            <ApngPlayer
                playlist={synonym.animation}
                maxFrameSize={height / 2}
                onPlaylistItemFinish={(playlistIndex) => {
                }}
            />
            <Text style={{
                fontSize: 60,
                fontFamily: "AGaramondPro-Bold",
                color: "#0E0637",
                textAlign: "left",
            }}>
                {synonym.word},<Text style={{
                fontSize: 35,
                fontFamily: "AGaramondPro-Semibold",
                color: "#0E0637",
                marginTop: 20
            }}> {synonym.gender}</Text>
            </Text>
            <Text style={{
                textAlign: "left",
                fontSize: 20,
                fontFamily: "AGaramondPro-Regular",
                color: "#0E0637",
            }}>{synonym.definition}</Text>
        </View>
    );
})}*/