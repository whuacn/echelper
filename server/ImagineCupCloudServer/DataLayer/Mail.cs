using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataLayer
{
    public class Mail
    {
        public string MailId { get; set; }
        public string Title { get; set; }
        public String Text { get; set; }
        public DateTime Time { get; set; }
        public bool FromTo { get; set; }
        public String PatientUsername { get; set; }
        public String DoctorUsername { get; set; }
        public String ReplyId { get; set; }
        public String ECG { get; set; }
    }
}
