using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;
using Microsoft.Phone.Controls;
using Microsoft.Phone.Notification;
using System.Diagnostics;
using System.IO;
using System.Device.Location;
using Microsoft.Phone.Controls.Maps;
using Microsoft.Phone.Controls.Maps.Platform;
using Microsoft.Phone.Tasks;


namespace ECHelper2._0
{
    public partial class ShowRoute : PhoneApplicationPage
    {
        BingMapsDirectionsTask bingMapsDirectionsTask = new BingMapsDirectionsTask();

        public ShowRoute()
        {
            InitializeComponent();
        //    reallyshowroute();

        }

        //public void reallyshowroute()
        //{
        //    GeoCoordinate spaceNeedleLocation = new GeoCoordinate(40.107, 116.3333);
        //    LabeledMapLocation spaceNeedleLML = new LabeledMapLocation("Space Needle", null);
        //    bingMapsDirectionsTask.End = spaceNeedleLML;
        //    bingMapsDirectionsTask.Show();
        //}

    }
}