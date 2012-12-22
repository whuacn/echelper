using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;

namespace ImagineCupServer
{
    [DataContract(Namespace = "")]
    public class AddFriends
    {
        [DataMember]
        public string UserID { get; set; }
    }
}