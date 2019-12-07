

## TODO

- instantiation of List, Dictionary, in ctors. string.Format.
//Caution, extend with caution: (https://github.com/Microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work).
class ArrayExt<T> extends Array<T> {
    constructor(...items: Array<T>) {
        super(...items);
        Object.setPrototypeOf(this, Object.create(ArrayExt.prototype));
    }
    Sum = function <T>(this: T[], selector: (a: T) => number) {
        return this.reduce((prev, cur) => {
            return prev + selector(cur);
        }, 0);
    };
    //Sum = <T>(selector: (a: T)=>number) =>{
    //    return this.reduce((prev, cur) => {
    //        return prev + selector(cur);
    //    }, 0);
    //};
    //logCount() {
    //    console.log("Count: " + this.length)
    //}
}


export type ICollection<T> = ArrayExt<T>;
export type IEnumerable<T> = ArrayExt<T>;
export type IList<T> = ArrayExt<T>;
export class List<T> extends ArrayExt<T>{
    constructor(...items: Array<T>) {
        super(...items);
        Object.setPrototypeOf(this, Object.create(List.prototype));
    }
}
- tell in docs about not seeng output while in watch mode is Okay
- tell about CsTypes

## Done 

- ? more elaborated test cases, clean up.
- do batle testing with all possible cases - TsGenerator2
- update nuget package: its version to 1.0 and add usage to it
- make simple console proeject, add cs2ts as dep, use it
- used nuget.config to set local packages folder: VS2017 uses nuget 4.6 which cannot use   GeneratePathProperty="true" property. So, we cannot copy the tsgen dll to bin and then reference with relative path.
- Continue working to deliver the generator as nuget package
- untangle tsgenerator from the web example
- merge app to lib
- config file at solution dir 
- Pass ts header file as argument
- Ts generator works with for the site. Tested on couple of dto files
- Running ts generator as part of dotnet watch: c:\work\my\AspCoreAngularTemplate\src\AspNetCoreSpa.Web>dotnet watch msbuild /t:TsGenerateAndRun

## Obsolete

- desided to use exe wrapper for the library: include deps manually in nuspec? https://stackoverflow.com/questions/16173568/build-nuget-package-automatically-including-referenced-dependencies
dotnet publish and then use those files.
- ! the executable cannot load any dependencies because they are not nearby

- Integrate dto.ts generation into npm start. Use parallel shell.
- UPDATE: use dotnet watch instead of gulp. We are monitoring cs files after all.
- UPDATE 2: reuse the old approach: add ts generator project as dependency to the web project. this will make dotnet watch to execute the ts generators post build step. But it won't work!! because here ts generator depends on the web....

## Notes
- to work with local version of Cs2Ts it is better to use separate configuration: 
	AspCoreAngularTemplate\src\AspNetCoreSpa.Web>dotnet watch run --configuration DebugCs2Ts
- !! Runnding several commands from dotnet watch: c:\work\my\AspCoreAngularTemplate\src\AspNetCoreSpa.Web>dotnet watch msbuild /t:TsGenerateAndRun
- https://natemcmaster.com/blog/2017/11/11/build-tools-in-nuget/