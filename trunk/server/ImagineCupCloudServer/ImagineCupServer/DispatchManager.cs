using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ImagineCupServer
{
    public static class DispatchManager
    {
      /*  public static void Send(string toWho, EmergencyMesg message,IDictionary<string, ICallback> clientsAlive) {
            EmergencyMesg newMessage = new EmergencyMesg();
            ICallback sendTo = null;
            ICallback sendFrom = null;
            foreach (var client in clientsAlive)
            {
                if (client.Key == toWho) {
                    sendTo = client.Value;
                }
                if (client.Key == message.patientID) {
                    sendFrom = client.Value;
                }
            }
            if (sendTo != null) {
                sendTo.Sendback(message);
            }
            else if (sendFrom != null) {
                newMessage.patientID = "offline";
                newMessage.latitude = 0;
                newMessage.longitude = 0;
                sendFrom.Sendback(newMessage);
            }

        }


        public static void Confirm(string toWho, EmergencyConfirm message, IDictionary<string, ICallback> clientsAlive)
        {
            EmergencyConfirm newMessage = new EmergencyConfirm();
            ICallback sendTo = null;
            ICallback sendFrom = null;
            foreach (var client in clientsAlive)
            {
                if (client.Key == toWho)
                {
                    sendTo = client.Value;
                }
                if (client.Key == message.doctorID)
                {
                    sendFrom = client.Value;
                }
            }
            if (sendTo != null)
            {
                sendTo.Confirmback(message);
            }
            else if (sendFrom != null)
            {
                newMessage.doctorID = "offline";
                newMessage.latitude = 0;
                newMessage.longitude = 0;
                newMessage.confirm = 0;
                sendFrom.Confirmback(newMessage);
            }
        }*/
    }
}