﻿#pragma checksum "E:\Imagine cup\WP7\WP7 develop\ECHelper2.0\ECHelper2.0\DoctorInformation.xaml" "{406ea660-64cf-4c82-b6f0-42d48172a799}" "97F77CCAC9489176556B3D097BC749AD"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.261
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using Microsoft.Phone.Controls;
using System;
using System.Windows;
using System.Windows.Automation;
using System.Windows.Automation.Peers;
using System.Windows.Automation.Provider;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Interop;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using System.Windows.Resources;
using System.Windows.Shapes;
using System.Windows.Threading;


namespace ECHelper2._0 {
    
    
    public partial class DoctorInformation : Microsoft.Phone.Controls.PhoneApplicationPage {
        
        internal System.Windows.Controls.Grid LayoutRoot;
        
        internal System.Windows.Controls.StackPanel TitlePanel;
        
        internal System.Windows.Controls.TextBlock ApplicationTitle;
        
        internal System.Windows.Controls.TextBlock PageTitle;
        
        internal System.Windows.Controls.Grid ContentPanel;
        
        internal System.Windows.Controls.Grid grid1;
        
        internal System.Windows.Controls.TextBlock textBlock_Name;
        
        internal System.Windows.Controls.TextBlock textBlock_ShortDescription;
        
        internal System.Windows.Controls.TextBlock TextBlock_Edit;
        
        internal System.Windows.Controls.TextBlock textBlock_Grade;
        
        internal System.Windows.Controls.TextBlock textBlock_Phone;
        
        internal System.Windows.Controls.TextBlock textBlock_Email;
        
        internal System.Windows.Controls.TextBox textBox_Name;
        
        internal Microsoft.Phone.Controls.ListPicker Grade;
        
        internal System.Windows.Controls.TextBox textBox_Phone;
        
        internal System.Windows.Controls.TextBox textBox_Email;
        
        internal System.Windows.Controls.Button btn_Save;
        
        internal System.Windows.Controls.TextBlock Save_Status;
        
        internal System.Windows.Controls.TextBlock textBlock_DetailShortDescription;
        
        private bool _contentLoaded;
        
        /// <summary>
        /// InitializeComponent
        /// </summary>
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public void InitializeComponent() {
            if (_contentLoaded) {
                return;
            }
            _contentLoaded = true;
            System.Windows.Application.LoadComponent(this, new System.Uri("/ECHelper2.0;component/DoctorInformation.xaml", System.UriKind.Relative));
            this.LayoutRoot = ((System.Windows.Controls.Grid)(this.FindName("LayoutRoot")));
            this.TitlePanel = ((System.Windows.Controls.StackPanel)(this.FindName("TitlePanel")));
            this.ApplicationTitle = ((System.Windows.Controls.TextBlock)(this.FindName("ApplicationTitle")));
            this.PageTitle = ((System.Windows.Controls.TextBlock)(this.FindName("PageTitle")));
            this.ContentPanel = ((System.Windows.Controls.Grid)(this.FindName("ContentPanel")));
            this.grid1 = ((System.Windows.Controls.Grid)(this.FindName("grid1")));
            this.textBlock_Name = ((System.Windows.Controls.TextBlock)(this.FindName("textBlock_Name")));
            this.textBlock_ShortDescription = ((System.Windows.Controls.TextBlock)(this.FindName("textBlock_ShortDescription")));
            this.TextBlock_Edit = ((System.Windows.Controls.TextBlock)(this.FindName("TextBlock_Edit")));
            this.textBlock_Grade = ((System.Windows.Controls.TextBlock)(this.FindName("textBlock_Grade")));
            this.textBlock_Phone = ((System.Windows.Controls.TextBlock)(this.FindName("textBlock_Phone")));
            this.textBlock_Email = ((System.Windows.Controls.TextBlock)(this.FindName("textBlock_Email")));
            this.textBox_Name = ((System.Windows.Controls.TextBox)(this.FindName("textBox_Name")));
            this.Grade = ((Microsoft.Phone.Controls.ListPicker)(this.FindName("Grade")));
            this.textBox_Phone = ((System.Windows.Controls.TextBox)(this.FindName("textBox_Phone")));
            this.textBox_Email = ((System.Windows.Controls.TextBox)(this.FindName("textBox_Email")));
            this.btn_Save = ((System.Windows.Controls.Button)(this.FindName("btn_Save")));
            this.Save_Status = ((System.Windows.Controls.TextBlock)(this.FindName("Save_Status")));
            this.textBlock_DetailShortDescription = ((System.Windows.Controls.TextBlock)(this.FindName("textBlock_DetailShortDescription")));
        }
    }
}

