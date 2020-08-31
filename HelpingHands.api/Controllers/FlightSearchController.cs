using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using HelpingHands.api.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace HelpingHands.api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FlightSearchController:ControllerBase
    {
        private readonly IConfiguration _config;

        public FlightSearchController(IConfiguration config)
        {
            _config = config;
        }
        [HttpGet("{flightNumber}")]
        public async Task<IActionResult> GetFlights(string flightNumber)
        {
            string access_key = _config.GetValue<string>("FlightSearch:Accesskey");
            HttpClient client = new HttpClient();
            try
            {
                HttpResponseMessage response = await client.GetAsync("http://api.aviationstack.com/v1/flights?access_key="+access_key+"&flight_iata="+flightNumber+"&limit=3");
                string responseBody = await response.Content.ReadAsStringAsync();
                return Ok(responseBody);
            }
            catch (System.Exception ex)
            {
                client.Dispose();
                return Ok("No Flights found"+ex);
            }
            
        }

        [HttpGet("flightNumber/{flightNumber}/airportCode/{airportCode}")]
        public async Task<IActionResult> GetFlightsWithAirportCode(string flightNumber,string airportCode)
        {
            string access_key = "741baf5df2a68fd47b66967d719ec172";
            HttpClient client = new HttpClient();
            try
            {
                HttpResponseMessage response = await client.GetAsync("http://api.aviationstack.com/v1/flights?access_key="+access_key+"&flight_iata="+flightNumber+"&arr_iata="+airportCode+"&limit=3");
                string responseBody = await response.Content.ReadAsStringAsync();
                return Ok(responseBody);
            }
            catch (System.Exception ex)
            {
                client.Dispose();
                return Ok("No Flights found"+ex);
            }
            
        }
    }
}