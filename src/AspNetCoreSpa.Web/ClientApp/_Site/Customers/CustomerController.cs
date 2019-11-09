using System.Collections.Generic;
using AspNetCoreSpa.Core.Entities;
using AspNetCoreSpa.Core.ViewModels;
using AspNetCoreSpa.Infrastructure;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AspNetCoreSpa.Web.Controllers.api
{
    public class CustomerController : BaseController  
    {
        readonly ApplicationDbContext _context;

        private readonly IUnitOfWork _uow;
        public CustomerController(IUnitOfWork uow, ApplicationDbContext context) 
        {
            _uow = uow;
            _context = context;
        }
        // GET: api/Customers
        [HttpGet] 
        public IActionResult Get()
        {
            var res = _context.Set<Customer>().Include(i => i.Orders);

            //var allCustomers = _uow.Customers.GetAll();
            return Ok(Mapper.Map<IEnumerable<CustomerDto>>(res));
        }

        // GET: api/Customers/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var customer = _uow.Customers.Get(id);
            return Ok(Mapper.Map<CustomerDto>(customer));
        }

        // POST: api/Customers
        [HttpPost]
        public void Post([FromBody] CustomerDto customer)
        {
            _uow.Customers.Add(Mapper.Map<Customer>(customer));
            _uow.SaveChanges();
        }

        // PUT: api/Customers/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] CustomerDto customer)
        {
            var cust = _uow.Customers.Get(id);
            cust.Name = customer.Name;
            cust.DateOfBirth = customer.DateOfBirth;
            cust.Gender = customer.Gender;
            cust.Address = customer.Address;
            cust.City = customer.City;
            cust.Email = customer.Email;
            cust.PhoneNumber = customer.PhoneNumber;
            _uow.Customers.Update(cust);
            var result = _uow.SaveChanges();
        }

        // DELETE: api/Customers/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _uow.Customers.Remove(_uow.Customers.Get(id));
            _uow.SaveChanges();
        }
    }
}
