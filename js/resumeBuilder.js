/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Sathya");
/* 
 var name= "V.Sathya Narayanan"
 var role = "Senior QA Engineer"
 var formatedName = HTMLheaderName.replace("%data%", name);
 var formatedRole = HTMLheaderRole.replace("%data%", role);
 $("#header").append(formatedRole); 
 $("#header").prepend(formatedName);
 */
var skills = ["Java","JavaScript","Windows","Microsoft Office","Linux","SQL","VMWare","Eclipse","SVN","Bamboo"];
 var bio = {
 "name" : "Sathya Narayanan",
 "role" : "QA Engineer",
 "contacts" : [
 {
 "mobile":"4389392375",
 "github_username":"saathya2006@yahoo.com",
 "email":"saathya2007@gmail.com",
 "location":"Montreal",
}],
"picture_URL" : "images/SathyaFullPic.jpg",
"Welcome_message" : "Welcome to My Profile Page",
  "skills" : skills
 }; 
 
 var work={
"jobs": [
{
	"employer": "Nuance Communications",
	"location": "Montreal,Canada",
	"title": "QA Engineer",
	"dates": "Febraury 2014 - Present",
	"description": " Tested a cloud based voice recognition application. Developed test cases for functional testing of the application. Carried out functional, Regression, Smoke, and Sanity testing. Installed weekly builds on Linux servers. Prepared weekly reports to be sent to higher management and clients. Interacted with developers and project managers to identify application defects. Coordinated with development team to verify bug fixes. Developed an automation tool to run weekly regression tests. Performed smoke and sanity testing on live servers. Guided many interns and assigned weekly tasks to them. Led a team of language consultants to test the application in different languages. Assigned them tasks and prepared detailed reports about the testing results of each language. Tools: Java, JSON, Jira, Linux, Shell, Eclipse"
},
{
	"employer": "Panaxian Inc",
	"location": "Montreal,Canada",
	"title": "QA Engineer",
	"dates": "September 2012 - October 2013",
	"description": "DPP Lite:Tested an internal application called DPPLite manually. Created test scripts by studying user requirement documents and mockups. Carried out functional testing, system testing and regression testing of the application by following the test scripts. Raised bugs with developers and ensured that it has been solved. Technical Documentation. Panodec:Carried out manual testing of an android app called Panodec. Carried out functional testing and unit testing of the app by following test cases. Raised bugs with developers and ensured that it has been fixed. Technical Documentation. Tested the app on various android devices and made sure that the app functions well without any crashes and bugs on all devices."
	
},
{
	"employer": "HCL Technologies",
	"location": "Chennai,India",
	"title": "Software Engineer in Test",
	"dates": "Febraury 2011 - August 2011",
	"description": "MeMe: Tested a web application called HCL Meme manually. Developed test cases for functional testing and unit testing of the application. Carried out functional and unit testing. Interacted with developers, business analysts to identify application defects. Coordinated with development team to verify bug fixes.YAPBACK: Involved in testing of a web based application called Yapback. Carried out manual testing of the web application by following test scripts. Automated it using Selenium Webdriver. Verified its compatibility for different browsers and different platforms. Coordinated with onshore team and development team for successful completion of the project. Technical Documentation. Demonstrated ownership and good team playing characteristics."
	},
{
	"employer": "Nokia Siemens Networks",
	"location": "Chennai,India",
	"title": "QA Intern",
	"dates": "January 2010 - April 2010",
	"description": "Our task was to install new mobile stations and determine their signal strength in different localities using the Temps software for VODAFONE networks. If the signal strength did not match the clients expectation we optimized it. Software Used: TEMS for drive test."	
}
]
}
// work.years="2.5";
 
 var education={
"schools": [
{
	"name": "Anna University",
	"location": "Chennai,India",
	"degree": "Bachelor of Engineering",
	"major": "Electronics and Communication Engineering",
	"dates": "2006 - 2010"
},
{
	"name": "Concordia University",
	"location": "Montreal,Canada",
	"degree": "Master of Engineering",
	"major": "Electrical and Computer Engineering",
	"dates": "2011 - 2013"
	
},
{
	"name": "McGill University",
	"location": "Montreal,Canada",
	"degree": "Comprehensive Project Management",
	"major": "Project Management",
	"dates": "2015 - 2016"
	
}
]
}
 var projects={
"names": [
{
	"title": "Attacks and Defense on Open Source Application",
	"dates": "September 2012",
	"description": "The attack and defenses of an open source web application was identified by exploiting the security vulnerabilities in the open source software. Manual and automated testing was carried out. In manual testing, the source code of the application was analyzed and the user inputs were injected randomly on the pages and test the behavior of the application. In automated testing, the Acunetix Web Vulnerability Scanner 8 and W3AF 1.1 were used. The vulnerabilities such as SQL Injection, Blind SQL injection, ByPass Authentication, XSS and CSRF found during the automation testing were fixed     Tools: SQL, Acunetix Web Vulnerability Scanner 8, W3AF 1.1"

	},
{
	"title": "Oracle Data Miner",
	"dates": "January 2012",
	"description": "In this project, Implementation of the Data Mining algorithms and techniques is carried out. Large volume of data was refined and filtered using MySQL. Data pre-processing, classification, clustering and association rule mining algorithms using PL-SQL was performed.    Tools: MySQL, PL-SQL"
	
},
{
	"title": "Application To Chat Using Voice And Text",
	"dates": "September 2012",
	"description": "The voice conferencing was to be implemented such that, up to six users can simultaneously be connected to a single conference. The control system protocol was SIP for the project. The entire system was implemented using Java using jSIP library. The SIP server was self-created and modularized and the clients were designed using Java media framework.  Technology: Java    Protocols: P2P, SIP, TCP/IP, And UDP."
	
},
{
	"title": "Design of JPEG Encoder",
	"dates": "January 2013",
	"description": "It is an iterative project. First iteration carried out just the image conversion. Enhancement was made in all iterations. Finally the aim is to develop a operating system which will schedule the READ, DCT, QUANTIZE, HUFFMAN and ZIGZAG thread and run these encoding techniques to convert a bmp image to jpeg image so that it can used for mobile cameras implemented in low power ARM processors. All the iterations carried out important concepts like multi threading, inheritance etc. Technology: C++, System C, SSH, WinSCP, VMWare  OS: Linux"	
}
]
}
  
 var name = bio.name;
 var role = bio.role;
 //var contact_info = bio.contact_info;
 //var github_username = bio.github_username;
