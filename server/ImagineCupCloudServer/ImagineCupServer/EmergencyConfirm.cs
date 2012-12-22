using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;
namespace ImagineCupServer
{
    [DataContract(Namespace = "")]
    public class EmergencyConfirm
    {
        [DataMember]
        public string doctorID;
        [DataMember]
        public double latitude;
        [DataMember]
        public double longitude;
        [DataMember]
        public string confirm;
    }
}