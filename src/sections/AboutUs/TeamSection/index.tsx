import React from 'react';

const data = [
  {
    name: 'Ismet Pojani',
    job: 'Co-Founder',
    image: '/assets/images/team/member-1.png',
    // description:
    // 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.',
  },
  {
    name: 'Paskualina Gjoni',
    job: 'Co-Founder & CFO',
    image: '/assets/images/team/member-2.png',
    // description:
    // 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.',
  },
  {
    name: 'Lesin Haxhi',
    job: 'Advisor',
    image: '/assets/images/team/member-3.png',
    // description:
    // 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.',
  },
];

const TeamSection = () => {
  return (
    <div className="about-team-section bg-gray-800 py-25">
      <div className="container mx-auto">
        <h1 className="section-title">Our Team</h1>
        <p className="section-description">
          Our team is the driving force behind our success, comprised of dedicated professionals who
          bring diverse expertise, creativity, and passion to every project, ensuring collaborative
          excellence and exceeding expectations.
        </p>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-7.5">
          {data.map((member) => (
            <div key={member.name} className="overflow-hidden">
              <div className="group">
                <img
                  className="w-full group-hover:scale-110 transition-all duration-500 ease-in-out"
                  src={member.image}
                  alt={member.name}
                />
              </div>

              <div className="bg-white p-6 text-center z-10 relative">
                <h3 className="text-20 font-bold mb-2">{member.name}</h3>
                <span className="text-14">{member.job}</span>
                {/* <p className="text-gray-500 mt-4">{member.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
