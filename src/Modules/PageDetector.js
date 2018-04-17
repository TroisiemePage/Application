import {computed, observable} from "mobx";
import {NativeModules} from "react-native"
const Magnetometer = NativeModules.Magnetometer;
import {DeviceEventEmitter} from "react-native";


export class PageDetector {
    samples = [];
    resolution = 10;
    multiple = 10;
    step = 15;
    @observable currentPage = 0;
    prevMFValue = 0;
    prevStableMFValue = 0;
    @observable currentMFValue;
    @observable flatLength = 0;


    constructor() {
        Magnetometer.setMagnetometerUpdateInterval(0.1);
        DeviceEventEmitter.addListener('MagnetometerData', (data) => {
            this.currentMFValue = this.ceilingToMultiple(this.getAvergeMagneticField(data.magneticField), this.multiple);
            if(this.prevMFValue === 0) {
                this.prevMFValue = this.currentMFValue;
                this.prevStableMFValue = this.currentMFValue;
            }
            this.update();
        });
        Magnetometer.startMagnetometerUpdates();
    }

    reset() {
        this.samples = [];
        this.resolution = 10;
        this.multiple = 10;
        this.step = 15;
        this.currentPage = 0;
        this.flatLength = 0;

        this.prevMFValue = this.currentMFValue;
        this.prevStableMFValue = this.currentMFValue;
    }

    update() {
        if (this.isSignalStable()) {
            if (this.prevStableMFValue - this.currentMFValue >= this.step) {
                this.currentPage += Math.abs(this.prevStableMFValue - this.currentMFValue) / this.step;
            }

            if (this.prevStableMFValue - this.currentMFValue <= -this.step && this.currentPage >= Math.abs(this.prevStableMFValue - this.currentMFValue) / this.step) {
                this.currentPage -= Math.abs(this.prevStableMFValue - this.currentMFValue) / this.step;
            }
            this.currentPage = Math.round(this.currentPage);
            this.prevStableMFValue = this.currentMFValue;
        }

        this.prevMFValue = this.currentMFValue;

    }

    getAvergeMagneticField(data) {
        if (this.samples.length === this.resolution) {
            this.samples.shift()
        }

        this.samples.push(data.z);
        this.tempAverage = 0;
        for (let sample of this.samples) {
            this.tempAverage += sample;
        }

        return Math.abs(Math.round(this.tempAverage / this.samples.length));
    }

    ceilingToMultiple(data, multiple) {
        return Math.ceil(data / multiple) * multiple;
    }

    isSignalStable() {
        if (this.currentMFValue - this.prevMFValue > 0 || this.currentMFValue - this.prevMFValue < 0) {
            this.flatLength = 0;
        }
        else {
            this.flatLength++;
        }
        return this.flatLength > 25;
    }
}

