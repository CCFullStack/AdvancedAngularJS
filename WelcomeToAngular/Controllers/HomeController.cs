using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WelcomeToAngular.Controllers {
    public class HomeController : Controller {
        public ActionResult Index() {
            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult FavoriteColor() {
            return View();
        }

        public ActionResult TwoWayBinding() {
            return View();
        }

        public ActionResult Calculator() {
            return View();
        }
        public ActionResult Validation() {
            return View();
        }
    }
}
