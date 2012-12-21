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
using System.Windows.Navigation;
using Microsoft.Phone.Controls;
using System.Xml.Linq;

//using Microsoft.Phone.PhoneApplication;

namespace ECHelper2._0
{
    public partial class arrangeList : UserControl
    {
        string name, time;

        public arrangeList()
        {
            InitializeComponent();
            showCurrentlist();
        }

        private void showCurrentlist()
        {
            //


         //   DateTime dt = System.DateTime.Now; 
            //xian shi NOW hou mian de shu ju



            for (int i = 1; i < 30; i++)
            {
                loadlist();
                // xian shi dang tian d xin xi
                lstArrange.Items.Add(name + "   " + time);
            }
        }

        private void loadlist()
        {
            // cong shu ju ku zhong xia zai wei zhen duan bing ren de xing ming he shi jian 
            name = "Andrew Jald";
            time = "2012/02/03/14:50";
       //     XDocument loadedData = XDocument.Load("People.xml");

            //var data = from query in loadedData.Descendants("person")
            //           select new Person
            //           {
            //               FirstName = (string)query.Element("firstname"),
            //               LastName = (string)query.Element("lastname"),
            //               Age = (int)query.Element("age")
            //           };
            //listBox.ItemsSource = data;
        }

        private void GestureListenerTap(object sender, Microsoft.Phone.Controls.GestureEventArgs e)
        {//在此处传递的参数应当包含病人的ID,等到整合时要填上
            (Application.Current.RootVisual as PhoneApplicationFrame).Navigate(new Uri("/diagnosisNagivation.xaml", UriKind.Relative));

        }


    }
}
