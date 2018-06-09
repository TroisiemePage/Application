import React from 'react';
import {Text, View, Animated, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export class Etymology extends React.Component {

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

                <View style={{...this.styles.wrapper}}>
                    <View style={{
                        flex: 1,
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        {this.props.word.etymology.map((synonym, i) => {
                            return (
                                <View style={this.styles.slide} key={i}>
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
                        })}
                    </View>
                </View>

            </View>

        );
    }
}