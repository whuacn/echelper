﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;
namespace ImagineCupServer
{
    [DataContract(Namespace="")]
    public class RegisterInfoDataContract
    {
        [DataMember]
        public string username;
    }
}