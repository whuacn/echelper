using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Runtime.Serialization;

namespace ImagineCupServer.DataContracts
{

   [DataContract(Namespace="")]
   public class PatientUserDataContract {
       [DataMember]
       public string UserName { get; set; }


       [DataMember]
       public string NickName { get; set; }

       [DataMember]
       public string Gender { get; set; }

       [DataMember]
       public int Age { get; set; }

       [DataMember]
       public string Description { get; set; }

       [DataMember]
       public string Allery { get; set; }
    }
}