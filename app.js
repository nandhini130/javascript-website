var appliedLeap = [];
var appliedHackathon = [];
var appliedMission = [];
var appliedMeetup = [];
var backButton = document.getElementsByClassName('backButton');
var vhevents = document.getElementsByClassName('vhevents');
var events = document.getElementsByClassName('horizontal');
var hiring = document.getElementsByClassName('hiring');
var vanHackathon = document.getElementsByClassName('vanHackathon');
var meetup = document.getElementsByClassName('meetup');

var webinar = document.getElementsByClassName('webinar')
var premiumWebinar = document.getElementsByClassName('premiumWebinar')
var basicWebinar = document.getElementsByClassName('basicWebinar')

var leapcollection = document.querySelector('#leapEvnets');
var meetupcollection = document.querySelector('#vhmeetup');

var premiumStatus = false;
var cloneCounter = {
    leap: 0,
    meetup: 0
}

var leapData = [
    {
        "image": "https://www.jambit.com/site/assets/files/10283/softwareentwicklung-coding-meetup-muenchen-tech-talks.-squaremedium.jpg",
        "title": "Tech Talks",
        "description": "We are back! This time it’s virtual, allowing participants from all over the world to gather, find community, sharpen their skills and learn how to thrive in tech. Our signature annual event is so much more than a meetup. It is an intentional and inclusive space, a space of community. And we invite everyone to have a seat at the table. Every voice counts. Every perspective matters. Every person is needed.",
        "about": "TECHTALKS Canada 2020 is a two-day technology expo returning December 20th to 21st, 2020 to the luxurious Marriott Downtown at CF Toronto Eaton Centre Hotel in Toronto, Ontario. TECHTALKS Canada brings together some of the best developers, brands, marketers, technology providers, designers, innovators and evangelists looking to set the pace in our advanced world of technology. Watch exhibitors showcase the next generation of advances in technology & innovation, including; Internet, Mobile, AdTech, MarTech & SaaS technologies. Be prepared to be inspired, amazed and educated on how these evolving technologies will impact your business for greater growth.<br/><br/>As part of TECHTALKS Toronto is a limited attendance paid event, DigiMarCon Canada 2020 Digital Marketing Conference. If the conference is where the learning, theory and inspiration happens, then the TECHTALKS floor is where the testing, networking and product interaction takes place."
    },
    {
        "image": "https://media.graphcms.com/zyM0wIRpQmmUVOt3iDpF",
        "title": "Code Earth",
        "description": "Our events bring together the latest technology advancements as well as practical examples to apply AI to solve challenges in business and society. Our unique mix of academia and industry enables you to meet with AI pioneers at the forefront of research, as well as exploring real-world case studies to discover the business value of AI.",
        "about": "This expo is the most attended job and career event in the Greater Toronto Area with an environment of learning, employment opportunities and a day of professional interactions.<br/><br/>Our past events have included major Canadian employers like KEB Hana Bank, Air Canada, Fairmont Royal York, Apple Canada, CIBC, Rogers Communications, Labatt Breweries, Ministry of Community Security and Correctional Services, Bell Canada, Canada Post, ADT Canada, Desjardins, Moosehead Breweries, Toronto Police, Ontario Public Service (Ministry of Govt. Services) and a host of employers from Alberta, Manitoba, British Columbia as well as International Organizations from The United States, China and South Korea.<br/><br/>This expo brings Canadian employers, various organizations and educational institutions together with skilled workers and students for a day of learning and employment opportunities. There are five free optional workshops available.<br/><br/>This event is FREE to job seekers and those in between careers. Everyone is welcome to attend and gain something out of it. There are no restrictions on who can attend."
    },
    {
        "image": "https://wit.org.au/resources/Pictures/Logos/SHOWMUSTGOON_v4%20(002).jpg",
        "title": "WIT 2020",
        "description": "To empower women in tech through a kick-ass network, intentional teaching & purposeful community because it does take a village. Our goal is to make to Atlanta the number one place for “women in tech” (because clearly it’s not Silicon Valley).",
        "about": "WomenHack is a community that empowers women in tech through events, jobs, and reviews. We aim to create a more inclusive and diverse workplace for all. Our diversity recruiting events target some of the most talented women in tech which include software developers, designers, and product talent.<br/><br/>Our virtual events are kicked off with diversity talks, followed by our signature rapid-interviews through our online video matching platform. Our virtual events can be just as effective as our in-person events since you'll have the opportunity to connect with more candidates.<br/><br/>We invite you to join us in working towards the vision of equalizing the playing field in the tech industry while building mutually benefitting from an inclusive team."
    }
]
var meetupsData = [
    {
        "imageUrl": "https://pix6.agoda.net/geo/city/4923/1_4923_02.jpg?s=1920x822",
        "city": "Bangalore",
        "addrrss": "The Chancery Pavilion,#135, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru",
        "date": "Jan 3rd 2020 - 8PM",
        "contact": 9854260123,
        "description": "We are bringing an event for Tech Talents who want to relocate to Canada or Europe and don’t know how.<br/><br/>At the Meetup, you’ll have the opportunity to be part of a live Recruiting Fair where you will see opportunities from companies in Canada and Europe looking for talents just like you.<br/><br/>One thing people usually are confused about is about the immigration process. How does it work to get a work permit? Can my family move with me? How long does the process take? A specialist on our Meetup will answer these and other questions.<br/><br/>Another doubt people have is about the English. How important are your English Skills for getting a job abroad? We’ll have our partner, LingoCentre, responsible for our English Verification, talking about it.<br/><br/>Meetup will happen on September 20th, starting at 6 PM. Since we have a limited seat number, we need to make a selection of people who apply. To know more about the people attending to match the vacancies better to the Recruiting Fair, you’ll need to create and fill out your VanHack Profile. You’ll receive further instructions on your email."
    },
    {
        "imageUrl": "https://thumbs.dreamstime.com/b/chennai-central-railway-station-chennai-central-erstwhile-madras-central-main-railway-terminus-city-chennai-tamil-138091811.jpg",
        "city": "Chennai",
        "addrrss": "The Leela Palace Chennai, Adyar Sea Face, The Leela Palace Road, Sathyadev Ave, MRC Nagar, Chennai,",
        "date": "Mar 3rd 2020 - 8PM",
        "contact": 9854260789,
        "description": "We are bringing an event for Tech Talents who want to relocate to Canada or Europe and don’t know how.<br/><br/>At the Meetup, you’ll have the opportunity to be part of a live Recruiting Fair where you will see opportunities from companies in Canada and Europe looking for talents just like you.<br/><br/>One thing people usually are confused about is about the immigration process. How does it work to get a work permit? Can my family move with me? How long does the process take? A specialist on our Meetup will answer these and other questions.<br/><br/>Another doubt people have is about the English. How important are your English Skills for getting a job abroad? We’ll have our partner, LingoCentre, responsible for our English Verification, talking about it.<br/><br/>Meetup will happen on November 20th, starting at 6 PM. Since we have a limited seat number, we need to make a selection of people who apply. To know more about the people attending to match the vacancies better to the Recruiting Fair, you’ll need to create and fill out your VanHack Profile. You’ll receive further instructions on your email."
    },
    {
        "imageUrl": "https://d3hfxk7rwdcpol.cloudfront.net/CSN/0abb0d8a-960b-4857-af10-45665ca3d7b3/images/f0fbea85d0f54612b873170c6c110c56_LARGE.jpg",
        "city": "Mumbai",
        "addrrss": "The Taj Mahal Palace, Apollo Bandar, Colaba, Mumbai, Maharashtra 400001",
        "date": "May 3rd 2020 - 8PM",
        "contact": 9854260234,
        "description": "We are bringing an event for Tech Talents who want to relocate to Canada or Europe and don’t know how.<br/><br/>At the Meetup, you’ll have the opportunity to be part of a live Recruiting Fair where you will see opportunities from companies in Canada and Europe looking for talents just like you.<br/><br/>One thing people usually are confused about is about the immigration process. How does it work to get a work permit? Can my family move with me? How long does the process take? A specialist on our Meetup will answer these and other questions.<br/><br/>Another doubt people have is about the English. How important are your English Skills for getting a job abroad? We’ll have our partner, LingoCentre, responsible for our English Verification, talking about it.<br/><br/>Meetup will happen on December 20th, starting at 6 PM. Since we have a limited seat number, we need to make a selection of people who apply. To know more about the people attending to match the vacancies better to the Recruiting Fair, you’ll need to create and fill out your VanHack Profile. You’ll receive further instructions on your email."

    },
    {
        "imageUrl": "https://www.akshartours.com/wp-content/uploads/2020/08/Things-to-Do-in-Delhi.jpg",
        "city": "New Delhi",
        "addrrss": "Taj Palace, 2, Sardar Patel Marg, Diplomatic Enclave, Malcha, New Delhi",
        "date": "Aug 3rd 2020 - 8PM",
        "contact": 9854260731,
        "description": "We are bringing an event for Tech Talents who want to relocate to Canada or Europe and don’t know how.<br/><br/>At the Meetup, you’ll have the opportunity to be part of a live Recruiting Fair where you will see opportunities from companies in Canada and Europe looking for talents just like you.<br/><br/>One thing people usually are confused about is about the immigration process. How does it work to get a work permit? Can my family move with me? How long does the process take? A specialist on our Meetup will answer these and other questions.<br/><br/>Another doubt people have is about the English. How important are your English Skills for getting a job abroad? We’ll have our partner, LingoCentre, responsible for our English Verification, talking about it.<br/><br/>Meetup will happen on January 20th, starting at 6 PM. Since we have a limited seat number, we need to make a selection of people who apply. To know more about the people attending to match the vacancies better to the Recruiting Fair, you’ll need to create and fill out your VanHack Profile. You’ll receive further instructions on your email."

    }
]
var hackathonData = [
    {
        "title": "VR Hackathon",
        "date": "3 Oct 2020",
        "event": "A Hackathon is an event designed to foster innovation, collaboration and learning, enabling participants to be creative without the limitations of pre-existing ecosystems.This Hackathon is focused on using machine learning. The specific challenge will be announced closer to the event.",
        "skill": "We're looking for a diverse group of people who are great at problem solving, can innovate and bring different perspectives. Teams of up to 6 can participate. You are welcome to form teams beforehand or join up on the day! If you are a data scientist, software engineer, UX or graphic designer, product owner or strategist and interested in creating tech for good solutions - this hackathon is for you. You don't need to have any machine learning expertise, we can provide some guidance to get you up to a basic level prior to the event.",
        "background": "https://image.freepik.com/free-vector/gradient-geometric-shapes-dark-background_52683-33258.jpg"
    },
    {
        "title": "Online Hackathon",
        "date": "12 Dec 2020",
        "event": "The hackathon is an excellent opportunity to improve your coding skills, network with people in your field, or to try out that project you've always wanted to work on but never found the time. <br/> Alternatively, you may want to work as part of a team in a field that is completely new to you. It's really up to you. All that we ask is that you work on a computational project with a life sciences focus. Many of the participants last time came up with their own ideas for a project and worked on that for the three days. Alternatively, it may be possible to work on a project proposed by someone else. If you can't think of anything, then why not use the time to learn a new programming language or computational skill.",
        "skill": " The hackathon is aimed at people of all skill sets, from people new to coding through to experts in  their respective fields. This is a chance to work in a friendly collaborative atmosphere and have some fun. <br/><br/>  The previous two hackathons have taken place at venues in Cambridge, but obviously this year things are different. Rather that dispense with the hackathon all together, we decided to organise an online event in which we can interact via Zoom. It is free to take part.",
        "background": "https://img.freepik.com/free-vector/colorful-gradient-geometric-shapes-background_23-2148319219.jpg?size=626&ext=jpg"
    }
]

