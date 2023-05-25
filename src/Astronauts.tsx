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
        <ul className="fixed z-10 m-auto text-white border-solid border-2 border-white-500 bg-black ml-0">
            {issCrewMember.map((crewMember, index) => (
                <li key={index}>{crewMember}</li>
            ))}
        </ul>
    );  
    
};

export default Astronauts;