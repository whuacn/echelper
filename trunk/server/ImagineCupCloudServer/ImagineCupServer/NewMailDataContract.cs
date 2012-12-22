using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;
namespace ImagineCupServer
{
    [DataContract(Namespace = "")]
    public class NewMailDataContract
    {
        [DataMember]
        public string Title { get; set; }
        [DataMember]
        public String TextContent { get; set; }
        [DataMember]
        public DateTime Time { get; set; }
        [DataMember]
        public int FromOrTo { get; set; }
        [DataMember]
        public String PatientId { get; set; }
        [DataMember]
        public String DoctorId { get; set; }
        [DataMember]
        public String ECG { get; set; }
    }
}