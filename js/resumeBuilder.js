//JSON objects for biography, work, education and projects

var bio = {
    "name": "Vasyl Sherstobit0v",
    "role": "Java Junior Developer",
    "contacts": {
        "mobile": "123-456-1277",
        "email": "vasysh@ukr.net",
        "github": "ibasil",
        "location": "Kyiv, Ukraine"
    },
    "welcomeMessage": "I'm passionate about Java programming and looking for software developer position",
    "skills": [
        "Java SE (I/O, Generics, Collections, JDBC)",
        "J2EE (JPA, JSF, Spring IoC)",
        "Tools: Maven, Tomcat, Git, VirtualBox",
        "Databases: MySQL",
        "JavaScript/CSS/HTML/Bootstrap",
        "Core Unix commands"
    ],
    "bioPic": "images/fry.jpg"
};

bio.display = function() {
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedMobile = HTMLheaderName.replace("%data%", bio.mobile);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for (i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}
}

var work = {
    "jobs": [
        {
            "employer": "INFO",
            "title": "Front-End Web Developer",
            "location": "Kyiv, Ukraine",
            "dates": "2013 - Present",
            "description": "All things front-end related."
        },
        {
            "employer": "CMPX",
            "title": "Front-End Web Developer",
            "location": "Kyiv, Ukraine",
            "dates": "2012 - 2013",
            "description": "Sales manager"
        },
        {
            "employer": "BAKO",
            "title": "Sales Manager, MS Brand Manager",
            "location": "Kyiv, Ukraine",
            "dates": "2008 - 2012",
            "description": "Building regional network of software retailers"
        }
    ]
};


work.display = function(){

	for (var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job]["title"]))
								.append(HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]))
								.append(HTMLworkLocation.replace("%data%", work.jobs[job]["location"]))
								.append(HTMLworkDates.replace("%data%", work.jobs[job]["dates"]))
								.append(HTMLworkDescription.replace("%data%", work.jobs[job]["description"]));
	}

}

var education = {
    "schools": [
        {
            "name": "Bionic University",
            "location": "Kyiv, Ukraine",
            "degree": "Student",
            "major": [
                "Java Enterprise Edition"
            ],
            "dates": "January - April of 2015",
            "url": "http://bionic-university.com/en/programs/java_ee/"
        },
        {
            "name": "Bionic University ",
            "location": "Kyiv, Ukraine",
            "degree": "Student",
            "major": [
                "Java Standard Edition"
            ],
            "dates": "October - December of 2014",
            "url": "http://bionic-university.com/"
        },
        {
            "name": "NTUU Kyiv Polythechnic University",
            "location": "Kyiv, Ukraine",
            "degree": "Specialist",
            "major": [
                "Computer Science"
            ],
            "dates": "2000 - 2006",
            "url": "http://fiot.kpi.ua/"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript basics",
            "school": "Udacity",
            "dates": "July 2015",
            "url": "https://www.udacity.com/course/javascript-basics--ud804"
        },
        {
            "title": "Intro to HTML and CSS ",
            "school": "Udacity",
            "dates": "June 2015",
            "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
            "title": "Principles of Project Management",
            "school": "Polythechnic West",
            "dates": "May of 2015",
            "url": "https://www.open2study.com/courses/principles-of-project-management"
        },
        {
            "title": "Negotiation and Conflict Resolution",
            "school": "Macquarie Graduate School of Management",
            "dates": "May of 2015",
            "url": "https://www.open2study.com/courses/negotiation-and-conflict-resolution"
        }
    ]
};


education.display = function () {
    var formattedHtml, edu;
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {

        $("#education").append("<div id=\"education-foldable-content\"></div>");
        for (edu in education.schools) {
            if (education.schools.hasOwnProperty(edu)) {
                $("#education-foldable-content").append(HTMLschoolStart);
                formattedHtml = HTMLschoolName.replace("%data%", education.schools[edu].name);
                $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[edu].dates));
                $(".education-entry:last").append(formattedHtml);
                $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[edu].location));
                $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[edu].degree));
                $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[edu].major));
            }
        }

        $(".education-entry:last").append(HTMLonlineClasses);
        for (edu in education.onlineCourses) {
            if (education.onlineCourses.hasOwnProperty(edu)) {
                formattedHtml = HTMLonlineTitle.replace("%data%", education.onlineCourses[edu].title);
                $(".education-entry:last").append(formattedHtml);
                $(".education-entry:last").append(HTMLonlineSchool.replace('%data%', education.onlineCourses[edu].school));
                $(".education-entry:last").append(HTMLonlineDates.replace('%data%', education.onlineCourses[edu].dates));
            }
        }
    }
};

var projects = {
    "projects": [
        {
            "title": "Online restaurant",
            "datesWorked": "December 2014 - April 2015",
            "description": "Site for ordering food with separate pages for different staff like administrator, business analyst, security officer etc. Development of whole application based on 3-tier architecture including database development using MySQL, implementation of database tier using EclipseLink, application tier using Spring IoC, presentation tier using JSF, Bootsfaces, build automation using Maven.",
            "images": [
                "http://placehold.it/250x100"
            ],
            "url": "https://github.com/ibasil/"
        },
        {
            "title": "Front-end resume",
            "datesWorked": "November 2015",
            "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer Nanodegree.",
            "images": [
                "http://placehold.it/250x100"
            ],
            "url": "https://ibasil.github.io/frontend-nanodegree-resume/"
        },
        {
            "title": "Bootstrap simple project",
            "datesWorked": "October 2015",
            "description": "Created simple Bootstrap page for Udacity's Web Development Course.",
            "images": [
                "images/bootstrap.png"
            ],
            "url": "https://ibasil.github.io/bootstrap/"
        }
    ]
};

projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}


		}
	}
}

bio.display();
work.display();
projects.display();
education.display();
