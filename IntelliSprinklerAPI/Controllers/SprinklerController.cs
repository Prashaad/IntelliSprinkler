using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Sprinkler.Data;

namespace Sprinkler.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SprinklerController : ControllerBase
    {
        [Route("[action]")]
        [ActionName("Ping")]
        [HttpGet]
        public IActionResult Ping()
        {
            return Ok("I'm Alive");
        }

        [Route("[action]")]
        [ActionName("GetAllSprinklers")]
        [HttpGet]
        public IActionResult GetAllSprinklers()
        {
            return Ok(DataStore.Sprinklers);
        }

        [Route("[action]")]
        [ActionName("AddSprinkler")]
        [HttpPost]
        public IActionResult AddSprinkler(Sprinkler.Data.Sprinkler sprinkler)
        {
            DataStore.Sprinklers.Add(sprinkler);

            return Ok(DataStore.Sprinklers);
        }

        [Route("[action]")]
        [ActionName("DeleteSprinkler")]
        [HttpPost]
        public IActionResult DeleteSprinkler(Sprinkler.Data.Sprinkler sprinkler)
        {
            DataStore.Sprinklers.RemoveAll(x => x.Id == sprinkler.Id);

            return Ok(DataStore.Sprinklers);
        }

        [Route("[action]")]
        [ActionName("AddSampleSprinklers")]
        [HttpGet]
        public IActionResult AddSampleSprinklers()
        {
            var sprinkler1 = new Sprinkler.Data.Sprinkler
            {
                Id = "1",
                Name = "Sprinkler 1",
                Description = "Carrot Plot Right"
            };

            var sprinkler2 = new Sprinkler.Data.Sprinkler
            {
                Id = "2",
                Name = "Sprinkler 2",
                Description = "Carrot Plot Middle"
            };

            var sprinkler3 = new Sprinkler.Data.Sprinkler
            {
                Id = "3",
                Name = "Sprinkler 3",
                Description = "Carrot Plot Left"
            };

            DataStore.Sprinklers.Add(sprinkler1);
            DataStore.Sprinklers.Add(sprinkler2);
            DataStore.Sprinklers.Add(sprinkler3);

            return Ok(DataStore.Sprinklers);
        }
    }
}
