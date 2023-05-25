import { useEffect, useState } from "react";

type Astronaut = {
    craft: string, 
    name: string,
};

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
        astronauts.map((astronaut: Astronaut) => {
            if (astronaut.craft == "ISS") {
                setIssCrewMember(prevMembers => [...prevMembers, astronaut.name]);
            }
            return;
         })
    }; 

    return (
        <section className="min-w-[275px] p-2 z-10 text-white border-solid border-2 border-white-500 bg-black">
            <div className="flex gap-4 justify-between ">
                <p>&#128125;</p>
                <p className="font-bold mb-1">Current ISS inhabitants</p>
                <p>&#8593;</p>
            </div>
            <ul className="">
                {issCrewMember.map((crewMember: string, index: number) => (
                    <li className="my-1 font-light text-sm" key={index}>{crewMember}</li>
                    ))}
            </ul>
        </section>
    );  
    
};

export default Astronauts;