setShareLinks();

function toggleUser(premium) {
    premiumStatus = premium.checked;
    if (premiumStatus) {
        document.getElementById('user').style.display = "none";
        document.getElementById('premimumUser').style.display = "block";
    } else {
        document.getElementById('user').style.display = "block";
        document.getElementById('premimumUser').style.display = "none";
    }
}

function navigateToEvents() {
    vhevents[0].style.display = "block";
    backButton[0].style.display = "none";
    events[0].style.display = "none";
    hiring[0].style.display = "none"
    vanHackathon[0].style.display = "none"
    meetup[0].style.display = "none"
    webinar[0].style.display = "none"
    premiumWebinar[0].style.display = "none"
}

function eventModalSetup() {
    document.getElementById('hackathonTitle').style.display = "block";
    document.getElementById('eventDate').style.display = "block";
    document.getElementById('applyNow').style.display = "initial";
    document.getElementById('skillHedaer').style.display = "block";
    document.getElementById('skillDetails').style.display = "block";
    document.getElementById('hackathonModalLabel').style.display = "block";
    document.getElementById('skillDetails').parentElement.style.display = "block";
    document.getElementById('hackathonTitle').style.color = 'white';
    document.getElementById('checkIcon').style.display = "none";
}

function loadLeapEvents() {
    events[0].style.display = "block"
    backButton[0].style.display = "block";
    vhevents[0].style.display = "none";
    eventModalSetup();
    if (cloneCounter.leap == 0) {
        var count = leapData.length - 1;
        for (var i = 0; i < count; i++) {
            var clone = leapcollection.cloneNode(true);
            // console.log(clone);
            clone.id = 'leapEvents' + i;
            leapcollection.after(clone);
        }
        var leapimages = document.getElementsByClassName('leapImg')
        var leaptitle = document.getElementsByClassName('leapTitle')
        var leapdesc = document.getElementsByClassName('LeapDesc')
        var laButtons = document.getElementsByClassName('labutton')
        var sdbuttons = document.getElementsByClassName('sdbutton')

        for (x = 0; x < leapData.length; x++) {
            leapimages[x].src = leapData[x].image;
            leaptitle[x].innerHTML = leapData[x].title;
            leapdesc[x].innerHTML = leapData[x].description;
            laButtons[x].id = 'leap' + x;
            sdbuttons[x].id = leapData[x].title;

        }
        cloneCounter.leap++;
    }
}

