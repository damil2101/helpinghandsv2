using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HelpingHands.api.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Stripe;

namespace HelpingHands.api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StripePaymentController:ControllerBase
    {
        private readonly IConfiguration _config;

        public StripePaymentController(IConfiguration config)
        {
            _config = config;
        }
        [HttpPost]
        public async Task<IActionResult> StripePayment([FromBody] StripePayment paymentRequest)
        {
            StripeConfiguration.ApiKey = _config.GetValue<string>("Stripe:Accesskey");
            var myCharge = new ChargeCreateOptions();
            myCharge.Source = "tok_mastercard";
            myCharge.Amount = paymentRequest.Amount;
            myCharge.Currency = "cad";
            myCharge.Description = paymentRequest.ProductName;
            myCharge.Metadata = new Dictionary<string,string>();
            myCharge.Metadata["OurRef"] = "OurRef-" + Guid.NewGuid().ToString();

            var chargeService = new ChargeService();
            Charge stripeCharge = chargeService.Create(myCharge);

            return Ok(stripeCharge);
        }
    }
}