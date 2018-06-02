import * as React from "react";
import {Button, Dimensions, Text, View} from "react-native";
import ApngPlayer from "../ApngPlayer/ApngPlayer";
const {height, width} = Dimensions.get('window');
import mule from "../../Assets/Animations/Words/compiled/mule.png";
import muleloop from "../../Assets/Animations/Words/compiled/mule_loop.png";
import words from "../../Stores/words.json";
export class Dictionnary extends React.Component {

    render() {
        let word = words.filter((word) => word.word === this.props.navigation.getParam("word", ""))[0];
        console.log(word);
        return (
            <View style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: width,
                height: height,
                backgroundColor: '#FEFBEB'
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
                <View>
                    <ApngPlayer
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                        playlist={[mule, muleloop]}
                        scale={0.8}/>
                    <View>
                        <View style={{
                            flex: 1,
                            flexDirection: "row",

                        }}>
                            <Text style={{
                                fontSize: 55,
                                fontFamily: "AGaramondPro-Bold",
                                color: "#0E0637",
                                marginTop: 20
                            }}>{word.word},</Text>
                            <Text>{word.gender}</Text>
                        </View>
                        <Text>{word.definition}</Text>
                    </View>

                </View>

            </View>
        )
    }

}

Dictionnary.navigationOptions = {
    header: null
};