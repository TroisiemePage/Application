import React from 'react';
import {Button, View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import WordList from "../Dictionnary/WordList";
import CarteSVG from "./CarteSVG";
import {ModalSlider} from '../Modal/ModalSlider/ModalSlider';
import {villes} from "./villes.js";
import Chateaux from "./Chateaux";
import {PageDetector} from "../../Modules/PageDetector";
import {SCREEN_RATIO} from "../../Modules/ration";

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FDFAEA',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
    title: {
        fontSize: 20,
        fontFamily: "Adobe Garamond Pro",
        textAlign: "left",
        fontWeight: "100",
        color: "#0E0637",
        marginTop: 40,
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 12,
        fontFamily: "Gotham Rounded",
        color: "#050A3A",
        paddingHorizontal: 20,
        marginTop: 20,
    }
};

export class Menu extends React.Component {

    state = {
        modalVisibleLeft: false,
        modalVisibleRight: false,
        ville: null,
        description: null,
        chateau: null,
        currentPage: 0,
        imageWidth: 0,
        imageHeight: 0,
    };

    componentWillMount() {
        this.setState({currentPage: PageDetector.currentPage})
    }

    render() {
        return (
            <View style={styles.container}>
                {(() => {
                    if(this.props.back) {
                        return (
                            <View style={{
                                position: "absolute",
                                top: 20,
                                left: 20,
                                zIndex: 10
                            }}>
                                <Button
                                    onPress={() => this.props.navigation.navigate('Home')}
                                    title={"Retour"}
                                />
                            </View>
                        );
                    }
                })()}
                <ModalSlider
                    open={this.state.modalVisibleLeft}
                    side="left"
                    onClose={() => this.setState({modalVisibleLeft: false})}>
                    <View style={{
                        padding: 20,
                        flex: 1,
                        alignItems: "center",
                        flexDirection: "column",
                    }}>
                        <Image
                            style={{
                                ...styles.image,
                                width: this.state.imageWidth >= 300 ? this.state.imageWidth/2 : 3 * this.state.imageWidth/4,
                                height: this.state.imageWidth >= 300 ? this.state.imageHeight/2 : 3 * this.state.imageHeight/4
                            }}
                            resizeMode={"contain"}
                           source={this.state.chateau}/>
                        <View>
                            <Text style={styles.title}>{this.state.ville}</Text>
                            <Text style={styles.text}>{this.state.description}</Text>
                        </View>
                    </View>
                </ModalSlider>

                <CarteSVG
                    currentLevel={this.state.currentPage}
                />

                <Chateaux
                    x={99 * SCREEN_RATIO}
                    y={121 * SCREEN_RATIO}
                    width={246 * SCREEN_RATIO}
                    height={300 * SCREEN_RATIO}
                    openModal={() => this.setState({
                        modalVisibleLeft: true,
                        ville: villes.grandgousier.title,
                        description: villes.grandgousier.description,
                        chateau: villes.grandgousier.source,
                        imageWidth: 246 * SCREEN_RATIO,
                        imageHeight: 300 * SCREEN_RATIO,
                    })}
                    image={this.state.currentPage >= 1 ? villes.grandgousier.source : villes.grandgousier.sourceNB}
                >
                    {villes.grandgousier.title}
                </Chateaux>

                <Chateaux
                    x={404 * SCREEN_RATIO}
                    y={169 * SCREEN_RATIO}
                    width={251 * SCREEN_RATIO}
                    height={157 * SCREEN_RATIO}
                    openModal={() => this.setState({
                        modalVisibleLeft: true,
                        ville: villes.beauce.title,
                        description: villes.beauce.description,
                        chateau: villes.beauce.source,
                        imageWidth: 251 * SCREEN_RATIO,
                        imageHeight: 157 * SCREEN_RATIO,
                    })}
                    image={this.state.currentPage >= 4 ? villes.beauce.source : villes.beauce.sourceNB}
                >
                    {villes.beauce.title}
                </Chateaux>

                <Chateaux
                    x={695 * SCREEN_RATIO}
                    y={32 * SCREEN_RATIO}
                    width={208 * SCREEN_RATIO}
                    height={216 * SCREEN_RATIO}
                    openModal={() => this.setState({
                        modalVisibleLeft: true,
                        ville: villes.paris.title,
                        description: villes.paris.description,
                        chateau: villes.paris.source,
                        imageWidth: 208 * SCREEN_RATIO,
                        imageHeight: 216 * SCREEN_RATIO,
                    })}
                    image={this.state.currentPage >= 8 ? villes.paris.source : villes.paris.sourceNB}
                >
                    {villes.paris.title}
                </Chateaux>

                <Chateaux
                    x={107 * SCREEN_RATIO}
                    y={525 * SCREEN_RATIO}
                    width={316 * SCREEN_RATIO}
                    height={156 * SCREEN_RATIO}
                    openModal={() => this.setState({
                        modalVisibleLeft: true,
                        ville: villes.picrochole.title,
                        description: villes.picrochole.description,
                        image: villes.picrochole.source,
                        chateau: villes.picrochole.source,
                        imageWidth: 316 * SCREEN_RATIO,
                        imageHeight: 156 * SCREEN_RATIO,
                    })}
                    image={this.state.currentPage >= 10 ? villes.picrochole.source : villes.picrochole.sourceNB}
                >
                    {villes.picrochole.title}
                </Chateaux>

                <Chateaux
                    x={621 * SCREEN_RATIO}
                    y={484 * SCREEN_RATIO}
                    width={335 * SCREEN_RATIO}
                    height={195 * SCREEN_RATIO}
                    openModal={() => this.setState({
                        modalVisibleLeft: true,
                        ville: villes.theleme.title,
                        description: villes.theleme.description,
                        chateau: villes.theleme.source,
                        imageWidth: 335 * SCREEN_RATIO,
                        imageHeight: 195 * SCREEN_RATIO,
                    })}
                    image={this.state.currentPage >= 13 ? villes.theleme.source : villes.theleme.sourceNB}
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
