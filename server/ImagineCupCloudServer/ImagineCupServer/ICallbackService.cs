using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
//using ImagineCupServer.DataModel;
using ImagineCupServer.DataContracts;

namespace ImagineCupServer
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "ICallbackService" in both code and config file together.
    [ServiceContract(CallbackContract=typeof(ICallback))]
    interface ICallbackService
    {
        [OperationContract(IsOneWay = true)]
        void Login(String id);

        [OperationContract(IsOneWay = true)]
        void EmergencyCall(string toWho, EmergencyMesg message);
    }
}
