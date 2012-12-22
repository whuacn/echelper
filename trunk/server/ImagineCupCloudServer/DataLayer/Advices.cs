using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataLayer
{
    public class Advices
    {
        public string AdviceId { get; set; }
        public String Text { get; set; }
        public DateTime Time { get; set; }
        public String TopicId { get; set;}
        public String UserName { get; set; }
    }
}
