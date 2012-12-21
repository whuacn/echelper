using System;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;
using System.Xml;
using System.Xml.Serialization;


namespace ECHelper2._0
{
    public class MailDataContract
    {
        [XmlElement("Title")]
        public string Title { get; set; }

        [XmlElement("Time")]
        public string Time { get; set; }

        [XmlElement("DoctorId")]
        public string DoctorId { get; set; }

        [XmlElement("PatientId")]
        public string PatientId { get; set; }

       

        [XmlElement("TextContent")]
        public string TextContent { get; set; }

        [XmlElement("MailId")]
        public string MailId { get; set; }

        [XmlElement("IsRead")]
        public string IsRead { get; set; }

        [XmlElement("FromOrTo")]
        public string FromOrTo { get; set; }

        [XmlElement("ECG")]
        public string ECG { get; set; }

  



    }
}
