using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;

namespace ImagineCupServer
{
    [DataContract(Namespace = "")]
    public class EmergencyMesg
    {
        [DataMember(IsRequired = true, Order = 0)]
        public string patientID;
        [DataMember(IsRequired = true, Order = 1)]
        public double latitude;
        [DataMember(IsRequired = true, Order = 2)]
        public double longitude;
    }
}