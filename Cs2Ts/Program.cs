using System;

namespace Cs2Ts
{
    class Program
    {
        static void Main(string[] args)
        {
            if (args.Length != 1)
            {
                Console.WriteLine(@"Please specify absolute path to config file as first argument");
                throw new ArgumentException();
            }
            CSharpToTypescript.Runner.Run(args[0]);
        }
    }
}
