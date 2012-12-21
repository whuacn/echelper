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
  //  [XmlRoot("EmergencyMesg")]

    public class EmergencyMesg
    {
        //[XmlElement("patientID")]
        public string patientName { get; set; }


        //[XmlElement("latitude")]
        public string latitude { get; set; }


        //[XmlElement("longitude")]
        public string longitude { get; set; }
    }
}
