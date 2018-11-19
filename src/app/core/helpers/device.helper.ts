import { Injectable } from '@angular/core';

import { NavigatorHelper } from './navigator.helper';

const IOS: any = NavigatorHelper.getUserAgent(/iPhone|iPad|iPod/i);
const IPAD: any = NavigatorHelper.getUserAgent(/iPad/i);
const IPHONE: any = NavigatorHelper.getUserAgent(/iPhone/i);
const ANDROID: any = NavigatorHelper.getUserAgent(/Android/i);
const ANDROID_MOBILE: any = NavigatorHelper.getUserAgent(/Mobile/i);
// WPDesktop is used on window mobile with desktop mode active
const IEMOBILE: any = NavigatorHelper.getUserAgent(/IEMobile|WPDesktop/i);
// For Windows SO with touch events
const WIN_TOUCH = NavigatorHelper.getUserAgent(/Touch/i);

@Injectable()
export class DeviceHelper {

    constructor() { }

    public static getDevice(): string {
        return NavigatorHelper.getUserAgent()[0];
    }

    public static isIos(): boolean {
        return IOS && IOS.length > 0 || false;
    }

    public static isIpad(): boolean {
        return IPAD && IPAD.length > 0 || false;
    }

    public static isIphone(): boolean {
        return IPHONE && IPHONE.length > 0 || false;
    }

    public static isAndroid(): boolean {
        return ANDROID && ANDROID.length > 0 || false;
    }

    public static isWindowsPhone(): boolean {
        return IEMOBILE && IEMOBILE.length > 0 || false;
    }

    public static isWindowsTouch(): boolean {
        return WIN_TOUCH && WIN_TOUCH.length > 0 || false;
    }

    public static isTablet(): boolean {
        return ((DeviceHelper.isAndroid() && !ANDROID_MOBILE) // Is android but not a mobile
            || DeviceHelper.isIpad()
            || (DeviceHelper.isWindowsTouch() && !IEMOBILE)); // Is touch but not a mobile
    }

    public static isMobile(): boolean {
        return DeviceHelper.isIphone() || DeviceHelper.isAndroid() || DeviceHelper.isWindowsPhone();
    }

    public static isDesktop(): boolean {
        return !DeviceHelper.isMobile();
    }
}
