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
using System.Collections.ObjectModel;

namespace ECHelper2._0
{
    [XmlRoot("PatientUserDataContract")]
    public class PatientUserDataContract
    {
        [XmlElement("Age")]
        public string Age { get; set; }

        [XmlElement("Allery")]
        public string Allery { get; set; }

        [XmlElement("Description")]
        public string Description { get; set; }

        [XmlElement("Gender")]
        public string Gender { get; set; }

        [XmlElement("NickName")]
        public string NickName { get; set; }

        [XmlElement("UserName")]
        public string UserName { get; set; }

        //public string Age { get; set; }
        //public string Allergy { get; set; }
        //public string Description { get; set; }
        //public string Gender { get; set; }
        //public string NickName { get; set; }
        //public string UserName { get; set; }

    }
}
