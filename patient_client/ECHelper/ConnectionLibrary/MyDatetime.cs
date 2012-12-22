using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConnectionLibrary
{
    public sealed class MyDatetime
    {
        public string ChangeToDatetimeFormat(string ticks)
        {
            System.DateTime time = new System.DateTime(long.Parse(ticks));
            string[] datetimeFormat = time.GetDateTimeFormats('f');
            return datetimeFormat[0];
        }

        public string Random()
        {
            System.DateTime time = System.DateTime.Now;
            return time.Ticks.ToString();
        }
    }
}