import React from 'react';
import {Button, View, Text, TouchableWithoutFeedback} from 'react-native';
import {WordList} from "../Dictionnary/WordList";
import CarteSVG from "./CarteSVG";
import ModalView from '../Modal/ModalSlider/ModalView';
import villes from "./villes.js";
import {createDrawerNavigator} from "react-navigation";

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FDFAEA',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonBack: {
        position: "absolute",
        top: 20,
        left: 20,
    },
    listDico: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'flex-end',
        padding: 20,
    },
    letters: {
        color: "#fd5641",
        fontSize: 22,
        fontFamily: "AGaramondPro-Bold",
    },
};


class CarteMenuContent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonBack}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Home')}
                        title={"Retour"}
                    />
                </View>
                <ModalView title={villes.paris.title}>
                    {villes.paris.description}
                </ModalView>
                <CarteSVG/>
                <TouchableWithoutFeedback >
                    <View style={styles.listDico}>
                        <Text style={styles.letters}>A</Text>
                        <Text style={styles.letters}>B</Text>
                        <Text style={styles.letters}>C</Text>
                        <Text style={styles.letters}>D</Text>
                        <Text style={styles.letters}>E</Text>
                        <Text style={styles.letters}>F</Text>
                        <Text style={styles.letters}>G</Text>
                        <Text style={styles.letters}>H</Text>
                        <Text style={styles.letters}>I</Text>
                        <Text style={styles.letters}>J</Text>
                        <Text style={styles.letters}>K</Text>
                        <Text style={styles.letters}>L</Text>
                        <Text style={styles.letters}>M</Text>
                        <Text style={styles.letters}>N</Text>
                        <Text style={styles.letters}>O</Text>
                        <Text style={styles.letters}>P</Text>
                        <Text style={styles.letters}>Q</Text>
                        <Text style={styles.letters}>R</Text>
                        <Text style={styles.letters}>S</Text>
                        <Text style={styles.letters}>T</Text>
                        <Text style={styles.letters}>U</Text>
                        <Text style={styles.letters}>V</Text>
                        <Text style={styles.letters}>W</Text>
                        <Text style={styles.letters}>X</Text>
                        <Text style={styles.letters}>Y</Text>
                        <Text style={styles.letters}>Z</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}


export const CarteMenu = createDrawerNavigator({
    CarteMenu: {
        screen: CarteMenuContent
    }
});

CarteMenu.navigationOptions = {
    header: null
};
