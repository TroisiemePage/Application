import * as React from "react";
import {Dimensions, Image, View, Text, TouchableWithoutFeedback} from "react-native";
import Decor from "../../Assets/Images/Pages/Page1/01_EcranIpad_DEVELOPPEUR.png";
import {Overlay} from "../PageRouter/PageRouter";
import {words} from "../../Stores/words";
import ModalView from '../Modal/ModalPopup/ModalPopupView';
import Sound from "react-native-sound/";

import Nobles from "../../Assets/Images/Pages/Page1/nobles.png";
import Paysans from "../../Assets/Images/Pages/Page1/paysans2.png";
import Clerc from "../../Assets/Images/Pages/Page1/clerc.png";

import SoundBapteme from "../../Assets/Sound/SONS_IPAD_BAPTEME.mp3";
import SoundClerc from "../../Assets/Sound/CLERC.mp3";
import SoundNobles from "../../Assets/Sound/FOULE EN LIESSE.mp3";
import SoundPaysanes from "../../Assets/Sound/CHUCHOTEMENTS.mp3"

const {height, width} = Dimensions.get('window');
const styles ={
    container: {
        flex: 1,
        flexDirection: "row",
        width: width,
        height: height
    },
    image: {
        width: width,
        height: height,
        alignSelf: "flex-end"
    }
};

export class Page1 extends React.Component {

    soundBapteme = new Sound(SoundBapteme, null);
    soundClerc = new Sound(SoundClerc, null);
    SoundNobles = new Sound(SoundNobles, null);
    SoundPaysanes = new Sound(SoundPaysanes, null);

    render() {
        return (
            <Overlay {...this.props} wordList={words}>
                <View style={styles.container}>
                    <Image
                        source={Decor}
                        style={styles.image}
                        resizeMode={"contain"}
                        resizeMethod={"scale"}
                    />
                    <ModalView
                        x={140}
                        y={380}
                        title="ABBÉ BENOÎT"
                        popupImage={Clerc}
                    >
                        Il est venu accompagné de l’évêque Aubertin pour baptiser le nouveau prince. Il fait parti du clergé qui constitue  l’ensemble des personnes religieuses.  Dans le monde chrétien du Moyen-Âge, il existait deux genres de clergé :
                        {"\n"}{"\n"}
                        <Text style={{fontWeight: 'bold'}}>Le clergé séculier</Text>{"\n"}
                        Il est composé des prêtres (curés et évêques). Ils vivent au milieu du peuple. Ils enseignent, organisent la messe et sont à l'écoute des gens.
                        {"\n"}{"\n"}
                        <Text style={{fontWeight: 'bold'}}>Le clergé régulier</Text>{"\n"}
                        Le clergé régulier comprend les moines et les nonnes, les religieux et religieuses. Ils vivent séparés des autres hommes. Ils ont des activités manuelles, écrivent des manuscrits et suivent des offices religieux. Ils vivent dans une abbaye, un monastère ou un couvent et doivent suivre un règlement strict qui organise leurs journées.
                        {"\n"}{"\n"}
                        Certains moines s'habillaient avec des vêtements en laine. La robe traditionnelle s'appelle la coule. Par dessus, les frères portaient une longue tunique noire.

                    </ModalView>
                    <ModalView
                        x={405}
                        y={250}
                        title="HUGON ET GERSINDE "
                        popupImage={Paysans}
                    >
                        Serf du seigneur Anguerrand, Hugon cultive ses terres. Gersinde, fille du charpentier, est une paysanne libre. Ils profitent d’un événement royal pour festoyer.
                        {"\n"}{"\n"}
                        Au Moyen Âge, les paysans forment les neuf dixièmes de la population. On en distingue deux sortes : <Text style={{fontWeight: 'bold'}}>les serfs</Text> et les <Text style={{fontWeight: 'bold'}}> paysans libres</Text> (les vilains). Les serfs appartiennent au seigneur qui a donc tous les droits sur eux tandis que les vilains doivent travailler pour lui et lui payer des impôts.
                        {"\n"}{"\n"}
                        Les gens modestes avaient des vêtements assez semblables entre eux. La robe courte était le costume ordinaire des paysans avec les chaussures à la poulaine, autrement dit celles ayant un bout pointu et relevé. Ils portaient le plus souvent les couleurs les moins nobles comme le gris, obtenu à l'aide d'écorce d'aulne, un arbre poussant en milieu humide.
                    </ModalView>
                    <ModalView
                        x={672}
                        y={300}
                        title="MONSEIGNEUR ANGUERRAND ET DAME HERMELINE "
                        popupImage={Nobles}
                    >
                        Ils se sont rencontrés lors d’une joute et fêtent aujourd’hui leurs fiançailles. Il a gagné sa main en combattant aux côtés de Grandgousier, car les nobles appartiennent à la classe des guerriers.
                        {"\n"}{"\n"}
                        <Text style={{fontWeight: 'bold'}}>La grande noblesse</Text> détient les terres tandis que <Text style={{fontWeight: 'bold'}}>la petite noblesse</Text> garde des parcelles de terre en échange de services militaires et d’argent.
                        {"\n"}{"\n"}
                        Dans la vie de tous les jours, ils représentent les administrateurs et les fonctionnaires de la société : ils s’occupent de leurs terres, de l’application de la loi, du commandement des militaires et des tribunaux.
                        {"\n"}{"\n"}
                        Les nobles s'habillaient avec des collants, des tuniques et des vêtements qui étaient plus coûteux, comme de la fourrure (par exemple de la fourrure d'hermine) ou de la soie, et des teintures chères. Il y avait également beaucoup de parures et autres bijoux sur leurs vêtements pour montrer leur supériorité au peuple de pouvoir posséder de telles choses. Les couleurs principales étaient le bleu et le rouge.
                    </ModalView>
                    <ModalView
                        x={635}
                        y={30}
                        title="À VOS ORDRES !"
                    >
                        La société médiévale se structure en trois ordres :
                        {"\n"}{"\n"}
                        <Text style={{fontWeight: 'bold'}}>ORATORES </Text>: ceux qui prient, les hommes d'Église
                        {"\n"}{"\n"}
                            <Text style={{fontWeight: 'bold'}}>BELLATORES </Text>: ceux qui font la guerre, les nobles (prince, seigneurs, chevaliers)
                        {"\n"}{"\n"}
                                <Text style={{fontWeight: 'bold'}}>LABORATORES </Text>: ceux qui travaillent, les paysans
                    </ModalView>
                </View>
            </Overlay>
        )
    }
}
Page1.navigationOptions = {
    header: null
};