//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net;
//using System.Windows;
//using System.Windows.Controls;
//using System.Windows.Documents;
//using System.Windows.Input;
//using System.Windows.Media;
//using System.Windows.Media.Animation;
//using System.Windows.Shapes;
//using Microsoft.Phone.Controls;
//namespace ECHelper2._0
//{
//    public partial class MainPage : PhoneApplicationPage
//    {
//        public String getDoctorID;


//        // 构造函数
//        public MainPage()
//        {
//            InitializeComponent();
//        }

//        private void btnBack_Click(object sender, RoutedEventArgs e)
//        {
//            this.NavigationService.Navigate(new Uri("/Emergency.xaml", UriKind.Relative));
//        }

//        private void btnLog_Click(object sender, RoutedEventArgs e)
//        {
//            //yan zheng fu wu qi de zhang hao mi ma shi fou zheng que
//          //  string getDoctorID = "guo jing";
//            //if(zheng que)
//            getDoctorID = "tang dai";
//            (App.Current as App).DoctorID = getDoctorID;
//            this.NavigationService.Navigate(new Uri("/totalArrangement.xaml", UriKind.Relative));
//            //else
//           // LogStatusBlock.Text = "Wrong ID orpassword, retry"; 
//        }

//        private void GF_WLID(object sender, RoutedEventArgs e)
//        {
//            if (textBox_WLID.Text == "Windows Live ID")
//            { textBox_WLID.Text = ""; }
//            //Color myColor = new Color();
//            //myColor.R = 163;
//            //myColor.G = 26;
//            //myColor.B = 107;
//            //myColor.A = 1;
//            //textBox_WLID.BorderBrush = new SolidColorBrush(myColor);
//            //textBox_WLID.BorderBrush = "#FF2B4993";
//        }




//        private void LF_WLID(object sender, RoutedEventArgs e)
//        {
//            if (textBox_WLID.Text == "")
//                textBox_WLID.Text = "Windows Live ID";
//        }

//        private void GF_Password(object sender, RoutedEventArgs e)
//        {
//            if (passwordBox_Doctor.Password == "000000")
//            {
//                passwordBox_Doctor.Password = "";
//            }

//        }

//        private void LF_Password(object sender, RoutedEventArgs e)
//        {
//            if (passwordBox_Doctor.Password == "")
//            {
//                passwordBox_Doctor.Password = "000000";
//            }
//        }


//        //protected override void OnNavigatedFrom(System.Windows.Navigation.NavigationEventArgs e)
//        //{
//        //    var targetPage = e.Content as Arrangement;
//        //    if (targetPage != null)
//        //    {
//        //        targetPage.param4 =DoctorID ;
//        //    }
//        //}

//        //=====================================以下发送post请求，将doctor username, id 发送至客户端

//        //public void callREST()
//        //{

//        //    Uri uri = new Uri("http://www.domain.com/RestService");
//        //    HttpWebRequest request = (HttpWebRequest)WebRequest.Create(uri);
//        //    request.Method = "POST";
//        //    request.ContentType = "application/xml";

//        //    request.BeginGetRequestStream(sendXML_RequestCallback, request);

//        //}

//        //private void sendXML_RequestCallback(IAsyncResult result)
//        //{
//        //    var req = result.AsyncState as HttpWebRequest;

//        //    //   byte[] toSign = System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes("<xml></xml>");

//        //    byte[] toSign = System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(doctor_Info.ToString());//==========这行是自己写的

//        //    using (var strm = req.EndGetRequestStream(result))
//        //    {
//        //        strm.Write(toSign, 0, toSign.Length);
//        //        strm.Flush();
//        //    }
//        //    req.BeginGetResponse(this.fCallback, req);
//        //}

//        //private void fCallback(IAsyncResult result)
//        //{
//        //    var req = result.AsyncState as HttpWebRequest;
//        //    var resp = req.EndGetResponse(result);
//        //    var strm = resp.GetResponseStream();
//        //    //Do something
//        //    LogStatusBlock.Text = "Log in successfully";
//        //}

//        //====================================以上发送post请求，将doctor username, id 发送至客户端


//        //====================================以下为 发送get 请求,获得 doctor name 作为后面的主键


//        //====================================以上为 发送get 请求,获得 doctor name 作为后面的主键



//    }
//}


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
using System.Text;
using System.Windows.Navigation;
using System.Runtime.Serialization;
using System.ComponentModel;
//using System.ServiceModel.Web;
using System.Runtime.Serialization.Json;
using System.Threading;
using System.IO;
using System.Device.Location;
using Microsoft.Phone.Controls.Maps.Platform;
using Microsoft.Phone.Tasks;



namespace ECHelper2._0
{
    public partial class MainPage : PhoneApplicationPage
    {
        // 构造函数

        GeoCoordinateWatcher watcher;

        public MainPage()
        {
            InitializeComponent();


            if (!System.Net.NetworkInformation.NetworkInterface.GetIsNetworkAvailable())
            {
                MessageBox.Show("No network connection available!");
                return;
            }

            //var uriParams = new Dictionary<string, string>() {
            //     {"client_id", "000000004009F70C"},
            //     {"response_type", "token"},
            //     {"scope", "wl.signin,wl.basic,wl.offline_access"},
            //     {"redirect_uri", "https://oauth.live.com/desktop"},
            //     {"display", "touch"}
            //  };
            //StringBuilder urlBuilder = new StringBuilder();
            //foreach (var current in uriParams)
            //{
            //    if (urlBuilder.Length > 0)
            //    {
            //        urlBuilder.Append("&");
            //    }
            //    var encoded = HttpUtility.UrlEncode(current.Value);
            //    urlBuilder.AppendFormat("{0}={1}", current.Key, encoded);
            //}
            //var loginUrl = "https://oauth.live.com/authorize?" + urlBuilder.ToString();

            //AuthenticationBrowser.Navigate(new Uri(loginUrl));
            //AuthenticationBrowser.Visibility = Visibility.Visible;


        }

