﻿using CSharpToTypescript;
using System;
using System.Linq;
using TypescriptSyntaxPaste;

namespace CSharpToTypescriptApp
{
    class Program
    {
        static void Main(string[] args)
        {
            if (args.Length < 2) {
                Console.WriteLine(@"Usage:
Put output folder path for ts files as first argument.
Put the list of folders with cs files as second and other arguments.
");
                throw new ArgumentException();
            }
            var outDir = args[0];
            var inDirs = args.Skip(1).ToArray();
            GlobalOptions.IdsToStrings = true;
            FilesProcessor.Process(inDirs, outDir,
                @"//Caution, this file is autogenerated by TsGenerator module. Don't change the file by hands.
import {ICollection, DateTimeOffset} from '../CsTypes'; 
");
            //TODO: get from cmd args
            //            FilesProcessor.Process(new[] { @"C:\work\my\CSharp2Typescript\CSharpToTypescriptApp\TestFiles", @"C:\work\my\CSharp2Typescript\CSharpToTypescriptApp\TestFiles2" }, @"C:\work\my\CSharp2Typescript\CSharpToTypescriptApp\_TsDtos",
            //                @"//Caution, this file is autogenerated by TsGenerator module. Don't change the file by hands.
            //import {ICollection, DateTimeOffset} from '../CsTypes'; 
            //");
        }
        static void Main_old(string[] args)
        {
            var cs = @"
using BaseNamespace.Subspace1;

public class ThisDTO : BaseDTO
{
    public int V1Id {get;set;}
    public V1 V1 {get;set;}
    public decimal Tax1 {get;set;}
    public static string Calc1(){
        return ""simple calculation"";
    }
    public decimal Calc2(){
        var v1 = 3;
        return Tax1*v1;
    }
}
";
            var ts = ConvertTestHelper.ConvertToTypescript(cs);
            if (string.IsNullOrWhiteSpace(ts)) throw new Exception("Conversion failed");
            Console.WriteLine("Test conversion succeded!");
            Console.ReadLine();
        }
    }
}
