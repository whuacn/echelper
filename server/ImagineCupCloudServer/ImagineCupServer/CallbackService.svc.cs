using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ServiceModel;
using System.ServiceModel.Web;
using ImagineCupServer.DataContracts;
using System.ServiceModel.Syndication;
using System.IO;
using System.ServiceModel.Activation;

namespace ImagineCupServer
{
    /*[ServiceContract(CallbackContract = typeof(ICallback))]
    public class CallbackService
    {
        private static IDictionary<string, ICallback> _clientsAlive = new Dictionary<string, ICallback>();
        /// <summary>
        /// 
        /// </summary>
        private static readonly object InstObj = new object();
        /// <summary>
        /// 
        /// </summary>
        public IDictionary<string, ICallback> ClientsAlive { get { return _clientsAlive; } set { _clientsAlive = value; } }

        [OperationContract(IsOneWay = true)]
        public void Login(string username) {
            ICallback client = OperationContext.Current.GetCallbackChannel<ICallback>();
            OperationContext.Current.Channel.Closing += new EventHandler(Channel_Closing);
            if (this.ClientsAlive != null && !this.ClientsAlive.ContainsKey(username))
            {
                this.ClientsAlive.Add(username, client);
            }
        }

        private void Channel_Closing(object sender, EventArgs e) {
            lock (InstObj)
            {
                if (this.ClientsAlive != null && this.ClientsAlive.Count > 0)
                {
                    string whoOffline = "";
                    foreach (var client in this.ClientsAlive)
                    {
                        if (client.Value == (ICallback)sender)
                        {
                            whoOffline = client.Key;
                            this.ClientsAlive.Remove(client.Key);
                            break;
                        }
                    }
                }
            }
        }

        [OperationContract(IsOneWay = true)]
        public void EmergencyCall(string toWho, EmergencyMesg message)
        {
            DispatchManager.Send(toWho,message,this.ClientsAlive);
        }

        [OperationContract(IsOneWay = true)]
        public void Confirm(string toWho, EmergencyConfirm message) {
            DispatchManager.Confirm(toWho,message, this.ClientsAlive);
        }
    }
    */
}
