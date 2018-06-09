import {NativeModules} from "react-native"
const Magnetometer = NativeModules.Magnetometer;
import {DeviceEventEmitter} from "react-native";

export const PageDetector = new class PageDetector {
    step = 400;
    liftingRes = 10;
    liftingWindow = new Array(this.liftingRes).fill(0);
    lastStableValue = 0;
    stableSampleCounter = 0;
    currentPage = 0;
    listeners = [];
    
    constructor() {
        Magnetometer.setMagnetometerUpdateInterval(0.1);
        DeviceEventEmitter.addListener('MagnetometerData', (data) => {
            this.liftingWindow.push(Math.abs(Math.round(data.magneticField.z)));
            if(this.liftingWindow.length >= this.liftingRes) {
                const cleanSample = this.round(this.liftingWindow.reduce((a, c) => a + c) / this.liftingRes);
                console.log(cleanSample);
                let spikeDirection = this.spikeDetector(cleanSample);
                if((this.currentPage + spikeDirection) >= 0 && spikeDirection !== 0) {
                    this.currentPage += spikeDirection;
                    this.listeners.forEach((listener) => listener(this.currentPage));
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
        let returnValue;
        if(this.lastStableValue !== sample) {
            if(this.lastStableValue - sample === this.step) {
                returnValue = 1;
            } else {
                returnValue = -1;
            }
            this.lastStableValue = sample;
        } else {
            returnValue =  0;
        }
        return returnValue;
    }

    onPageChange(func) {
        return this.listeners.push(func);
    }

    removeListener(index) {
        this.listeners.splice(index, 1);
    }
};