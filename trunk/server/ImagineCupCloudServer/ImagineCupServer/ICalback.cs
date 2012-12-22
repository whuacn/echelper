using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ServiceModel;
using System.ServiceModel.Web;

namespace ImagineCupServer
{
    public interface ICallback
    {
        [OperationContract(IsOneWay = true)]
        void Sendback(EmergencyMesg message);
        [OperationContract(IsOneWay = true)]
        void Confirmback(EmergencyConfirm message);
    }
}