interface classObj {
    [key: string]: boolean;
}

type classNameType = string | classObj;

type classnames = classNameType | classNameType[];

const isValidString = (string: string): boolean => 
    string !== undefined && string !== "undefined" && string !== null && string !== "null";

const objectToClassName = (name: classObj, defaultVal: string = "") => {
    return Object.keys(name).map((key: string) => {
        const clsString = name as classObj;
        if (isValidString(key) && clsString[key]) {
            return key;
        } else {
            return defaultVal;
        }
    }).join(" ").trim();
}

/**
 * "classname" is a normalizing method for classNames. It will strip out null & undefined
 * values from your classNames, keeping them clean.
 *
 * @param classNames - A single className or an array of classNames or an object of type { className: boolean }.
 * @param defaultVal - Default value to be used if given className(s) are undefined or null.
 */
export const classnames = (name: classnames, defaultVal: string = ""): string => {
    if (Array.isArray(name)) {
        const classNameArr = name as Array<(classNameType)>;
        return classNameArr.map((classNameStrOrObj: classNameType) => {
            return classnames(classNameStrOrObj, defaultVal);
        }).join(" ").trim();

    } else if (typeof name === "object" && name !== null) {
        return objectToClassName(name as classObj);
    } else if (!isValidString(name)) {
        return defaultVal;
    } else {
        return name;
    }
};