function applyEvent(eventId) {
    document.getElementById('confimationMsg').innerHTML = "Awesome! You have applied Successfully"
    $('#confirmationModal').modal();
    document.getElementById(eventId).innerHTML = 'Applied';
    document.getElementById(eventId).disabled = true;
}

function leapEventDetails(event) {
    leapData.find((e) => {
        if (e.title == event) {
            document.getElementById('eventDetails').innerHTML = e.about;
            let imageLink = 'url(https://media.graphcms.com/zyM0wIRpQmmUVOt3iDpF)';
            document.getElementById('hackBg').style.backgroundImage = imageLink;
            document.getElementById('hackathonModalLabel').style.display = 'none';
            // document.getElementById('hackathonTitle').style.display = "none";
            // document.getElementById('eventDate').style.display = "none";
            // document.getElementById('applyNow').style.display = "none";
            document.getElementById('skillDetails').parentElement.style.display = "none";
        }
    })
    $('#HackathonModal').modal();
}

function loadRecruitments() {
    backButton[0].style.display = "block";
    vhevents[0].style.display = "none";
    hiring[0].style.display = "block"
}

function applyForHiring(eventId) {
    document.getElementById('confimationMsg').innerHTML = "Awesome! You have applied Successfully"
    $('#confirmationModal').modal();
    document.getElementById(eventId).innerHTML = 'Applied';
    document.getElementById(eventId).disabled = true;
}

