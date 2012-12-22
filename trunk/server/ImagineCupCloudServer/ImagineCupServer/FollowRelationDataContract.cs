using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ServiceModel;
using System.Runtime.Serialization;

namespace ImagineCupServer
{
    [DataContract(Namespace = "")]
    public class FollowRelationDataContract
    {
        [DataMember]
        public String FromUser { get; set; }

        [DataMember]
        public string fromRole { get; set; }

        [DataMember]
        public String ToUser { get; set; }

        [DataMember]
        public string ToRole { get; set; }
    }
}