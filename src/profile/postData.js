import avatar from "../assets/lady.jpg";

const postdata = [
  {
    username: "Rihanna Cooper",
    img_url: avatar,
    name: "Bob Johnson",
    time: "2024-05-14T10:45:00",
    message:
      "Hi, I have experience in the field and am excited to apply for the position.",
    type: "job_seeker",
    post_img_urls: [],
    comments: [
      {
        username: "employer2",
        message:
          "We've received your resume. We'll contact you for the next steps.",
        time: "2024-05-13T14:20:00",
      },
    ],
    likes: 5,
  },
  {
    username: "Rihanna Cooper",
    img_url: avatar,
    name: "Emily Chen",
    time: "2024-05-14T08:00:00",
    message:
      "Good morning! I'm interested in the job position and would like to discuss further.",
    type: "job_seeker",
    post_img_urls: [],
    comments: [],
    likes: 8,
  },
  {
    username: "Rihanna Cooper",
    img_url: avatar,
    name: "Michael Brown",
    time: "2024-05-14T12:20:00",
    message:
      "Hello! I'm excited about the opportunity. When can we discuss further?",
    type: "job_seeker",
    post_img_urls: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    comments: [],
    likes: 12,
  },
  {
    username: "Rihanna Cooper",
    img_url: avatar,
    name: "Sophia Rodriguez",
    time: "2024-05-14T11:05:00",
    message:
      "Hi there! I'm eager to apply for the position. Can you provide more details?",
    type: "job_seeker",
    post_img_urls: [],
    likes: 6,
  },
  {
    username: "Rihanna Cooper",
    img_url: avatar,
    name: "John Doe",
    time: "2024-05-13T16:55:00",
    message:
      "Thank you for your interest. We will review your qualifications and reach out shortly.",
    type: "employer",
    post_img_urls: [
      "https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1498049860654-af1a5c566876?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    comments: [
      {
        username: "job_seeker1",
        message: "Looking forward to hearing from you. Thank you!",
        time: "2024-05-14T09:30:00",
      },
    ],
    likes: 15,
  },
];

export default postdata;