function loadHackathon() {
    backButton[0].style.display = "block";
    vhevents[0].style.display = "none";
    vanHackathon[0].style.display = "block"
    eventModalSetup();

}
function hackathonDetails(title) {
    hackathonData.find((e) => {
        if (e.title == title) {
            document.getElementById('hackathonTitle').innerHTML = e.title;
            document.getElementById('eventDate').innerHTML = e.date;
            document.getElementById('eventDetails').innerHTML = e.event;
            document.getElementById('skillDetails').innerHTML = e.skill;
            let tmp = 'url(' + e.background + ')';
            document.getElementById('hackBg').style.backgroundImage = tmp;
            let status = appliedHackathon.indexOf(title);
            if (status >= 0) {
                let event = {
                    innerHTML: title
                }
                applyHackathon(event)
            } else {
                document.getElementById('applyNow').style.display = "initial";
                document.getElementById('appliedMsg').style.display = "none";
                document.getElementById('checkIcon').style.display = "none";
                document.getElementById('appliedMsg').innerHTML = '';
            }
        }
    })
    $('#HackathonModal').modal();
}

function applyHackathon(event) {
    var titlename = event.innerHTML;
    let indexVal = appliedHackathon.indexOf(titlename);
    if (indexVal < 0) {
        appliedHackathon.push(titlename)
    }
    document.getElementById('applyNow').style.display = "none";
    document.getElementById('appliedMsg').style.display = "contents";
    document.getElementById('checkIcon').style.display = "contents";
    document.getElementById('appliedMsg').innerHTML = "- You have applied successfully! ";

}

