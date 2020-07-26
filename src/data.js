const initalData = {
  courses: {
    "course-1": {
      id: "course-1",
      type: "COURSE",
      title: "AWS Certified Solutions Architect Associate 2020",
      description:
        "Learn the major components of Amazon Web Services, and prepare for the associate-level AWS Certified Solutions Architect exam – one of the industry's most in-demand certifications!"
    },
    "course-2": {
      id: "course-2",
      type: "COURSE",
      title: "AWS Certified Cloud Practitioner 2020",
      description:
        "Learn the major components of Amazon Web Services, and prepare for the AWS Certified Cloud Practitioner exam"
    },
    "course-3": {
      id: "course-3",
      type: "COURSE",
      title: "AWS Certified Developer - Associate 2020",
      description:
        "Learn how to develop, deploy, and debug Serverless applications using AWS and pass the AWS Certified Developer –"
    },
    "course-4": {
      id: "course-4",
      type: "COURSE",
      title: "AWS Certified Solutions Architect - Professional 2020",
      description:
        "Elevate your AWS game to new heights and obtain one of the most challenging and well-respected certifications in IT"
    },
    "course-5": {
      id: "course-5",
      type: "COURSE",
      title: "Google Certified Professional Cloud Architect 2020",
      description:
        "Develop the skills to become a real-world professional Cloud Architect"
    },
    "course-6": {
      id: "course-6",
      type: "COURSE",
      title: "Introduction to AWS",
      description:
        "Want to get started with Amazon Web Services? Learn the fundamentals of cloud with our AWS tutorial for beginners."
    },
    "course-7": {
      id: "course-7",
      type: "COURSE",
      title: "AWS Certified SysOps Administrator - Associate 2020",
      description:
        "Learn what it means to deploy, manage, monitor and operate using AWS and pass the AWS Certified SysOps Administrator - Associate Exam"
    },
    "course-8": {
      id: "course-8",
      type: "COURSE",
      title: "AWS Certified Security - Specialty 2020",
      description:
        "Learn about security within Amazon Web Services and pass this specialty exam."
    },
    "course-9": {
      id: "course-9",
      type: "COURSE",
      title: "Introduction to Cloud Computing",
      description:
        "What is Cloud Computing? Explore the basics and learn the benefits with our introduction to cloud computing."
    },
    "course-10": {
      id: "course-10",
      type: "COURSE",
      title: "AWS Certified Solutions Architect Associate SAA-CO2",
      description:
        "What is Cloud Computing? Explore the basics and learn the benefits with our introduction to cloud computing."
    },
    "course-11": {
      id: "course-11",
      type: "COURSE",
      title: "AWS Certified SysOps Administrator - Associate 2020",
      description:
        "What is Cloud Computing? Explore the basics and learn the benefits with our introduction to cloud computing."
    },
    "course-12": {
      id: "course-12",
      type: "COURSE",
      title: "A Starter's Guide to Identity and Access Management (IAM)",
      description:
        "What is Cloud Computing? Explore the basics and learn the benefits with our introduction to cloud computing."
    },
    "course-13": {
      id: "course-13",
      type: "COURSE",
      title: "Applied Machine Learning with BigQuery on Google Cloud Platform",
      description:
        "What is Cloud Computing? Explore the basics and learn the benefits with our introduction to cloud computing."
    },
    "course-14": {
      id: "course-14",
      type: "COURSE",
      title: "AWS Certified Advanced Networking - Specialty 2020",
      description:
        "What is Cloud Computing? Explore the basics and learn the benefits with our introduction to cloud computing."
    },
    "course-15": {
      id: "course-15",
      type: "COURSE",
      title: "Docker for DevOps - From Development to Production",
      description:
        "What is Cloud Computing? Explore the basics and learn the benefits with our introduction to cloud computing."
    }
    // "course-1": {
    //   id: "course-1",
    //   title: "Docker Essentials",
    //   description: "This is the description it could be a few lines long"
    // },
    // "course-2": {
    //   id: "course-2",
    //   title: "AWS Something Something",
    //   description: "This is the description it could be a few lines long"
    // }
  },
  sections: {
    "section-1": {
      id: "section-1",
      title: "Section One",
      courseIds: [
        "course-1",
        "course-2",
        "course-3",
        "course-4",
        "course-5",
        "course-6",
        "course-7",
        "course-8",
        "course-9"
      ]
    },
    "section-2": {
      id: "section-2",
      title: "Section Two",
      courseIds: [
        "course-10",
        "course-11",
        "course-12",
        "course-13",
        "course-14",
        "course-15"
      ]
    },
    "section-3": {
      id: "section-3",
      title: "Section Three",
      courseIds: []
    }
  },
  //For the column / section ordering
  sectionOrder: ["section-1", "section-2", "section-3"]
}

export default initalData
