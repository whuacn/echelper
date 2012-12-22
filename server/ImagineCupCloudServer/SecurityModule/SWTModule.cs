using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using Microsoft.AccessControl2.SDK;

namespace SecurityModule
{
    class SWTModule : IHttpModule
    {
        //USE CONFIGURATION FILE, WEB.CONFIG, TO MANAGE THIS DATA
        string serviceNamespace = "change to your namespace";
        string acsHostName = "accesscontrol.windows.net";
        string trustedTokenPolicyKey = "change to your signing key";
        string trustedAudience = "change to your realm";


        void IHttpModule.Dispose()
        {

        }

        void IHttpModule.Init(HttpApplication context)
        {
            context.BeginRequest += new EventHandler(context_BeginRequest);
        }

        void context_BeginRequest(object sender, EventArgs e)
        {
            //HANDLE SWT TOKEN VALIDATION
            // get the authorization header
            string headerValue = HttpContext.Current.Request.Headers.Get("Authorization");

            // check that a value is there
            if (string.IsNullOrEmpty(headerValue))
            {
                throw new ApplicationException("unauthorized");
            }

            // check that it starts with 'WRAP'
            if (!headerValue.StartsWith("WRAP "))
            {
                throw new ApplicationException("unauthorized");
            }

            string[] nameValuePair = headerValue.Substring("WRAP ".Length).Split(new char[] { '=' }, 2);

            if (nameValuePair.Length != 2 ||
                nameValuePair[0] != "access_token" ||
                !nameValuePair[1].StartsWith("\"") ||
                !nameValuePair[1].EndsWith("\""))
            {
                throw new ApplicationException("unauthorized");
            }

            // trim off the leading and trailing double-quotes
            string token = nameValuePair[1].Substring(1, nameValuePair[1].Length - 2);

            // create a token validator
            TokenValidator validator = new TokenValidator(
                this.acsHostName,
                this.serviceNamespace,
                this.trustedAudience,
                this.trustedTokenPolicyKey);

            // validate the token
            if (!validator.Validate(token))
            {
                throw new ApplicationException("unauthorized");
            }

        }
    }
}
