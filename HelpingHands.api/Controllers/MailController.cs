using System.Net.Mail;
using System.Text.Unicode;
using System.Threading.Tasks;
using HelpingHands.api.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace HelpingHands.api.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class MailController : Controller
    {
        private SmtpClient smtpClient;
        public MailController(SmtpClient smtpClient)
        {
            this.smtpClient = smtpClient;
        }
        [HttpPost]
        public async Task<IActionResult> SendMail([FromBody] Mail email)
        {
           var mailMessage = new MailMessage();
           mailMessage.From = new MailAddress(email.Email);
           mailMessage.To.Add("damil51981@gmail.com");
           mailMessage.Body = email.Message;
           mailMessage.Subject = "Inquiry for Helping Hands Service: "+email.Name;
           mailMessage.BodyEncoding = System.Text.Encoding.UTF8;
           mailMessage.SubjectEncoding = System.Text.Encoding.UTF8;
           
           await smtpClient.SendMailAsync(mailMessage);
        
           var confirmationMessage = new MailMessage();
           confirmationMessage.From = new MailAddress("damil51981@gmail.com");
           confirmationMessage.To.Add(email.Email);
           confirmationMessage.IsBodyHtml = true;
           confirmationMessage.Body = "<p>Hi "+email.Name+" Thank you for contacting Helping Hands. Our team will contact you shortly.</p><br><br><p>Thanks,</p><br><p>Team Helping Hands inc.</p>";
           confirmationMessage.Subject = "Helping Hands";
           confirmationMessage.BodyEncoding = System.Text.Encoding.UTF8;
           confirmationMessage.SubjectEncoding = System.Text.Encoding.UTF8;

           await smtpClient.SendMailAsync(confirmationMessage);
           

           return Ok("Email sent");
        }

        //If we do not use SmtpClient for a call in this controller, we will have an instance
        // created and disposed for nothing. this is a bit of overhead
        protected override void Dispose(bool disposing)
        {
            this.smtpClient.Dispose();
            base.Dispose(disposing);
        }
    }
}