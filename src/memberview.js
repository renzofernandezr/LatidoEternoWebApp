import React, { useState, useEffect } from 'react';

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
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <button className="bg-transparent hover:bg-rojo text-rojo font-semibold hover:text-white py-2 px-4 border border-rojo hover:border-transparent rounded w-5/12 mx-1">
          Ver
        </button>
        <button className="bg-transparent hover:bg-rojo text-rojo font-semibold hover:text-white py-2 px-4 border border-rojo hover:border-transparent rounded w-5/12 mx-1">
          Editar
        </button>
      </div>
    </div>
  );
};

const MembersList = ({ userId }) => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchMembers = async () => {
        try {
          setLoading(true);
          const response = await fetch(`https://api.latidoeterno.com/members/${userId}`);
        
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setMembers(data);
        } catch (error) {
          console.error('Fetch error:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchMembers();
    }, [userId]);
  
    if (loading) return <div>Loading...</div>;
  
    return (
      <div className="grid justify-center md:grid-cols-3 grid-cols-1">
        {members.map((member) => (
          <MemberCard key={member.CodigoMiembro} member={{
            id: member.CodigoMiembro,
            name: `${member.Nombre} ${member.Apellido}`,
            photoUrl: "https://lh3.googleusercontent.com/a/ACg8ocJIeFrk9J4aTwaIluwcyeaJXB8LoDEUPJCuxexbPynv946X=s96-c",
            relationship: member.relacion,
            creationDate: new Date(member.fechacreacion).toLocaleDateString('en-US'),
            verificationStatus: member.UID_Medallon ? "VERIFIED" : "UNVERIFIED", // Assuming presence of UID means verified
          }} />
        ))}
      </div>
    );
  };
  
  export default MembersList;
