import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ArrowUp from "./../../assets/arrow-up.svg";
import ArrowDown from "./../../assets/arrow-down.svg"
import CrewIcon from "./../../assets/crew-icon.svg"

type Astronaut = {
  iss: string,
  name: string,
};

const Astronauts = () => {
  const { data: issCrewMember = [], isLoading, isError } = useQuery<string[]>({
      queryKey:["astronauts"], 
      queryFn: async () => {
          const response = await fetch("https://corquaid.github.io/international-space-station-APIs/JSON/people-in-space.json");
          const astronauts = await response.json();
          return astronauts.people
          .filter((astronaut: Astronaut) => astronaut.iss)
          .map((astronaut: Astronaut) => astronaut.name);
      }
  });
  
  useEffect(() => {
      setShowCrew(false);
  }, [issCrewMember]);
  
  const [showCrew, setShowCrew] = useState<boolean>(false);

  return (
    <section className="z-50 shadow-[inset_1px_0.1px_2px_rgba(250,250,250,0.5)] flex flex-col z-10 text-white bg-[color:var(--menu-blue)] rounded-tr-xl lg:text-sm">
      <div
        onClick={() => setShowCrew(!showCrew)}
        className={`cursor-pointer p-4 pl-2 flex justify-between border-b-[color:var(--menu-divider-blue)] border-b border-b-solid border-l-8 border-l-solid" ${showCrew ? "border-l-[color:var(--menu-select-blue)]" : "border-l-[color:var(--menu-divider-blue)]"}`}
      >
        <div className="flex">
          <img className="w-5 mr-2" src={CrewIcon} alt="crew icon" />
          <p className="font-bold">Current ISS crew</p>
        </div>
        <img className="w-5 ml-4" src={showCrew ? ArrowUp : ArrowDown} alt="collapse menu" />
        </div>
        <ul className={`duration-300 overflow-hidden border-b-[color:var(--menu-divider-blue)] border-b border-b-solid flex flex-col text-sm bg-[color:var(--menu-expanded-blue)] ${showCrew ? "h-fit gap-1 p-4 ": "h-0 gap-0 p-0"}`}>
          {isLoading ? (
            <li>Loading...</li>
          ) : isError ? (
            <li>Error: Unable to fetch astronauts data</li>
          ) : (
            issCrewMember.map((crewMember: string, index: number) => (
              <li className="font-medium text-sm lg:text-xs" key={index}>
                {crewMember}
              </li>
            ))
            )}
        </ul>

    </section>
  );
};

export default Astronauts;