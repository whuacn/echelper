

&lt;hr&gt;


<font color='red' size='6'>
<b>ECHelper</b></font>
<br>
<font color='blue' size='4'>
<i>Created by Team Nicefforts</i>
</font>
<br>
Note: This project has been competed in Imagine Cup 2012 Software Challenge<br>
<br>
<img src='http://echelper.googlecode.com/svn/wiki/images/imagine_cup.png' width='150'>
<br>
<br>
<br>
<hr><br>
<br>
<br>
<p><font color='green' size='3'><i>Abstract --</i></font> Nowadays, cardiovascular disease is the major cause of premature death in many countries. An efficient way to monitor and treat the disease is extremely necessary for the whole world. <b>ECHelper</b> is trying to provide a mode that makes the monitoring and treatment low-priced and prompt. By getting the electrocardio data, ECHelper will provide the patient’s detail information to a specific doctor in time. So it can efficiently solve the problem about a lack of enough characteristics of cardiovascular disease exactly. With Cloud Computing, some specific electrocardio data will be stored in the Cloud, which help each doctor to obtain a diagnosis precisely. GPS will be used to accurately locate the position of patient in case of emergency.</p>
<p><font color='green' size='3'><i>Index Terms --</i></font> Health, ECG, CVD, Windows 8, Windows Phone, Windows Azure, WCF, Bing Maps</p>

<ul><li><a href='#Summary.md'>Summary</a>
</li><li><a href='#Background.md'>Background</a>
<ul><li><a href='#Data.md'>Data</a>
</li><li><a href='#User_Group.md'>User Group</a>
</li><li><a href='#Theme.md'>Theme</a>
</li><li><a href='#Interview.md'>Interview</a>
</li></ul></li><li><a href='#Architecture_and_Technology.md'>Architecture &amp; Technology</a>
<ul><li><a href='#Architecture.md'>Architecture</a>
</li><li><a href='#Technology.md'>Technology</a>
</li></ul></li><li><a href='#Main_Scenarios.md'>Main Scenarios</a>
<ul><li><a href='#Outpatient_Service.md'>Outpatient Service</a>
</li><li><a href='#Emergency_Service.md'>Emergency Service</a>
</li><li><a href='#Periphery_Functions.md'>Periphery Functions</a>
</li></ul></li><li><a href='#Vision.md'>Vision</a></li></ul>

<h1>Summary</h1>

<p>Nowadays, cardiovascular disease is the first killer in the world.<br>
An efficient way to monitor and treat the disease is extremely necessary for the whole world. <b>ECHelper</b> is trying to provide a mode that makes the monitoring and treatment low-priced. </p>

<img src='http://echelper.googlecode.com/svn/wiki/images/summerize.png' />

<p>By getting the electrocardio data, ECHelper will give the patient’s detail information to a particular doctor in time. So it can efficiently solve the problem about a lack of enough characteristics of cardiovascular disease exactly.</p>
<p>With Cloud Computing, some specific electrocardio data will be stored in the Cloud, which help each doctor to make a diagnosis precisely. GPS will be used to accurately locate the position of patient in case of emergency.</p>

<h1>Background</h1>

<h2>Data</h2>
According to a report of WHO on September 29th, 2011, <a href='http://www.who.int/cardiovascular_diseases/'>http://www.who.int/cardiovascular_diseases/</a>

<img src='http://echelper.googlecode.com/svn/wiki/images/background.png' />

<p>Members of the UN General Assembly in 2011 resolved to emphasize public awareness of this health risk in their home countries and advocate healthier lifestyles that can prevent cardiovascular diseases.</p>
<p>More than <b>70%</b> of cardiovascular disease deaths happened out of hospital, especially in the place where there is no doctor providing assistance.</p>

<h2>User Group</h2>

<p>According to our survey, user groups of service providers distribute as the screen show. The number of authentication doctor in Sina Microblog is 593, and all user concerned about doctor is more than 1000. The number of authentication doctor in Tencent is 535. and all user concern about doctor is more than 18000.</p>

