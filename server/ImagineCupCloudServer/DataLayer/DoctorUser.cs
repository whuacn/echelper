using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataLayer
{
    public class DoctorUser
    {
        public String Username { get; set; }

        //public String Password { get; set; }

        public String NickName { get; set; }

        public String Role { get; set; }

        public String Grade { get; set; }

        public String Description { get; set; }

        public String email { get; set; }

        public String phone { get; set; }

        public String Image { get; set; }

        //public bool Online { get; set; }

        public List<string> FollowedList { get; set; }

        public List<string> FollowingList { get; set; }


    }
}
