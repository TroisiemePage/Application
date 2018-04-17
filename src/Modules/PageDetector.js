import {computed, observable} from "mobx";
import {NativeModules} from "react-native"
const Magnetometer = NativeModules.Magnetometer;
import {DeviceEventEmitter} from "react-native";


export class PageDetector {
    step = 20;
    liftingRes = 10;
    liftingWindow = new Array(this.liftingRes).fill(0);
    lastStableValue = 0;
    stableSampleCounter = 0;
    @observable currentPage = 0;


    constructor() {
        Magnetometer.setMagnetometerUpdateInterval(0.1);
        DeviceEventEmitter.addListener('MagnetometerData', (data) => {
            this.liftingWindow.push(Math.abs(Math.round(data.magneticField.z)));
            if(this.liftingWindow.length >= 5) {
                const cleanSample = this.round(this.liftingWindow.reduce((a, c) => a + c) / this.liftingRes)
                let spikeDiretion = this.spikeDetector(cleanSample);
                if(spikeDiretion === 0){
                    this.stableSampleCounter++;
                }
                if(this.stableSampleCounter > 25 && this.currentPage >= 0) {
                    this.currentPage += spikeDiretion;
                }
                this.liftingWindow.shift();
            }
        });
        Magnetometer.startMagnetometerUpdates();
    }

    round(liftedSample) {
        return Math.ceil(liftedSample / this.step) * this.step;
    }

    spikeDetector(sample) {
        if(this.lastStableValue !== sample) {
            if(this.lastStableValue - sample === this.step) {
                this.lastStableValue = sample;
                return 1;
            } else {
                this.lastStableValue = sample;
                return -1;
            }
        } else {
            return 0;
        }
    }

}

