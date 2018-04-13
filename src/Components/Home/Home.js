import React, {Component} from 'react';
import {Text, View, TouchableHighlight, SegmentedControlIOS} from 'react-native';

import {Animated, Easing} from 'react-native';
import LottieView from 'lottie-react-native';
import {WordDetector} from "../../Plugins/WordDetector";
import {observable} from "mobx";
import {observer} from "mobx-react";
import {PageDetector} from "../../Plugins/PageDetector";

import HomeStyle from "./Home.style";
import voiceAnimation from "../../Assets/Animations/Voice.json";
import Video from "react-native-video";
import ClercAnimation from "../../Assets/Animations/Words/compiled/lotis.png";


@observer
export default class Home extends Component {
    wordDetector = new WordDetector();
    pageDetector = new PageDetector();
    @observable wordDetectorResult = (
        <Text
            style={HomeStyle.stat}>
            Appuyer pour parler
        </Text>
    );

    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
            selectedIndex: 0,
            clercProgress: new Animated.Value(0)
        };
        this.wordDetector.setWordList([
            "Lotis"
        ]);
    }

    componentDidMount() {
        this.animatedButton = Animated.loop(
            Animated.timing(this.state.progress, {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: true
            })
        );
        this.clercTiming = Animated.timing(this.state.clercProgress, {
            toValue: 1,
            duration: 5000,
            easing: Easing.linear,
            useNativeDriver: true
        });
    }

    startRecognition() {
        this.wordDetectorResult = (
            <Text
                style={HomeStyle.stat}>
                ...
            </Text>
        );
        this.wordDetector.recognizeWord()
            .then((results) => {
                this.wordDetectorResult = (
                    <Video source={ClercAnimation}
                           playInBackground={false}
                           playWhenInactive={false}
                           muted={true}
                           onEnd={this.onEnd}// Callback when the stream receive some metadata
                           style={HomeStyle.backgroundVideo} />
                );
            })
            .catch((err) => {
                this.wordDetectorResult = (
                    <Text
                        style={HomeStyle.stat}>
                        Ce mot n'est pas sur la page
                    </Text>
                );
            })
            .finally(() => {
                this.clercTiming.start();

                this.state.progress.setValue(0);
                this.animatedButton.stop();
            });
    }

    onEnd(e) {
    }


    render() {
        return (
            <View style={HomeStyle.pageContainer}>
                <SegmentedControlIOS
                    style={HomeStyle.pageNavBar}
                    values={['Detection de mot', 'Detection de page']}
                    selectedIndex={this.state.selectedIndex}
                    onChange={(event) => {
                        this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
                    }}
                />

                <View style={HomeStyle.container}>
                    {(() => {
                        switch(this.state.selectedIndex) {
                            case 0:
                                return (
                                    <View style={HomeStyle.featureContainer}>

                                        {this.wordDetectorResult}

                                        <TouchableHighlight activeOpacity={1} underlayColor="transparent" onPress={(e) => {
                                            this.startRecognition();
                                            this.animatedButton.start();
                                        }}>
                                            <LottieView style={HomeStyle.button} source={voiceAnimation} progress={this.state.progress}/>
                                        </TouchableHighlight>
                                        <Text style={HomeStyle.instructions}>
                                            Press the button and start speaking.
                                        </Text>
                                        {
                                            this.wordDetector.matcher.wordlist
                                                .map((word, i) => {
                                                    return (
                                                        <Text key={i}>{word}</Text>
                                                    )
                                                })
                                        }
                                    </View>
                                );
                                break;
                            case 1:
                                return (
                                    <View style={HomeStyle.featureContainer}>
                                        <Text style={HomeStyle.welcome}>
                                            Detection du numéro de page
                                        </Text>
                                        <Text style={HomeStyle.instructions}>
                                            disposer le livre à côté de l'iPad et tourner les pages.
                                        </Text>
                                        <Text
                                            style={HomeStyle.stat}>
                                            {this.pageDetector.currentPage} ; {this.pageDetector.currentMFValue}
                                        </Text>
                                    </View>
                                );
                                break;
                        }
                    })()}
                </View>
            </View>

        );
    }
}

