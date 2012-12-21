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
using System.Collections.ObjectModel;

namespace ECHelper2._0
{
    [XmlRoot("root")]
    //[XmlArray("ArrayOfMailDataContract")]
    public class ArrayOfMailDataContract
    {
        [XmlArray("ArrayOfMailDataContract")]
        [XmlArrayItem("MailDataContract")]
        public ObservableCollection<MailDataContract> Collection { get; set; }

    }
}
