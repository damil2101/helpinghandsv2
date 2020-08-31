using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HelpingHands.api.Dtos;
using Microsoft.AspNetCore.Mvc;
using Stripe;

namespace HelpingHands.api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StripePaymentController:ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> StripePayment([FromBody] StripePayment paymentRequest)
        {
            StripeConfiguration.ApiKey = "sk_test_51HMDtwGdSnL8QJo6P5x9LcJURpHDQsMvFKMbAsrMOtjRuJB4uoVtT3by4RX2zL5DEfql4pY7z1CD1IbVyW7VHpJw00FGhxemAH";
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