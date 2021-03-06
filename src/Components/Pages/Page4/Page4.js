import * as React from "react";
import {Image, Dimensions, View} from "react-native";
import ApngPlayer from "../../ApngPlayer/ApngPlayer";
import {LetterSelector} from "./LetterSelector";
import GameChapterOneLetterB from "./GameChapterOne";
import {Overlay} from "../../PageRouter/PageRouter";
import ModalView from '../../Modal/ModalPopup/ModalPopupView';
import Manicule from '../../Manicule/Manicule';
import {words} from "../../../Stores/words";

import decor from "../../../Assets/Images/Pages/Page4/Decor_pageMoines.png";
import moines from "../../../Assets/Animations/Pages/compiled/MOINES_loop.png";
import precepteur from "../../../Assets/Animations/Pages/compiled/PRECEPTEUR_loop.png";

import Sound from "react-native-sound/";
Sound.setCategory('PlayAndRecord');
import resolveAssetSource from "resolveAssetSource";
import SoundMoines from "../../../Assets/Sound/MOINES.mp3";
import {ModalSlider} from "../../Modal/ModalSlider/ModalSlider";
import {SCREEN_RATIO} from "../../../Modules/ration";

const {height, width} = Dimensions.get('window');
const styles = {
    container: {
        flex: 1,
        flexDirection: "row",
        width: width,
        height: height
    },
    image: {
        position: "absolute",
        width: width,
        height: height,
        left: 0,
        top: 0,
    },
    letter: {
        marginLeft: 280 * SCREEN_RATIO,
        marginTop: 200 * SCREEN_RATIO
    },
    button: {
        opacity: 0,
        width: 200 * SCREEN_RATIO,
        height: 200 * SCREEN_RATIO,
        marginTop: 550 * SCREEN_RATIO,
        marginLeft: 50 * SCREEN_RATIO,
    },
};

let letterSelector = "";

const soundMoines = new Sound(resolveAssetSource(SoundMoines).uri, null, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    soundMoines.setNumberOfLoops(-1);
});
export class Page4 extends React.Component {

    constructor() {
        super();
        this.state = {
            duration: 0,
            imageNumber: 0,
            animated: true
        };
    }

    static componentVisible() {
        soundMoines.play();
    }

    static componentWillDisapear() {
        soundMoines.stop();
    }
    state = {
        modalVisible: false
    };

    render() {
        return (
            <Overlay {...this.props} wordList={words}>
                <View style={styles.container}>
                    <Image
                        source={decor}
                        style={styles.image}
                        resizeMode={"contain"}
                        resizeMethod={"scale"}
                    />
                    <LetterSelector
                        style={styles.letter}
                        ref={(letterSelectorRef) => {
                            letterSelector = letterSelectorRef;
                        }}
                    />
                    <ApngPlayer
                        ref={"moines"}
                        style={{
                            position: "absolute",
                            bottom: 30 * SCREEN_RATIO,
                            right: 50 * SCREEN_RATIO
                        }}
                        scale={0.45 * SCREEN_RATIO}
                        playlist={[moines]}
                        onPress={() => {
                            this.setState({modalVisible: true})
                        }}
                    />
                    <ApngPlayer
                        ref={"precepteur"}
                        style={{
                            position: "absolute",
                            bottom: 140 * SCREEN_RATIO,
                            left: 110 * SCREEN_RATIO
                        }}
                        scale={0.5 * SCREEN_RATIO}
                        playlist={[precepteur]}
                        onPress={() => {
                        }}
                    />
                    <ModalView
                        x={530 * SCREEN_RATIO}
                        y={60 * SCREEN_RATIO}
                        title="ABBAYE ROYALE DE FONTEVRAUD"
                    >
                        {"Sacrée Abbaye ! Dès sa création en 1101, son fondateur, Robert d’Abrissel, " +
                        "ouvre les portes de l’abbaye royale aux hommes mais aussi aux femmes " +
                        "ainsi qu’à des personnes de toutes origines sociales. \nDe la mixité au Moyen-" +
                        "Âge ! Quel visionnaire ! À partir de 1189 l’abbaye devient nécropole royale, " +
                        "c’est-à-dire qu’elle abrite les tombeaux d’Henri II, d’Aliénor d’Aquitaine et " +
                        "de Richard Cœur de Lion\nEn 7 siècles, 36 abbesses se succèdent à la tête " +
                        "de l’abbaye mais tout dérape à la Révolution Française (1789) !\nNapoléon" +
                        " Bonaparte aux commandes de la France, l’Abbaye est réquisi-\ntionnée " +
                        "comme prison !\n2 000 hommes seront prisonniers et l’abbaye deviendra " +
                        "l’une des plus dures prisons de France. \nIl faudra attendre 1963 pour qu’elle " +
                        "soit fermée et 1975 pour que tu puisses enfin la visiter !"}
                    </ModalView>
                    <ModalView
                        x={420 * SCREEN_RATIO}
                        y={350 * SCREEN_RATIO}
                        title="MOINES COPISTES"
                    >
                        {"Au XIIème siècle, l’Église a encore le monopole de la connaissance et du savoir." +
                        " Elle les diffuse par le biais d’ouvrages réalisés au sein des scriptoria " +
                        "monastiques.\nEt oui l’imprimerie n’existe pas encore ! Faces à leur pupitre, " +
                        "armés d’une plume et d’un calame, les moines recopient des ouvrages " +
                        "pendant de longues heures. \nPas le droit à l’erreur ! Ils écrivent mais " +
                        "dessinent aussi ! On appelle ça des enluminures. Cela consiste à mettre en " +
                        "lumière et en couleur les textes copiés. Encrer à la plume, habiller d’or une " +
                        "lettrine : un vrai travail d’orfèvre !"}
                    </ModalView>
                    <Manicule
                        x={840 * SCREEN_RATIO}
                        y={640 * SCREEN_RATIO}
                        scale={1 * SCREEN_RATIO}
                        rotation="0deg"
                    />
                </View>
                <ModalSlider
                    open={this.state.modalVisible}
                    side="right"
                    width={900 * SCREEN_RATIO}
                    onClose={() => this.setState({modalVisible: false})}>
                    <GameChapterOneLetterB letterSelector={letterSelector}/>
                </ModalSlider>
            </Overlay>
        );
    }
}

Page4.navigationOptions = {
    header: null
};