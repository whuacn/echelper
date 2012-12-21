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
using System.Xml.Linq;
using System.Xml.Serialization;

namespace ECHelper2._0
{
    [XmlRoot("DoctorUserDataContract")]

    public class DoctorUserDataContract
    {
        [XmlElement("Description")]
        public string Description { get; set; }

        [XmlElement("NickName")]
        public string NickName { get; set; }

        [XmlElement("UserName")]
        public string UserName { get; set; }

        [XmlElement("email")]
        public string email { get; set; }

        [XmlElement("phone")]
        public string phone { get; set; }

        [XmlElement("image")]
        public string image { get; set; }

        [XmlElement("Grade")]
        public string Grade { get; set; }
    }
}