// var email = bio.email;
//var workLocation = bio.location;
 var Welcome_message = bio.Welcome_message;
 var pic = bio.picture_URL;
 var skills = bio.skills;

 
var formatedName = HTMLheaderName.replace("%data%", name);
var formatedRole = HTMLheaderRole.replace("%data%", role);
//var formatedcontact_info = HTMLcontactGeneric.replace("%data%", contact_info);
//var formatedgithub_username = HTMLgithub.replace("%data%", github_username);
//var formatedemail = HTMLemail.replace("%data%", email);
var formatedWelcome_message = HTMLwelcomeMsg.replace("%data%", Welcome_message);
//var formatedworkLocation = HTMLworkLocation.replace("%data%", location);
var formatedpic = HTMLbioPic.replace("%data%", pic);

//var formattedschoolname = HTMLschoolName.replace("%data%", education.schools[school].name);

$("#header").prepend(formatedRole); 
$("#header").prepend(formatedName);
//$("#header").append(formatedcontact_info); 
//$("#header").append(formatedgithub_username);
//$("#header").append(formatedemail);
//$("#header").append(formatedworkLocation);
//$('#topContacts').append(bioMobile, bioEmail, bioGithub, bioLocation);
$("#header").append(formatedWelcome_message);
$("#header").prepend(formatedpic);
if (bio.skills.length > 0){
$("#header").append(HTMLskillsStart);
var formatedskills = HTMLskills.replace("%data%", skills[0]);
$("#skills").append(formatedskills);
var formatedskills = HTMLskills.replace("%data%", skills[1]);
$("#skills").append(formatedskills);
var formatedskills = HTMLskills.replace("%data%", skills[2]);
$("#skills").append(formatedskills);
var formatedskills = HTMLskills.replace("%data%", skills[3]);
$("#skills").append(formatedskills);
var formatedskills = HTMLskills.replace("%data%", skills[4]);
$("#skills").append(formatedskills);
var formatedskills = HTMLskills.replace("%data%", skills[5]);
$("#skills").append(formatedskills);
var formatedskills = HTMLskills.replace("%data%", skills[6]);
$("#skills").append(formatedskills);
var formatedskills = HTMLskills.replace("%data%", skills[7]);
$("#skills").append(formatedskills);
var formatedskills = HTMLskills.replace("%data%", skills[8]);
$("#skills").append(formatedskills);
var formatedskills = HTMLskills.replace("%data%", skills[9]);
$("#skills").append(formatedskills);
}
 for (var contact in bio.contacts) {
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github_username);
var bioLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
$("#topContacts").append(formattedMobile, formattedEmail, bioLocation);
}
//$("#map-Div").append(googleMap);
//$("#header").prepend(work.position);
//$("#main").append(education["name"]);
//$("#main").append(education["years"]);
//$("#main").append(education["city"]);
//$("#education").append(formattedschoolname);
function displayeducation(){
for (school in education.schools){
$("#education").append(HTMLschoolStart);
var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
var formattedschoolDegree = HTMLschoolDegree.replace("%data%",  education.schools[school].degree);
var formattedschooldates = HTMLschoolDates.replace("%data%",  education.schools[school].dates);
var formattedschoolmajor = HTMLschoolMajor.replace("%data%",  education.schools[school].major);
var formattedschoollocation = HTMLschoolLocation.replace("%data%",  education.schools[school].location);
$(".education-entry:last").append(formattedschoolName);
$(".education-entry:last").append(formattedschoolDegree);
$(".education-entry:last").append(formattedschooldates);
$(".education-entry:last").append(formattedschoolmajor);
$(".education-entry:last").append(formattedschoollocation);
}
}
displayeducation();


