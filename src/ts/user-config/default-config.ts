import { platform } from "os";
import { UserConfigOptions } from "./../user-config/user-config-options";
import { OperatingSystemHelpers } from "./../helpers/operating-system-helpers";
import { OperatingSystem } from "./../operating-system";
import { WindowsIconSet } from "./../icon-sets/windows-icon-set";
import { MacOsIconSet } from "./../icon-sets/mac-os-icon-set";
import { defaultWindowsApplicationFolders, defaultMacOsApplicationFolders } from "./default-application-folders";
import { defaultWindowsApplicationFileExtensions, defaultMacOsApplicationFileExtensions } from "./default-application-file-extensions";
import { defaultFileSearchOptions } from "./default-file-search-options";
import { defaultWebSearches } from "./default-web-searches";
import { defaultFeatures } from "./default-features";

export class DefaultUserConfigManager {
    public static getDefaultUserConfig(): UserConfigOptions {
        const currentOperatingSystem = OperatingSystemHelpers.getOperatingSystemFromString(platform());

        return {
            allowMouseInteraction: false,
            alwaysShowOnPrimaryDisplay: false,
            applicationFileExtensions: currentOperatingSystem === OperatingSystem.Windows ? defaultWindowsApplicationFileExtensions : defaultMacOsApplicationFileExtensions,
            applicationFolders: currentOperatingSystem === OperatingSystem.Windows ? defaultWindowsApplicationFolders : defaultMacOsApplicationFolders,
            autoStartApp: true,
            calculatorPrecision: 16,
            colorTheme: "dark",
            customCommands: [],
            features: defaultFeatures,
            fileSearchBlackList: [
                "vendor",
                "node_modules",
                "jspm_packages",
                "bower_components",
            ],
            fileSearchOptions: defaultFileSearchOptions,
            hotKey: "alt+space",
            iconSet: currentOperatingSystem === OperatingSystem.Windows ? WindowsIconSet : MacOsIconSet,
            logExecution: true,
            maxSearchResultCount: 8,
            rescanInterval: 60,
            searchEngineLimit: 16,
            searchEngineThreshold: 0.4,
            searchResultDescriptionFontSize: 14,
            searchResultHeight: 60,
            searchResultNameFontSize: 20,
            shortcuts: [],
            showConfirmationDialog: true,
            showSearchResultNumber: true,
            showTrayIcon: true,
            smoothScrolling: false,
            transparentWindow: false,
            useNativeIcons: true,
            userInputFontSize: 36,
            userInputHeight: 80,
            userStylesheet: "",
            webSearches:  defaultWebSearches,
            windowMaxHeight: 560,
            windowWidth: 720,
        };
    }
}
