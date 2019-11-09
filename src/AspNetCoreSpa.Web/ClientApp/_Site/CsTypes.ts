export type TestType = number;

export type Gender = any
export type DateTimeOffset = Date
//unfortunately interface merging to Array doesn't really work. So, we need to play with the collections coming from c#
export type ArrayExt<T> = Array<T> & { Sum(selector: (a: T) => number): number; };
export type ICollection<T> = ArrayExt<T>;
export type IEnumerable<T> = ArrayExt<T>;
export type IList<T> = ArrayExt<T>;
export type List<T> = ArrayExt<T>;
export type Dictionary<T1, T2> = any;

//utility function, https://basarat.gitbooks.io/typescript/docs/types/literal-types.html 
export function strEnum<T extends string>(o: Array<T>): { [K in T]: K
} {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}
/*Interface merge doesn't work. Produces crazy errors.
 * export interface Array<T> {
    Sum(selector: (a: T) => number): number;
}*/
Array.prototype["Sum"] = function <T>(this: T[], selector: (a: T) => number) {
    return this.reduce((prev, cur) => {
        return prev + selector(cur);
    }, 0);
};
//if we don't invoke anything from file then the TS gets compiled but it doesn't guarantie that the JS file is included. I presume because of tree shaking procedure. So, let's make sure the file gets not shaken out.
export var makeSureFileLoaded = () => {
    let v1 = 1;
    let v2 = 2;
};


