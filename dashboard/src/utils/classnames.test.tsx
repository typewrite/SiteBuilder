jest.unmock("..");

import {classnames} from "./classnames";

describe("classname util tests", () => {
    it("should return an empty string when class name is null or undefined", () => {
        expect(classnames(undefined as any)).toBe("");
        expect(classnames(null as any)).toBe("");
    });

    it("should return classname when valid class name is passed", () => {
        expect(classnames("testClass")).toBe("testClass");
    });

    it("should return classnames as a single string when array of classnames are given", () => {
        expect(classnames(["class1", "class2", "class3"])).toBe("class1 class2 class3");
    });

    it("should return classnames as a single string stripping out undefined and null values in an array", () => {
        expect(classnames(["class1", null as any, "class2", undefined as any, "class3"])).toBe("class1  class2  class3");
    });

    it("should return an empty string when falsy value is given", () => {
        expect(classnames({"someClass": false})).toBe("");
        expect(classnames([{"someclass": false}])).toBe("");
        expect(classnames({"undefined": true})).toBe("");
        expect(classnames([{"undefined": true}])).toBe("");
        expect(classnames({"null": true})).toBe("");
        expect(classnames([{"null": true}])).toBe("");
        expect(classnames({"someClass": null as any})).toBe("");
        expect(classnames([{"someClass": null as any}])).toBe("");
        expect(classnames({"someClass": undefined as any})).toBe("");
        expect(classnames([{"someClass": undefined as any}])).toBe("");
        expect(classnames({"someClass": undefined as any, "someOtherClass": false})).toBe("");
    });

    it("should return classNames if they are valid and truthy", () => {
        expect(classnames({"someClass": true})).toBe("someClass");
        expect(classnames([{"someClass": true}, {"someClass2": true}])).toBe("someClass someClass2");
        expect(classnames([{"someClass": true}, {"someClass2": false}])).toBe("someClass");
        expect(classnames([{"someClass": true}, {"someClass2": null as any}])).toBe("someClass");
        expect(classnames([{"someClass": undefined as any}, {"someClass2": true}])).toBe("someClass2");
    });
});
