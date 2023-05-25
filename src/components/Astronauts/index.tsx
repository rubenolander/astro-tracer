import { useEffect, useState } from "react";

const Astronauts = () => {
    useEffect(() => {
        getAstronauts();
    }, []);  

    const [issCrewMember, setIssCrewMember] = useState<string[]>([]);

    async function getAstronauts() {
        const response = await fetch("http://api.open-notify.org/astros.json");
        let astronauts = await response.json();
        astronauts = astronauts.people;
        setIssCrewMember([]);
        astronauts.map((astronaut: any) => {
            if (astronaut.craft == "ISS") {
                setIssCrewMember(prevMembers => [...prevMembers, astronaut.name]);
            }
            return;
         })
    }; 

    return (
        <ul className="fixed p-2 z-10 text-white border-solid border-2 border-white-500 bg-black left-10 mt-[20%]">
            <p className="font-bold mb-1">Current ISS personnel</p>
            {issCrewMember.map((crewMember, index) => (
                <li key={index}>{crewMember}</li>
            ))}
        </ul>
    );  
    
};

export default Astronauts;