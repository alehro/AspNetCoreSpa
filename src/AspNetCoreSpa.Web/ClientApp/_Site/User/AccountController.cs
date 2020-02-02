using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNetCoreSpa.Core.ViewModels;
using AspNetCoreSpa.Web.Controllers.api;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreSpa.Web
{
    [Authorize]
    public class AccountController : BaseController
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public AccountController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }
        [HttpGet]
        public IActionResult Get()
        {
            //var res = _context.Set<Customer>().Include(i => i.Orders);

            //var allCustomers = _uow.Customers.GetAll();
            return Ok();
        }
        //[HttpGet("Register")]
        //[AllowAnonymous]
        //public IActionResult Register()
        //{
        //    return View();
        //}

        [HttpPost("Register")]
        [AllowAnonymous]
        public IActionResult Register(RegisterViewModel model)
        {
            if (!ModelState.IsValid)
                return View(model);

            var result = _userManager.CreateAsync(new ApplicationUser() { Email = model.Email, UserName = model.Email }, model.Password).Result;

            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("Password", error.Description);
                }
                throw new Exception("Registration failed");
                //return View(model);
            }
            return Ok();
            //return RedirectToAction("Index", "Home");
        }

        //[HttpGet("Login")]
        //[AllowAnonymous]
        //public IActionResult Login()
        //{
        //    return View();
        //}

        [HttpPost("Login")]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public IActionResult Login(LoginViewModel model)
        {
            if (!ModelState.IsValid)
                return View(model);

            var result = _signInManager.PasswordSignInAsync(model.Email, model.Password, false, false).Result;
            if (!result.Succeeded)
            {
                ModelState.AddModelError(string.Empty, "Invalid login attempt.");
                return View(model);
            }

            return RedirectToAction("Index", "Item");
        }

        [HttpPost("Logout")]
        [ValidateAntiForgeryToken]
        public IActionResult Logout()
        {
            _signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }
    }
}
