import React from "react";
import TeamCard from "../components/TeamCard";
//import Loader from "./../components/Loader/Loader";

const TeamPage = () => {
  // Hardcoded team member data for 12 members
  const hardcodedTeamData = [
    {
      name: "Ayushi",
      position: "President",
            photo: "https://www.google.com/search?q=women+icon&sca_esv=580461025&tbm=isch&sxsrf=AM9HkKlJMkys1DGZ-oe_bX_0Roo_y43SKQ:1699446633773&source=lnms&sa=X&sqi=2&ved=2ahUKEwiWuK6HtLSCAxVtSGwGHTtWCrcQ_AUoAXoECAEQAw&biw=854&bih=793&dpr=1.5#imgrc=77jrqewS73kGeM",
      social: {
        instagram: "john_doe_instagram1",
        linkedin: "john_doe_linkedin1",
        email: "john.doe1@example.com",
      },
    },
    {
        name: "John",
        position: "President",
        photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        social: {
          instagram: "john_doe_instagram1",
          linkedin: "john_doe_linkedin1",
          email: "john.doe1@example.com",
        },
      },
      {
        name: "Aayushi Kumari",
        position: "Marketing Head",
        // photo: "",
        social: {
          instagram: "https://instagram.com/aayushi_kumarii_?igshid=YTQwZjQ0NmI0OA==",
          linkedin: "https://www.linkedin.com/in/aayushi-kumarii/",
          email: "aayushi.kumari@learner.manipal.edu",
        },
      },
      {
        name: "Shubham Anand",
        position: "Internal Relations Head",
        photo: "https://media.licdn.com/dms/image/D5603AQFbNS2g5hxspQ/profile-displayphoto-shrink_400_400/0/1687252121761?e=1706140800&v=beta&t=uO4tSwfcBhygXuzLCz3aIFq7mMjpPPgc0uDeWNRddSU",
        social: {
          instagram: "https://instagram.com/shubham._1809?igshid=YTQwZjQ0NmI0OA==",
          linkedin: "https://www.linkedin.com/in/shub-ana/",
          email: "shubham.anand1@learner.manipal.edu",
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
              name: "John",
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
