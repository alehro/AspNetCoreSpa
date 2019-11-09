﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace AspNetCoreSpa.Core.ViewModels
{
    public class CustomerDto
    {
        // Not required since this is not populated during put 
        public int Id { get; set; }
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
        [Required]
        public string City { get; set; }
        [Required]
        public Gender Gender { get; set; }

        public ICollection<OrderDto> Orders { get; set; }

        public decimal TotalPrice() {
            return Orders.Sum(i=>i.Price);
        }
    }
}
