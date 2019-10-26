

## TODO

- untangele tsgenerator from the web example
- Continue working to deliver the generator as nuget package

## Done 

- merge app to lib
- config file at solution dir 
- Pass ts header file as argument
- Ts generator works with for the site. Tested on couple of dto files
- Running ts generator as part of dotnet watch: c:\work\my\AspCoreAngularTemplate\src\AspNetCoreSpa.Web>dotnet watch msbuild /t:TsGenerateAndRun

## Obsolete

- Integrate dto.ts generation into npm start. Use parallel shell.
- UPDATE: use dotnet watch instead of gulp. We are monitoring cs files after all.
- UPDATE 2: reuse the old approach: add ts generator project as dependency to the web project. this will make dotnet watch to execute the ts generators post build step. But it won't work!! because here ts generator depends on the web....

## Notes
- !! Runnding several commands from dotnet watch: c:\work\my\AspCoreAngularTemplate\src\AspNetCoreSpa.Web>dotnet watch msbuild /t:TsGenerateAndRun