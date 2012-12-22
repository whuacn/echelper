using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataLayer
{
    public class DuplicateUserException : Exception
    {
        public DuplicateUserException(string message): base(message)
        {

        }
    }
}
