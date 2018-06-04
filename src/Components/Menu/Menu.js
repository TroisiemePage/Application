import React from 'react';
import {Button, View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import WordList from "../Dictionnary/WordList";
import CarteSVG from "./CarteSVG";
import {ModalSlider} from '../Modal/ModalSlider/ModalSlider';
import {villes} from "./villes.js";
import Chateaux from "./Chateaux";

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
    image: {
        width: 151.9,
        height: 238.14,
        //resizeMode: "center",
    },
    title: {
        fontSize: 20,
        fontFamily: "Adobe Garamond Pro",
        textAlign: "left",
        fontWeight: "100",
        color: "#0E0637",
        marginTop: 40,
    },
    text: {
        fontSize: 12,
        fontFamily: "Gotham Rounded",
        color: "#050A3A",
        marginVertical: 20,
    }
};

export class Menu extends React.Component {

    currentLevel = 2;

    state = {
        modalVisibleLeft: false,
        modalVisibleRight: false,
        ville: null,
        description: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonBack}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Home')}
                        title={"Retour"}
                    />
                </View>

                <ModalSlider
                    open={this.state.modalVisibleLeft}
                    side="left"
                    onClose={() => this.setState({modalVisibleLeft: false})}
                >
                    <View>
                        <Image style={styles.image} source={require("../../Assets/Images/Menu/chateauNB.png")}/>
                        <Text style={styles.title}>{this.state.ville}</Text>
                        <Text style={styles.text}>{this.state.description}</Text>
                    </View>
                </ModalSlider>

                <CarteSVG
                    currentLevel={this.currentLevel}
                />

                <Chateaux
                    x={145}
                    y={144}
                    width={178}
                    height={280}
                    opacity={this.currentLevel >= 1 ? 1 : 0.5}
                    openModal={() => this.setState({
                        modalVisibleLeft: true,
                        ville: villes.grandgousier.title,
                        description: villes.grandgousier.description
                    })}
                >
                    {villes.grandgousier.title}
                </Chateaux>

                <Chateaux
                    x={461}
                    y={137}
                    width={122}
                    height={190}
                    opacity={this.currentLevel >= 4 ? 1 : 0.5}
                    openModal={() => this.setState({
                        modalVisibleLeft: true,
                        ville: villes.beauce.title,
                        description: villes.beauce.description
                    })}
                >
                    {villes.beauce.title}
                </Chateaux>

                <Chateaux
                    x={713}
                    y={70}
                    width={186}
                    height={177}
                    opacity={this.currentLevel >= 8 ? 1 : 0.5}
                    openModal={() => this.setState({
                        modalVisibleLeft: true,
                        ville: villes.paris.title,
                        description: villes.paris.description
                    })}
                >
                    {villes.paris.title}
                </Chateaux>

                <Chateaux
                    x={165}
                    y={525}
                    width={104}
                    height={165}
                    opacity={this.currentLevel >= 10 ? 1 : 0.5}
                    openModal={() => this.setState({
                        modalVisibleLeft: true,
                        ville: villes.picrochole.title,
                        description: villes.picrochole.description
                    })}
                >
                    {villes.picrochole.title}
                </Chateaux>

                <Chateaux
                    x={692}
                    y={363}
                    width={205}
                    height={323}
                    opacity={this.currentLevel >= 13 ? 1 : 0.5}
                    openModal={() => this.setState({
                        modalVisibleLeft: true,
                        ville: villes.theleme.title,
                        description: villes.theleme.description
                    })}
                >
                    {villes.theleme.title}
                </Chateaux>

                <ModalSlider
                    open={this.state.modalVisibleRight}
                    side="right"
                    onClose={() => this.setState({modalVisibleRight: false})}
                >
                    <WordList navigation={this.props.navigation} onElementClicked={() => this.setState({modalVisibleRight: false})}/>
                </ModalSlider>

                <TouchableWithoutFeedback onPress={() => this.setState({modalVisibleRight: true})} >
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

Menu.navigationOptions = {
    header: null
};
