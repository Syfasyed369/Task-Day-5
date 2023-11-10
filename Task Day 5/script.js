// Sample JSON object
const json = {
    name: "Syed Ibrahim",
    age: 30,
    email: "syfasyed369@gmail.com"
  };
  
  // Using for...in loop
  for (let key in json) {
    console.log(key + ": " + json[key]);
  }
  
  // Using for...of loop
  for (let value of Object.values(json)) {
    console.log(value);
  }
  
  // Using forEach loop
  Object.entries(json).forEach(([key, value]) => {
    console.log(key + ": " + value);
  });
  


  //create your own resume in JSON Format
  const resume = {
    name: "SYED IBRAHIM",
    title: "MERN Stack Developer",
    contact: {
      email: "syfasyed369@gmail.com",
      phone: "638-066-7237",
      address: "A17,jahir husain illam, tennur, trichy, Tamilnadu"
    },
    skills: ["JavaScript", "HTML", "CSS"],
    experience: [
      {
        company: "ABC Corp",
        position: "FrontEnd Developer",
        duration: "2023 - Present",
        responsibilities: [
          "Developed and maintained web applications using JavaScript, HTML, and CSS",
          "Collaborated with cross-functional teams to deliver high-quality software",
          "Participated in code reviews and provided constructive feedback"
        ]
      },
      {
        company: "XYZ Inc",
        position: "Junior Developer",
        duration: "2020 - 2022",
        responsibilities: [
          "Assisted in the development of web applications",
          "Debugged and fixed issues in existing codebase",
          "Learned and applied best practices in software development"
        ]
      }
    ],
    education: [
      {
        institution: "BharathiDasan University",
        degree: "Master of Arts in English Literature",
        graduationYear: 2020
      }
    ]
  };
  
  console.log(resume);
  