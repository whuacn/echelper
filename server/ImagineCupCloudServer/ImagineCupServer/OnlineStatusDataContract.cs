using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;

namespace ImagineCupServer
{
    [DataContract(Namespace = "")]
    public class OnlineStatusDataContract
    {
        [DataMember]
        public string UserName { get; set; }
        [DataMember]
        public double Longtitude { get; set; }
        [DataMember]
        public double Latitude { get; set; }
       
    }
}