        //private void BTN_CLICK(object sender, RoutedEventArgs e)
        //{
        //    this.NavigationService.Navigate(new Uri("/DoctorInformation.xaml", UriKind.Relative));
        //}


        //public string AccessToken { get; set; }
        //private void BrowserNavigated(object sender, NavigationEventArgs e)
        //{
        //    if (e.Uri.AbsoluteUri.ToLower().Contains("https://oauth.live.com/desktop"))
        //    {
        //        string text = HttpUtility.HtmlDecode(e.Uri.Fragment).TrimStart('#');
        //        var pairs = text.Split('&');
        //        foreach (var pair in pairs)
        //        {
        //            var kvp = pair.Split('=');
        //            if (kvp.Length == 2)
        //            {
        //                if (kvp[0] == "access_token")
        //                {
        //                    AccessToken = kvp[1];
        //                    //   MessageBox.Show("Access granted" + AccessToken);
        //                    this.NavigationService.Navigate(new Uri("/totalArrangement.xaml", UriKind.Relative));
        //                }
        //            }
        //        }
        //        if (string.IsNullOrEmpty(AccessToken))
        //        {
        //            MessageBox.Show("Unable to authenticate");
        //        }
        //        AuthenticationBrowser.Visibility = System.Windows.Visibility.Collapsed;
        //    }
        //}




        //private void RequestUserProfile()
        //{
        //    var profileUrl = string.Format("https://apis.live.net/v5.0/me?access_token={0}", HttpUtility.UrlEncode(AccessToken));
        //    var request = HttpWebRequest.Create(new Uri(profileUrl));
        //    request.Method = "GET";
        //    request.BeginGetResponse(result =>
        //    {
        //        try
        //        {
        //            var resp = (result.AsyncState as HttpWebRequest).EndGetResponse(result);
        //            using (var strm = resp.GetResponseStream())
        //            {
        //                var serializer = new DataContractJsonSerializer(typeof(WindowsLiveProfile));
        //                var profile = serializer.ReadObject(strm) as WindowsLiveProfile;
        //                this.Dispatcher.BeginInvoke((Action<WindowsLiveProfile>)((user) =>
        //                {
        //                    // this.NavigationService.Navigate(new Uri("/totalArrangement.xaml", UriKind.Relative));
        //                    this.UserIdText.Text = user.Id;

        //                    this.UserNameText.Text = user.Name;
        //                }), profile);
        //            }
        //        }
        //        catch (Exception ex)
        //        {
        //            this.Dispatcher.BeginInvoke(() =>
        //            MessageBox.Show("Unable to attain profile information"));
        //        }
        //    }, request);
        //}

        //[DataContract]
        //public class WindowsLiveProfile
        //{
        //    [DataMember(Name = "id")]
        //    public string Id { get; set; }
        //    [DataMember(Name = "name")]
        //    public string Name { get; set; }
        //}

        //private void AuthenticateClick(object sender, RoutedEventArgs e)
        //{
        //    var uriParams = new Dictionary<string, string>() {
        //         {"client_id", "000000004009F70C"},
        //         {"response_type", "token"},
        //         {"scope", "wl.signin,wl.basic,wl.offline_access"},
        //         {"redirect_uri", "https://oauth.live.com/desktop"},
        //         {"display", "touch"}
        //      };
        //    StringBuilder urlBuilder = new StringBuilder();
        //    foreach (var current in uriParams)
        //    {
        //        if (urlBuilder.Length > 0)
        //        {
        //            urlBuilder.Append("&");
        //        }
        //        var encoded = HttpUtility.UrlEncode(current.Value);
        //        urlBuilder.AppendFormat("{0}={1}", current.Key, encoded);
        //    }
        //    var loginUrl = "https://oauth.live.com/authorize?" + urlBuilder.ToString();

        //    AuthenticationBrowser.Navigate(new Uri(loginUrl));
        //    AuthenticationBrowser.Visibility = Visibility.Visible;
        //}

        private void BTN_CLICK(object sender, RoutedEventArgs e)
        {
            // ===========================这个是推送发的信息
            //sendPosition();


            this.NavigationService.Navigate(new Uri("/totalArrangement.xaml", UriKind.Relative));
        }


        // ===========================这个是推送发的信息
        private void sendPosition()
        {
            if (watcher == null)
            {
                watcher = new GeoCoordinateWatcher(GeoPositionAccuracy.High);
                watcher.MovementThreshold = 1;
                watcher.PositionChanged += new EventHandler<GeoPositionChangedEventArgs<GeoCoordinate>>(watcher_PositionChanged);
                watcher.Start();
            }

        }


        void watcher_PositionChanged(object sender, GeoPositionChangedEventArgs<GeoCoordinate> e)
        {
            Location location = new Location();

            location.Latitude = e.Position.Location.Latitude;
            location.Longitude = e.Position.Location.Longitude;

            string Latitude = location.Latitude.ToString();
            string Longitude = location.Longitude.ToString();
        }

        // ===========================这个是推送发的信息



    }
}