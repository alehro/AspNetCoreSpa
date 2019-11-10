using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace AspNetCoreSpa.Core.ViewModels
{
   
    [TranspilesToEnum]
    /*Why use strings instead of enums: https://softwareengineering.stackexchange.com/questions/284530/why-store-flags-enums-in-a-database-as-strings-instead-of-integers
     * https://stackoverflow.com/questions/14893005/using-integer-vs-string-for-a-type-value-database-and-class-design
     * Or just trust me
    */
    public class GenderDtoe {
        public const string None = "None";
        public const string Male = "Male";
        public const string Female = "Female";
    }
    public class CustomerDto : BaseDto
    {       
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime DateOfBirth { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string Address { get; set; } 
        //[Required]
        public string City { get; set; }
        [Required]
        //public Gender Gender { get; set; }
        public string Gender { get; set; }

        public ICollection<OrderDto> Orders { get; set; }

        public decimal TotalPrice() {
            return Orders.Sum(i=>i.Price);
        }
    }
}