function loadMeetups() {
    backButton[0].style.display = "block";
    vhevents[0].style.display = "none";
    meetup[0].style.display = "block";
    eventModalSetup();
    if (cloneCounter.meetup == 0) {
        var count = meetupsData.length - 1;
        for (var i = 0; i < count; i++) {
            // console.log(i);
            var meetupClone = meetupcollection.cloneNode(true);
            meetupClone.id = 'meetup' + i;
            meetupcollection.after(meetupClone);
        }
        var images = document.getElementsByClassName('meetupImg');
        var cities = document.getElementsByClassName('meetupCity');
        var places = document.getElementsByClassName('meetAddress');
        var mdates = document.getElementsByClassName('meetDate');
        var contacts = document.getElementsByClassName('meetupContact');
        var mdButtons = document.getElementsByClassName('mdBtn');
        var mdApplyButtons = document.getElementsByClassName('mdapplyBtn');
        for (x = 0; x < meetupsData.length; x++) {
            images[x].src = meetupsData[x].imageUrl;
            cities[x].innerHTML = meetupsData[x].city;
            places[x].innerHTML = meetupsData[x].addrrss;
            mdates[x].innerHTML = meetupsData[x].date;
            contacts[x].innerHTML = meetupsData[x].contact;
            mdButtons[x].id = meetupsData[x].city;
            mdApplyButtons[x].id = meetupsData[x].city + 'Meetup';
        }
        cloneCounter.meetup++;
    }

}

function meetupDetails(city) {
    meetupsData.find((e) => {
        if (e.city == city) {
            document.getElementById('hackathonTitle').style.display = "none";
            // document.getElementById('hackathonTitle').style.color = 'black';
            document.getElementById('eventDate').innerHTML = '';
            document.getElementById('eventDetails').innerHTML = e.description;
            document.getElementById('applyNow').style.display = "none";
            document.getElementById('skillDetails').parentElement.style.display = "none";
            document.getElementById('appliedMsg').style.display = "none";
            let tmp = 'url(' + e.imageUrl + ')';
            document.getElementById('hackBg').style.backgroundImage = tmp;
        }
    })
    $('#HackathonModal').modal();
}

function loadWebinar(userType) {
    vhevents[0].style.display = "none";
    backButton[0].style.display = "block";
    if (userType === 'Premium') {
        if (premiumStatus) {
            webinar[0].style.display = "block";
            premiumWebinar[0].style.display = "block";
            basicWebinar[0].style.display = "none";
        } else {
            premiumPricing();
        }
    }

    if (!premiumStatus && userType === 'Basic') {
        webinar[0].style.display = "block";
        premiumWebinar[0].style.display = "none";
        basicWebinar[0].style.display = "block";
    }
}

function premiumPricing() {
    vhevents[0].style.display = "block";
    backButton[0].style.display = "none";
    document.getElementById('premimumAlert').style.display = "block"
    setTimeout(() => {
        document.getElementById('premimumAlert').style.display = "none"
    }, 5000);
}

// share on Social Media

function socialMediaWindow(url) {

    var left = (screen.width - 570) / 2;
    var top = (screen.height - 570) / 2;

    var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;

    window.open(url, "NewWindow", params);
}

function setShareLinks() {


    var pageUrl = encodeURIComponent(document.URL);
    var tweet = encodeURIComponent($("meta[property='og:description']").attr("content"));


    $(".socialMedia.facebook").on("click", function () {
        url = "https://www.facebook.com/sharer.php?u=calibergaming.in";
        socialMediaWindow(url);
    })
    $(".socialMedia.twitter").on("click", function () {
        url = "https://www.twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
        socialMediaWindow(url);
    })
    $(".socialMedia.linkedin").on("click", function () {
        url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
        socialMediaWindow(url);
    })
    $(".socialMedia.whatsapp").on("click", function () {
        url = "https://wa.me/?text=" + pageUrl;
        socialMediaWindow(url);
    })
}