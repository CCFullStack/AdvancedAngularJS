using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WelcomeToAngular.Models;

namespace WelcomeToAngular.API {
    public class FoodController : ApiController {
        public static IList<Food> FOODS = new List<Food> {
                new Food { Id = 1, Name = "Milk", Price = 2.33m },
                new Food { Id = 2, Name = "Eggs", Price = 1.33m },
                new Food { Id = 3, Name = "Marzipan", Price = 5.00m },
                new Food { Id = 4, Name = "Cheese", Price = 3.00m }
            };

        [Route("api/food/GetFoodList", Name = "GetFoodList")]
        public IEnumerable<Food> Get() {
            return (from f in FOODS
                    where f != null
                    select f).ToList();
        }

        [Route("api/food/GetFoodItem/{id}", Name = "GetFoodItem")]
        public Food Get(int id) {
            return (from f in FOODS
                    where f.Id == id
                    select f).FirstOrDefault();
        }

        public HttpResponseMessage Post(Food food) {
            if (ModelState.IsValid) {
                if (food.Id == 0) {
                    food.Id = FOODS.Count + 1;
                    FOODS.Add(food);
                }
                else {
                    Food f = FOODS[food.Id - 1];
                    f.Name = food.Name;
                    f.Price = food.Price;
                }
                return Request.CreateResponse(HttpStatusCode.OK, food);
            }
            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, this.ModelState);
        }

        public void Delete(int id) {
            // Delete from the database
            FOODS[id - 1] = null;
        }
    }
}
