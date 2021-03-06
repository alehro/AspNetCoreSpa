﻿using AspNetCoreSpa.Core.Entities;
using AutoMapper;

namespace AspNetCoreSpa.Core.ViewModels
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Customer, CustomerDto>()
                .ReverseMap();

            CreateMap<Product, ProductDto>()
                .ReverseMap();

            CreateMap<ProductCategory, ProductCategoryViewModel>()
                .ReverseMap();

            CreateMap<Order, OrderDto>()
                .ReverseMap();
        }
    }
}
