import React from "react";
import TeamCard from "../components/TeamCard";
import Loader from "./../components/Loader/Loader";

const TeamPage = () => {
  // Hardcoded team member data for 12 members
  const hardcodedTeamData = [
    {
      name: "Anant Agarwal",
      position: "Founder",
      photo: "https://media.licdn.com/dms/image/D4D03AQHcD3bwVVx75Q/profile-displayphoto-shrink_800_800/0/1693071990354?e=2147483647&v=beta&t=5XTYQkwUY5rhSeICpmCN-m2jGq4X-u39InWx1GLKnfg",
      social: {
        instagram: "https://www.instagram.com/ununtag/",
        linkedin: "john_doe_linkedin1",
        email: "john.doe1@example.com",
      },
    },
    {
        name: "Rishabh Singh",
        position: "President",
        photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        social: {
          instagram: "john_doe_instagram1",
          linkedin: "john_doe_linkedin1",
          email: "john.doe1@example.com",
        },
      },
      {
        name: "John Doe 1",
        position: "President",
        photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        social: {
          instagram: "john_doe_instagram1",
          linkedin: "john_doe_linkedin1",
          email: "john.doe1@example.com",
        },
      },
      {
        name: "John Doe 1",
        position: "President",
        photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        social: {
          instagram: "john_doe_instagram1",
          linkedin: "john_doe_linkedin1",
          email: "john.doe1@example.com",
        },
      },
      {
          name: "John Doe 1",
          position: "President",
          photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
          social: {
            instagram: "john_doe_instagram1",
            linkedin: "john_doe_linkedin1",
            email: "john.doe1@example.com",
          },
        },
        {
          name: "John Doe 1",
          position: "President",
          photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
          social: {
            instagram: "john_doe_instagram1",
            linkedin: "john_doe_linkedin1",
            email: "john.doe1@example.com",
          },
        },
        {
            name: "John Doe 1",
            position: "President",
            photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
            social: {
              instagram: "john_doe_instagram1",
              linkedin: "john_doe_linkedin1",
              email: "john.doe1@example.com",
            },
          },
          {
              name: "John Doe 1",
              position: "President",
              photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
              social: {
                instagram: "john_doe_instagram1",
                linkedin: "john_doe_linkedin1",
                email: "john.doe1@example.com",
              },
            },
            {
              name: "John Doe 1",
              position: "President",
              photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
              social: {
                instagram: "john_doe_instagram1",
                linkedin: "john_doe_linkedin1",
                email: "john.doe1@example.com",
              },
            },
            {
              name: "John Doe 1",
              position: "President",
              photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
              social: {
                instagram: "john_doe_instagram1",
                linkedin: "john_doe_linkedin1",
                email: "john.doe1@example.com",
              },
            },
            {
                name: "John Doe 1",
                position: "President",
                photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
                social: {
                  instagram: "john_doe_instagram1",
                  linkedin: "john_doe_linkedin1",
                  email: "john.doe1@example.com",
                },
              },
              {
                name: "John Doe 1",
                position: "President",
                photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
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
