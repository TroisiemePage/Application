import * as React from "react";
import {WordDetector} from "../../../Modules/WordDetector";
import {Image, Dimensions, View} from "react-native";
const wordDetector = new WordDetector();
import decor from "../../../Assets/Images/Pages/Page1/Decor_pageMoines.png";
import moines from "../../../Assets/Animations/Pages/compiled/MOINES_loop.png";
import precepteur from "../../../Assets/Animations/Pages/compiled/PRECEPTEUR_loop.png";
import ApngPlayer from "../../ApngPlayer/ApngPlayer";
import {LetterSelector} from "./LetterSelector";
import GameChapterOneLetterA from "./GameChapterOne";
import {createDrawerNavigator} from "react-navigation";
import {Overlay, PageRouter} from "../../PageRouter/PageRouter";
import ModalView from '../../Modal/ModalView';

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
        marginLeft: 280,
        marginTop: 200
    },
    button: {
        opacity: 0,
        width: 200,
        height: 200,
        marginTop: 550,
        marginLeft: 50,
    },
};

const letterSelector = "";
class Page1Content extends React.Component {

    constructor() {
        super();
        wordDetector.setWordList([
            "Lotis",
            "Oriflant"
        ]);
        this.state = {
            duration: 0,
            imageNumber: 0,
            animated: true
        };
    }

    render() {
        console.log("CONTENT", this.props.navigation);
        return (
            <Overlay {...this.props}>
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
                        bottom: 30,
                        right: 50
                    }}
                    scale={0.45}
                    playlist={[moines]}
                    onPress={() => {
                        this.props.navigation.openDrawer();
                    }}
                />
                <ApngPlayer
                    ref={"precepteur"}
                    style={{
                        position: "absolute",
                        bottom: 140,
                        left: 110
                    }}
                    scale={0.5}
                    playlist={[precepteur]}
                    onPress={() => {
                        console.log("Precepteur");
                    }}
                />
                <ModalView
                    x={530}
                    y={60}
                    title="ABBAYE ROYALE DE FONTEVRAUD"
                >
                    Sacrée Abbaye ! Dès sa création en 1101, son fondateur, Robert d’Abrissel,
                    ouvre les portes de l’abbaye royale aux hommes mais aussi aux femmes
                    ainsi qu’à des personnes de toutes origines sociales. De la mixité au Moyen-
                    Âge ! Quel visionnaire ! À partir de 1189 l’abbaye devient nécropole royale,
                    c’est-à-dire qu’elle abrite les tombeaux d’Henri II, d’Aliénor d’Aquitaine et
                    de Richard Cœur de Lion. En 7 siècles, 36 abbesses se succèdent à la tête
                    de l’abbaye mais tout dérape à la Révolution Française (1789) ! Napoléon
                    Bonaparte aux commandes de la France, l’Abbaye est réquisitionnée
                    comme prison ! 2 000 hommes seront prisonniers et l’abbaye deviendra
                    l’une des plus dures prisons de France. Il faudra attendre 1963 pour qu’elle
                    soit fermée et 1975 pour que tu puisses enfin la visiter !
                </ModalView>
                <ModalView
                    x={420}
                    y={350}
                    title="MOINES COPISTES"
                >
                    Au 12e siècle, l’Église a encore le monopole de la connaissance et du savoir.
                    Elle les diffuse par le biais d’ouvrages réalisés au sein des scriptoria
                    monastiques. Et oui l’imprimerie n’existe pas encore ! Faces à leur pupitre,
                    armés d’une plume et d’un calame, les moines recopient des ouvrages
                    pendant de longues heures. Pas le droit à l’erreur ! Ils écrivent mais
                    dessinent aussi ! On appelle ça des enluminures. Cela consiste à mettre en
                    lumière et en couleur les textes copiés. Encrer à la plume, habiller d’or une
                    lettrine : un vrai travail d’orfèvre !
                </ModalView>
            </View>
            </Overlay>
        );
    }
}

export const Page1 = createDrawerNavigator(
    {
        Game: {
            screen: Page1Content
        }
    },
    {
        drawerPosition: 'right',
        drawerBackgroundColor: '#FDFBEF',
        initialRouteName: 'Game',
        drawerWidth: 900,
        drawerLockMode: "locked-closed",
        contentComponent: (props) => {
            return (<GameChapterOneLetterA {...props} letterSelector={letterSelector}/>)
        }
    }
);
Page1.navigationOptions = {
    header: null
};