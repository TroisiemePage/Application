import React, {Component} from 'react';
import ReactNative, {View} from 'react-native';
import resolveAssetSource from "resolveAssetSource";
import PropTypes from "prop-types";
const ApngPlayerNative = ReactNative.requireNativeComponent("ApngPlayer", ApngPlayer);



export default class ApngPlayer extends Component {

    static propTypes = {
        playlist: PropTypes.arrayOf(PropTypes.number).isRequired,
        scale: PropTypes.number.isRequired
    };

    state = {
        playlistIndex: 0
    };
    render() {
        const playlist = this.props.playlist.map((source) => resolveAssetSource(source));
        return (
            <View style={{...this.props.style, width: playlist[this.state.playlistIndex].width * this.props.scale, height: playlist[this.state.playlistIndex].height * this.props.scale}}>
                <ApngPlayerNative
                    style={{width: playlist[this.state.playlistIndex].width * this.props.scale, height: playlist[this.state.playlistIndex].height * this.props.scale}}
                    source={playlist[this.state.playlistIndex].uri}
                    onFinish={() => {
                        if(playlist.length - 1 > this.state.playlistIndex) {
                            this.setState({
                                playlistIndex: this.state.playlistIndex + 1
                            })
                        }
                    }}
                />
            </View>

        );
    }
}
