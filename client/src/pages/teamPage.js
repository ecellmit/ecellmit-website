import React from "react";
import TeamCard from "../components/TeamCard";
import Loader from "./../components/Loader/Loader";

const TeamPage = () => {
  // Hardcoded team member data for 12 members
  const hardcodedTeamData = [
    {
      name: "Vasu Yogeshwar",
      position: "Chairperson",
      photo: "https://media.licdn.com/dms/image/D4D03AQFGXtAjzUZf6g/profile-displayphoto-shrink_800_800/0/1697662395996?e=1706140800&v=beta&t=H7djEoRp0M5P5rL4Me6bVuIeZhUIc1ulqQHL7iyhVps",
      social: {
        instagram: "",
        linkedin: "john_doe_linkedin1",
        email: "john.doe1@example.com",
      },
    },
    {
        name: "Raghav Shah",
        position: "Deputy Chairperson",
        photo: "https://media.licdn.com/dms/image/C4D03AQGzasZYxX33wg/profile-displayphoto-shrink_800_800/0/1653243730227?e=1706140800&v=beta&t=KKFTJvD13aRqSclOz4a1Ycimb-0Et11kKyyYEI8F9B4",
        social: {
          instagram: "john_doe_instagram1",
          linkedin: "john_doe_linkedin1",
          email: "john.doe1@example.com",
        },
      },
      {
        name: "Tejas Kittur ",
        position: "Deputy Chairperson",
        photo: "https://media.licdn.com/dms/image/D4D03AQE84il9C8PpNQ/profile-displayphoto-shrink_800_800/0/1677150346787?e=1706140800&v=beta&t=m8JzXt8TorZLZepqNYkkgZyxY5qPyKxrvdWihhpg5AQ",
        social: {
          instagram: "john_doe_instagram1",
          linkedin: "john_doe_linkedin1",
          email: "john.doe1@example.com",
        },
      },
      {
        name: "Asmit Agarwal",
        position: "Start Up Development and Guidance Head",       
        photo: "https://media.licdn.com/dms/image/D5635AQHC8nRfkQ7dAg/profile-framedphoto-shrink_800_800/0/1699358431177?e=1701453600&v=beta&t=URp0sJlUueNMnNiYvnkmovnkrn3hK1QKPQA0vDvMPlw",
        social: {
          instagram: "john_doe_instagram1",
          linkedin: "john_doe_linkedin1",
          email: "john.doe1@example.com",
        },
      },
      {
          name: "Ananya Saxena",
          position: " Public Relations and Outreach Head",
          photo: "https://media.licdn.com/dms/image/D4D03AQH0tqDOv0QDkA/profile-displayphoto-shrink_800_800/0/1668972601637?e=1706140800&v=beta&t=t6uOFEAhXGzJ8MffM88qp7bDXkLI1BJPc_b7pKZ8hE8",
          social: {
            instagram: "john_doe_instagram1",
            linkedin: "john_doe_linkedin1",
            email: "john.doe1@example.com",
          },
        },
        {
          name: "Charu Yadav",
          position: "Corporate and Alumni Head",
          photo: "https://media.licdn.com/dms/image/C4D03AQF9Wjxv2t7Etw/profile-displayphoto-shrink_800_800/0/1652722450294?e=1706140800&v=beta&t=1j4xNfWl6FKdiAKj-zvKjzwpACQeRq1jAYSbQNLMYkg",
          social: {
            instagram: "john_doe_instagram1",
            linkedin: "john_doe_linkedin1",
            email: "john.doe1@example.com",
          },
        },
        {
            name: "Ayushi Kumari",
            position: "Marketing Head",
            photo: "https://media.licdn.com/dms/image/D5635AQHwlWDKscMAlg/profile-framedphoto-shrink_800_800/0/1677820580217?e=1701453600&v=beta&t=HhJyUVAADlqWV0HMjMQZULE8KKizo_rFRDQstXjuCAQ",
            social: {
              instagram: "john_doe_instagram1",
              linkedin: "john_doe_linkedin1",
              email: "john.doe1@example.com",
            },
          },
          {
              name: "Sagnik Santra",
              position: "Technical Head",
              photo: "https://media.licdn.com/dms/image/D5635AQFs7oUu2n2v0Q/profile-framedphoto-shrink_800_800/0/1695752690722?e=1701453600&v=beta&t=g9JVb_IArefP0iKiXjXG3SkhlZPcM_cL1ODAL8scWgY",
              social: {
                instagram: "john_doe_instagram1",
                linkedin: "john_doe_linkedin1",
                email: "john.doe1@example.com",
              },
            },
            {
              name: "Vansh Nyati",
              position: "Technical Head",
              photo: "https://media.licdn.com/dms/image/D4D35AQFbbUOVU09kDA/profile-framedphoto-shrink_800_800/0/1700823830572?e=1701453600&v=beta&t=pnsu-lKP9r0vyoc6iVkc6PjNRMUGQ1TTvnd7NwWdops",
              social: {
                instagram: "john_doe_instagram1",
                linkedin: "john_doe_linkedin1",
                email: "john.doe1@example.com",
              },
            },
            {
              name: "Ashutosh Kanodia",
              position: "Events Head",
              photo: "https://media.licdn.com/dms/image/C5603AQHozOcLfpTRPw/profile-displayphoto-shrink_800_800/0/1642684242610?e=1706140800&v=beta&t=5Rw0IWQlySdDrMFr-CRTYXiTliF-TXh8pccZSF2Xj1E",
              social: {
                instagram: "john_doe_instagram1",
                linkedin: "john_doe_linkedin1",
                email: "john.doe1@example.com",
              },
            },
            {
                name: "Yash Shankaram",
                position: "Events and Design Head",
                photo: "https://media.licdn.com/dms/image/D5635AQEkUKkuZbRhQw/profile-framedphoto-shrink_800_800/0/1699400219803?e=1701453600&v=beta&t=sJ8HBJk6suqOfwM8ecydaUqGH-hqIPvYH02M9f_8AKw",
                social: {
                  instagram: "john_doe_instagram1",
                  linkedin: "john_doe_linkedin1",
                  email: "john.doe1@example.com",
                },
              },
              {
                name: "Shubham Kumar",
                position: "Internal Relations Head",
                photo: "",
                social: {
                  instagram: "john_doe_instagram1",
                  linkedin: "john_doe_linkedin1",
                  email: "john.doe1@example.com",
                },
              },
  ];

  return (
    <div className="w-full min-vh-100 d-flex flex-column py-md-4 mx-auto align-items-center h-full mx-1 my-1">
      <h3 className="black-text text-white" style={{ fontSize: "2.7rem" }}>
        Meet the Team
      </h3>
      <div className="w-75 mt-5 d-flex flex-column mx-auto justify-content-center align-items-center h-full mx-1 my-1">
        <div className="row gap-1 px-md-5">
          {hardcodedTeamData.map((member, index) => (
            <TeamCard key={index} data={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
