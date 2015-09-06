#This page talks about how to build the source code

  * [Introduction](#Introduction.md)
  * [Patient Client](#Patient_Client.md)
    * [Environment Requirement](#Environment_Requirement_in_Patient_Client.md)
    * [Building the Source Code](#Building_the_Source_Code_in_Patient_Client.md)
  * [Doctor Client](#Doctor_Client.md)
    * [Environment Requirement](#Environment_Requirement_in_Doctor_Client.md)
    * [Building the Source Code](#Building_the_Source_Code_in_Doctor_Client.md)
  * [Server](#Server.md)
    * [Environment Requirement](#Environment_Requirement_in_Server.md)
    * [Building the Source Code](#Building_the_Source_Code_in_Server.md)
  * [Technical Help](#Technical_Help.md)

# Introduction #

The source code is divided into three parts: **Patient Client**, **Doctor Client** and **Server**. The whole architecture is shown in [here](http://code.google.com/p/echelper/#Architecture).

# Patient Client #

## Environment Requirement in Patient Client ##

  * Windows 8 Consumer Preview
  * Visual Studio 2010 Professional
  * Visual Studio 11 Professional Beta
  * Bing Maps SDK
  * CP210X Driver and ECG Sensor

## Building the Source Code in Patient Client ##

  * Create a new directory named **patient\_client**
```

mkdir patient_client
```
  * Checkout Patient Client source code into **patient\_client**
```

svn checkout http://atmars.googlecode.com/svn/trunk/patient_client patient_client
```
  * Open the **\ECHelper\ECHelper.sln** in Visual Studio 11 Professional Beta, remember to change the developer information in **Project Properties** and the the details in server information.
  * Open the **\ECGNotify\ECGNotify.sln** in Visual Studio 2010 Professional.
  * Plugin the ECG Sensor and run the two projects.

# Doctor Client #

## Environment Requirement in Doctor Client ##

  * Windows 7 Professional
  * Visual Studio 2010 Professional
  * Windows Phone 7 SDK
  * Bing Maps SDK

## Building the Source Code in Doctor Client ##

  * Create a new directory named **doctor\_client**
```

mkdir doctor_client
```
  * Checkout Doctor Client source code into **doctor\_client**
```

svn checkout http://atmars.googlecode.com/svn/trunk/doctor_client doctor_client
```
  * Open the **\ECHelper2.0\ECHelper2.0.sln** in Visual Studio 2010 Professional, remember to change the developer information in **Project Properties** and the the details in server information.
  * Run the project.

# Server #

## Environment Requirement in Server ##

  * Windows 7 Professional
  * Visual Studio 2010 Professional
  * Windows Azure SDK
  * Windows Azure Account

## Building the Source Code in Server ##

  * Create a new directory named **server**
```

mkdir server
```
  * Checkout Server source code into **server**
```

svn checkout http://atmars.googlecode.com/svn/trunk/server server
```
  * Open the **\ImagineCupCloudServer\ImagineCupCloudServer.sln** in Visual Studio 2010 Professional, remember to change the account information of Windows Azure.
  * Deploy the project in Windows Azure.

# Technical Help #

Please check our [Issue Tracker](http://code.google.com/p/echelper/issues/list) or [Developer Group](http://groups.google.com/group/echelper-discuss) if you have any question.