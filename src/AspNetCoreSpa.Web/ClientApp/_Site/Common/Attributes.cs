using System;

namespace AspNetCoreSpa.Core.ViewModels
{
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = false)]
    public class DontHashIdAttribute : Attribute
    {
    }
    [AttributeUsage(AttributeTargets.Class, AllowMultiple = false)]
    public class DontConvertToCamelCaseAttribute : Attribute
    {
    }
    [AttributeUsage(AttributeTargets.Class, AllowMultiple = false)]
    public class TranspilesToEnumAttribute : Attribute
    {
    }
}
