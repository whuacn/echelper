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

namespace ECHelper2._0
{
    public partial class Arrangement : PhoneApplicationPage
    {
        

        public Arrangement()
        {
            InitializeComponent();
        }

        //private void List_Tap(object sender, System.Windows.Input.GestureEventArgs e)
        //{
        //    LeftBlock.Text = "List";
        //    RightBlock.Text = "Month Arrangement";
        //    loadList();
        //}

        //private void MA_Tap(object sender, System.Windows.Input.GestureEventArgs e)
        //{
        //    LeftBlock.Text = "Month Arrangement";
        //    RightBlock.Text = "List";
        //    loadMA();
        //}

        private void loadList()
        {
            var arrange=new arrangeList();
            ShowArrange.Children.Clear();
            ShowArrange.Children.Add(arrange);
        }

        private void loadMA()
        {
            ShowArrange.Children.Clear();

            TextBlock showDoctorID=new TextBlock();
            showDoctorID.Height=200;
            showDoctorID.Width=200;
            showDoctorID.Text = (App.Current as App).DoctorID;
           // showDoctorID.Text=NavigationContext.QueryString["DoctorID"];
           // ShowArrange.Children.Remove(arrange);
           // txt_SongName.Text = NavigationContext.QueryString["SongName"﻿];
            ShowArrange.Children.Add(showDoctorID);
        }

        private void Left_Tap(object sender, System.Windows.Input.GestureEventArgs e)
        {
            if (LeftBlock.Text == "List")
                loadList();
            else
                loadMA();
        }

        private void Right_Tap(object sender, System.Windows.Input.GestureEventArgs e)
        {
            string temp;
            temp = LeftBlock.Text;
            LeftBlock.Text = RightBlock.Text;
            RightBlock.Text = temp;

            if (LeftBlock.Text == "List")
                loadList();
            else
                loadMA();

        }

        private void Arrangement_Tap(object sender, System.Windows.Input.GestureEventArgs e)
        {
            this.NavigationService.Navigate(new Uri("/DetailArrangement.xaml", UriKind.Relative));

        }


        //以下为生成变量的第三种方式，以后诸多参数如病人ID,等都要以此方式传递
        //public String DOC;
        //public String param4 { get; set; }

        //protected override void OnNavigatedTo(System.Windows.Navigation.NavigationEventArgs e)
        //{
        //    if (param4 != null)
        //    {
        //        DOC = param4;
        //    }
        //} 


       
    }
}