using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataLayer
{
    public class PatientUser
    {
        public String Username { get; set; }

       // public String Password { get; set; }

        public String Role { get; set; }

        public String Gender { get; set; }

        public int Age { get; set; }

        public String NickName { get; set; }

        public String Description { get; set; }

        public String Allery { get; set; }

        //public bool Online { get; set; }

        public List<string> FollowedList { get; set; }

        public List<string> FollowingList { get; set; }
    }
}
