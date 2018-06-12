import * as React from "react";
import {Dimensions, Image, View, Text} from "react-native";
import Decor from "../../../Assets/Images/Pages/Page1/fond.png";
import {Overlay} from "../../PageRouter/PageRouter";
import {words} from "../../../Stores/words";
import ModalView from '../../Modal/ModalPopup/ModalPopupView';

import Nobles from "../../../Assets/Images/Pages/Page1/nobles.png";
import Paysans from "../../../Assets/Images/Pages/Page1/paysans2.png";
import Clerc from "../../../Assets/Images/Pages/Page1/clerc.png";
import {Sky} from "./Sky";

import chateauAnim from "../../../Assets/Animations/Pages/compiled/CHATEAU_loop.png";
import hommeColine from "../../../Assets/Animations/Pages/compiled/CHEVALIER_COLLINE_loop.png";
import group1 from "../../../Assets/Animations/Pages/compiled/GROUPE_01_loop.png";
import group2 from "../../../Assets/Animations/Pages/compiled/GROUPE_02_loop.png";
import group3 from "../../../Assets/Animations/Pages/compiled/GROUPE_03_loop.png";
import hommeCape from "../../../Assets/Animations/Pages/compiled/HOMME_CAPE_loop.png";
import hommeBrasLeve from "../../../Assets/Animations/Pages/compiled/HOMME_BRAS_LEVE_loop.png";
import arbre from "../../../Assets/Images/Pages/Page1/ARBRE.png";
import paysanne from "../../../Assets/Animations/Pages/compiled/PAYSANNE_loop.png";
import group4 from "../../../Assets/Animations/Pages/compiled/GROUPE_04_loop.png";
import drapo from "../../../Assets/Images/Pages/Page1/DRAPEAU.png";
import ApngPlayer from "../../ApngPlayer/ApngPlayer";

const {height, width} = Dimensions.get('window');
const styles ={
    container: {
        flex: 1,
        flexDirection: "row",
        width: width,
        height: height
    },
    image: {
        position: "absolute",
        left: 0,
        top: 0,
        width: width,
        height: height,
        alignSelf: "flex-end"
    }
};
/*

 */
export class Page1 extends React.Component {
    render() {
        return (
            <Overlay {...this.props} wordList={words}>
                <View style={styles.container}>

                    <Sky/>
                    <Image
                        style={{
                            position: "absolute",
                            left: 748,
                            top: 140,
                            width: 135,
                            height: 135
                        }}
                        resizeMode={"contain"}
                        source={drapo}/>
                    <ApngPlayer
                        style={{
                            position: "absolute",
                            left: 930,
                            top: 99
                        }}
                        maxFrameSize={310}
                        playlist={[chateauAnim]}/>
                    <Image
                        source={Decor}
                        style={styles.image}
                        resizeMode={"contain"}
                        resizeMethod={"scale"}
                    />

                    <ApngPlayer
                        style={{
                            position: "absolute",
                            left: -12,
                            top: 561
                        }}
                        maxFrameSize={266}
                        playlist={[group1]}/>
                    <ApngPlayer
                        style={{
                            position: "absolute",
                            left: 237,
                            top: 552
                        }}
                        maxFrameSize={289}
                        playlist={[group2]}/>
                    <ApngPlayer
                        style={{
                            position: "absolute",
                            left: 471,
                            top: 484
                        }}
                        maxFrameSize={155}
                        playlist={[group3]}/>
                    <ApngPlayer
                        style={{
                            position: "absolute",
                            left: 813,
                            top: 359
                        }}
                        maxFrameSize={325}
                        playlist={[hommeColine]}/>
                    <ApngPlayer
                        style={{
                            position: "absolute",
                            left: 479,
                            top: 560
                        }}
                        maxFrameSize={172}
                        playlist={[hommeCape]}/>
                    <ApngPlayer
                        style={{
                            position: "absolute",
                            left: 109,
                            top: 535
                        }}
                        maxFrameSize={289}
                        playlist={[hommeBrasLeve]}/>

                    <Image
                        style={{
                            position: "absolute",
                            left: 424,
                            top: 479,
                            width: 75,
                            height: 75,
                        }}
                        resizeMode={"contain"}
                        source={arbre}/>
                    <ApngPlayer
                        style={{
                            position: "absolute",
                            left: 377,
                            top: 511
                        }}
                        maxFrameSize={67}
                        playlist={[paysanne]}/>

                    <ApngPlayer
                        style={{
                            position: "absolute",
                            left: 654,
                            top: 490
                        }}
                        maxFrameSize={182}
                        playlist={[group4]}/>




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