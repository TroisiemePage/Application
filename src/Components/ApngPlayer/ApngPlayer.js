import React, {Component} from 'react';
import ReactNative, {TouchableWithoutFeedback, View} from 'react-native';
import resolveAssetSource from "resolveAssetSource";
import PropTypes from "prop-types";

const ApngPlayerNative = ReactNative.requireNativeComponent("ApngPlayer", ApngPlayer);


export default class ApngPlayer extends Component {

    static propTypes = {
        playlist: PropTypes.arrayOf(PropTypes.number).isRequired,
        scale: PropTypes.number,
        maxFrameSize: PropTypes.number
    };

    state = {
        playlistIndex: 0
    };

    render() {
        const playlist = this.props.playlist.map((source) => resolveAssetSource(source));
        let scale = 1;
        if (this.props.maxFrameSize !== void 0) {
            if (playlist[this.state.playlistIndex].width > playlist[this.state.playlistIndex].height) {
                scale = this.props.maxFrameSize/ playlist[this.state.playlistIndex].width
            } else {
                scale = this.props.maxFrameSize / playlist[this.state.playlistIndex].height
            }
        } else {
            scale = this.props.scale;
        }

        console.log("SCALE", scale);

        return (<View
                style={{
                    ...this.props.style,
                    width: playlist[this.state.playlistIndex].width * scale,
                    height: playlist[this.state.playlistIndex].height * scale
                }}>
                <TouchableWithoutFeedback onPress={() => {
                    if (this.props.onPress !== void 0) {
                        this.props.onPress();
                    }
                }}>
                    <ApngPlayerNative
                        style={{
                            width: playlist[this.state.playlistIndex].width * scale,
                            height: playlist[this.state.playlistIndex].height * scale
                        }}
                        source={playlist[this.state.playlistIndex].uri}
                        onFinish={() => {
                            if (playlist.length - 1 > this.state.playlistIndex) {
                                this.setState({
                                    playlistIndex: this.state.playlistIndex + 1
                                });
                            }
                            if (this.props.onPlaylistItemFinish) {
                                this.props.onPlaylistItemFinish(this.state.playlistIndex);
                            }
                        }}
                        onStartShouldSetResponder={() => true}
                    />
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