function displaywork(){
for (job in work.jobs){
$("#workExperience").append(HTMLworkStart);
var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
var formattedworkTitle = HTMLworkTitle.replace("%data%",  work.jobs[job].title);
var formattedworkDates = HTMLworkDates.replace("%data%",  work.jobs[job].dates);
var formattedworkLocation = HTMLworkLocation.replace("%data%",  work.jobs[job].location);
var formattedworkDescription = HTMLworkDescription.replace("%data%",  work.jobs[job].description);
$(".work-entry:last").append(formattedworkEmployer);
$(".work-entry:last").append(formattedworkTitle);
$(".work-entry:last").append(formattedworkDates);
$(".work-entry:last").append(formattedworkLocation);
$(".work-entry:last").append(formattedworkDescription);
}
}
displaywork();

function displayprojects(){
for (name in projects.names){
$("#projects").append(HTMLprojectStart);
var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.names[name].title);
var formattedprojectDates = HTMLprojectDates.replace("%data%",  projects.names[name].dates);
var formattedprojectDescription = HTMLprojectDescription.replace("%data%",  projects.names[name].description);
$(".project-entry:last").append(formattedprojectTitle);
$(".project-entry:last").append(formattedprojectDates);
$(".project-entry:last").append(formattedprojectDescription);
}
}
displayprojects();

function inName() {
var myname=bio.name;
  myname = myname.split(" ");
  //console.log(myname);
  myname[0] = myname[0].toLowerCase();
  //console.log(myname[0]);
  myname[1] = myname[1].toUpperCase();
 // console.log(myname[1]);
  myname[0] = myname[0].charAt(0).toUpperCase() + myname[0].slice(1);
  myname = myname[0] +" "+myname[1];
 return myname;
}
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);