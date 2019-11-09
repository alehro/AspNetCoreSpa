namespace AspNetCoreSpa.Core.ViewModels
{
    public class OrderDto: BaseDto
    {
        public decimal Price { get; set; }
        public decimal Discount { get; set; }
        public string Comments { get; set; }
    }
}
