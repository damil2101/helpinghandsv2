namespace HelpingHands.api.Dtos
{
    public class StripePayment
    {
        public string TokenId { get; set; }
        public string ProductName { get; set; }
        public int Amount { get; set; }
    }
}