import React from 'react';

const MemberCard = ({ member }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <img className="w-24 h-24 rounded-full mx-auto mt-4" src={member.photoUrl} alt={member.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{member.name}</div>
        <p className="text-gray-700 text-base text-center">
          Relationship: {member.relationship}
        </p>
        <p className="text-gray-600 text-sm text-center">
          Created in {member.creationDate}
        </p>
        <p className="text-red-500 text-sm text-center">
          {member.verificationStatus}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-around">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          View
        </button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Edit
        </button>
      </div>
    </div>
  );
};

const MembersList = ({ members }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {members.map(member => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};

export default MembersList;
