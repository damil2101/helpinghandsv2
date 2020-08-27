using System;

namespace HelpingHands.api.Dtos
{
    public class FlightSearchResult
    {
        public string Airline { get; set; }
        public string ArrivalAirportName { get; set; }  
        public string ArrivalAirportCode {get;set;}
        public string ArrivalTerminal { get; set; }
        public string  ArrivalGate{get;set;}
        public DateTime ArrivalTime { get; set; }

        public string DepartureAirportName { get; set; }
        public string DepartureAirportCode { get; set; }
        public string DepartureTerminal { get; set; }
        public string DepartureGate { get; set; }
        public DateTime DepartureTime { get; set; }
        public string FlightStatus { get; set; }
        public DateTime FlightDate { get; set; }
    }
}   