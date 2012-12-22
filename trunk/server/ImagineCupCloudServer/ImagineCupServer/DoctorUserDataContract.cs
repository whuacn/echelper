using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;

namespace ImagineCupServer.DataContracts
{

       [DataContract(Namespace = "")]
       public class DoctorUserDataContract
        {
           [DataMember]
           public string UserName { get; set; }

          // [DataMember]
          // public string Password { get; set; }

           [DataMember]
           public string NickName { get; set; }

           [DataMember]
           public string Grade { get;set;}

           [DataMember]
           public string Description { get; set; }

           [DataMember]
           public string email { get; set;}

           [DataMember]
           public string phone { get; set; }

           [DataMember]
           public string image { get; set; }

       }

}