const data = {
    "first_name": "Denis",
    "last_name": "Voronov",
    "job_title": "FRONT-END DEVELOPER",
    "photo": "./images/cat2.jpg",
    "phone": "+380639901449",
    "email": "mr.denis.voronov@gmail.com",
    "github": "https://github.com/mr-voronov",
    "address": "Dnipro, Ukraine",
    "skills": [
        "HTML, CSS",
        "Bootstrap",
        "Gulp",
        "JS",
        "And many others, not used here",
    ],
    "education": [
        ["2021", "HTML for JS Dev, ItGid.info"],
    ],
    "achievements": [
        "I finished this great course in less than a mounth, parallel to all the regular stuff in my life."
    ],
    "profile": "I am a champion of focus. Have skills required for the front-end developer position, as well as a great courage for facing any task.<br>Below described a process of building this page. But this template can be used as CV as well."
};

const experience = [
    {
        "company": "HTML Department",
        "city": "online",
        "from": "Start",
        "to": 'Next Step',
        "position": "Basic Structures Builder",
        "description": "At the beginning I built a simple structure by using tags &lt;div&gt; &lt;article&gt; &lt;section&gt;. With them headings from &lt;h1&gt; to &lt;h5&gt; were used, as well as a tag &lt;header&gt;. To add image tag &lt;img&gt; was used. Also I embeded couple of lists using tags &lt;ul&gt; &lt;li&gt; and &lt;a&gt;. Last was required for making links, such as one to my GitHub. I also applied &lt;span&gt; to add classes and &lt;hr&gt; to draw a line. At that point I had a promotion to BS Dept."
    },
    {
        "company": "Bootstrap Department",
        "city": "online",
        "from": "Previous Step",
        "to": 'Next Step',
        "position": "Grid Simplifier",
        "description": "I continued to work on a layout using such tags as &lt;container&gt; &lt;row&gt; &lt;&gt; &lt;col-lg-?&gt; &lt;col-md-?&gt; &lt;col-sm-?&gt;. Very convenient when it comes to grid building. I also used &lt;mt-?&gt; and &lt;mb-?&gt; utility classes to modify margins. Working with display &lt;d-none&gt; &lt;d-sm-none&gt; and similar tags were wery usefull. Last but not least, &lt;img-thumbnail&gt; and &lt;rounded-circle&gt; did a great job styling an avatar."
    },
    {
        "company": "CSS Department",
        "city": "online",
        "from": "Previous Step",
        "to": 'Next Step',
        "position": "Appearance Magician",
        "description": "Many selectors were written. Not mentioning all of them @media magic was applied in order to make this page look great in any device."
    },
    {
        "company": "JS Department",
        "city": "online",
        "from": "Previous Step",
        "to": 'The End',
        "position": "Coder",
        "description": "This JS code is just reordered version of default lesson code. But I got the meaning."
    }
];

// cv-left
// photo, contacts, address
document.querySelector('.contacts-block').innerHTML += `<li><a href="tel:${data.phone}">${data.phone}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="mailto:${data.email}"><i class="bi bi-envelope"></i>mr.denis.voronov</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.github}"><i class="bi bi-github"></i>mr-voronov</a></li>`
document.querySelector('.address').innerHTML = `<p>${data.address}</p>`;
document.querySelector('#my-photo').src = data.photo;

// skills
let skillsData = '';
data.skills.forEach(item => {
    skillsData += `<li>${item}</li>`;
});
document.querySelector('.skills-list').innerHTML = skillsData;

// education
let educationData = '';
data.education.forEach(item => {
    educationData += `<li>${item[0]}, ${item[1]}</li>`;
});
document.querySelector('.education-list').innerHTML = educationData;

// achievements
let achievementsData = '';
data.achievements.forEach(item => {
    achievementsData += `<li>${item}</li>`;
});
document.querySelector('.achievements-list').innerHTML = achievementsData;


// cv-right
// header, profile
document.querySelector('#my-name').innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.querySelector('.job-title').textContent = data.job_title;
document.querySelector('.profile-data').innerHTML = data.profile;

// experience
let expirienceData = '';
experience.forEach(item => {
    expirienceData += `<section class="mb-5">`;
    expirienceData += ` <h4 class="mb-2 company-name">${item.company} - ${item.city}, <span class="text-italic">${item.from} - ${item.to}</span></h4>`;
    expirienceData += `<h5>${item.position}</h5>`;
    expirienceData += `<p>${item.description}</p>`;
    expirienceData += `</section>`;
});
document.querySelector('.experience-list').innerHTML = expirienceData;
