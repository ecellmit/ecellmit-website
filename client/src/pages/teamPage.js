import React from "react";
import TeamCard from "../components/TeamCard";
import Loader from "./../components/Loader/Loader";

const TeamPage = () => {
  // Hardcoded team member data for 12 members
  const hardcodedTeamData = [
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
