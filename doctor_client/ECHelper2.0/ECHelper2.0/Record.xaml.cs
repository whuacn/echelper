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
using System.Xml;
using System.Xml.Linq;
using System.Xml.Serialization;

namespace ECHelper2._0
{
    public partial class Record : PhoneApplicationPage
    {
        MailDataContract record;
        //MailDataContract mail;
        PatientUserDataContract patientdesp;
        public Record()
        {
            InitializeComponent();

            var app=App.Current as App;
            record=app.selectedRecord;

            patientdesp = app.PatientDescription;
          //  mail = app.selectedPatient;

            TextBlock_Name.Text = "Name : "+record.PatientId;
            TextBlock_Age.Text = "Age : "+ patientdesp.Age;
            TextBlock_Gender.Text = "Gender : "+ patientdesp.Gender;
            TextBlock_Desp.Text = record.TextContent;
            
            TextBlock_DoctorId.Text =record.DoctorId;
            TextBlock_Time.Text = record.Time;


        

        }

        

    }
}