<img src='http://echelper.googlecode.com/svn/wiki/images/user_group.png' />

<p>This shows that we have a large number of user groups in potential.</p>

<h2>Theme</h2>

<p>Using ECHelper, patients can not only care about their cardiovascular disease and communicate with doctors at any time, but also get first aid if necessary.</p>

<img src='http://echelper.googlecode.com/svn/wiki/images/theme.png' />

<p>ECHelper also provide convenience experience for non-patient population to care about their hearts. If ECHelper can be spread widely, it will make a great contribution for cardiovascular disease prevention and control, and achieve one of the Millennium development goals--combat HIV/AIDS, malaria and other diseases.<br>
<br>
<h2>Interview</h2>

<p>In the meantime, we have made an interview of a medical professor from Guangdong Medical College. Let’s have a watch the video.</p>

<a href='http://www.youtube.com/watch?feature=player_embedded&v=1e3o3-vTJgE' target='_blank'><img src='http://img.youtube.com/vi/1e3o3-vTJgE/0.jpg' width='425' height=344 /></a><br>
<br>
<h1>Architecture & Technology</h1>

<h2>Architecture</h2>

<img src='http://echelper.googlecode.com/svn/wiki/images/architecture.png' />
<p>The architecture of our solution has showed above. Two rich clients act as a patient and a doctor. We make use of Model-View-ViewModel (MVVM) to implement these two. And we deploy our server in Windows Azure. We use Windows 8 as patient client and Windows Phone as doctor client, which communicate with WCF RIA Service. In addition, a ECG Sensor can be connected with Windows 8 Metro Style Application by a custom Windows Service to implement the data transfer between tablet PC and ECG Sensor by virtual Serial Port.</p>
<p>The ECG data will be recorded in byte-stream file and upload to the Windows Azure that store in Blob, and provide download service to authorized users. Shared Access Signature is used to increase the security level of private data.</p>
<p>Regular data will be stored in SQL Azure to keep data integrity and security. Between SQL Azure and WCF, we use ADO.NET to construct persistent object.</p>
<p>In order to provide a more comfortable user experience and security level, we use Access Control Service to support various opportunities logining ways. Such as Windows Live, Google, Yahoo. Email address of user information is used to separate different users in our system.</p>

<h2>Technology</h2>

<p>Technologies we used are shown below:</p>
<img src='http://echelper.googlecode.com/svn/wiki/images/technology.png' />

<h1>Main Scenarios</h1>

<p>Our main scenario contains: <b>Outpatient Service</b>, <b>Emergency Service</b>, <b>Periphery Functions</b>.</p>

<img src='http://echelper.googlecode.com/svn/wiki/images/main_scenario.png' />

<h2>Outpatient Service</h2>

<p>In Outpatient Service, doctors could diagnose patients’ request in a mail form. In the mean time, patients could get help from doctor’s reply.</p>

<h2>Emergency Service</h2>

<p>In Emergency Service, patients could get the first aid from doctors nearby.</p>

<h2>Periphery Functions</h2>

<p>In Periphery Functions, all doctors should have a real name authentication from the hospital he works for or any other official organization. Both patients and doctors could review the authorized medical record.</p>

<img src='http://echelper.googlecode.com/svn/wiki/images/patient_ui.png' />
<img src='http://echelper.googlecode.com/svn/wiki/images/doctor_ui.png' />

<h1>Vision</h1>

<p>Our aim is to build a new medical treatment model between patients and doctors, which provides a platform for patients to see a doctor conveniently and make doctors give help at the leisure time.</p>
<p>With the development of mobile communication technology, mobile devices are more portable and intelligent with lower cost of integration. In the future, with the faster Internet access, mobile devices will play an important role in medical rescue. These changes will greatly promote the mobile medical care and the interests of network and telecommunication carriers.</p>

<img src='http://echelper.googlecode.com/svn/wiki/images/vision.png' />

<p>In conclusion, <b>ECHelper</b> provides a direction to make full use of medical resources. This not only relieves the seriousness of seeing doctors in developing countries, but also provides more convenient routes to community medical service in developed countries.</p>