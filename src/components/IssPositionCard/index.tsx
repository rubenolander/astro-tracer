import ArrowUp from "../../assets/arrow-up.svg"
import ArrowDown from "../../assets/arrow-down.svg"
import PositionIcon from "../../assets/position-icon.svg"
import { useState } from "react";

type Position = {
    latitude: number|undefined,
    longitude: number|undefined,
}

const IssPositionCard = (props: Position) => {
    const [showPosition, setShowPosition] = useState<boolean>(false);
    return (
        <section 
            className={showPosition ? "flex flex-col z-10 text-white bg-[color:var(--menu-blue)] rounded-br-xl" : "flex flex-col z-10 text-white bg-[color:var(--menu-blue)]"}>
            <div 
                onClick={() => setShowPosition(!showPosition)} 
                className={`cursor-pointer p-4 pl-2 flex justify-between border-b-[color:var(--menu-divider-blue)] border-b border-b-solid border-l-8 border-l-solid" ${showPosition ? "border-l-[color:var(--menu-select-blue)]" : "border-l-[color:var(--menu-divider-blue)]"}`}
            >
                <div className="flex">
                    <img className="w-5 mr-2" src={PositionIcon} alt="position icon" />
                    <p className="font-bold">Current ISS location</p>
                </div>
                <img className="w-5 ml-4" src={showPosition ? ArrowUp : ArrowDown} alt="collapse menu" />
            </div>

            {showPosition && <div className="rounded-br-xl p-4 flex flex-col gap-1 text-sm bg-[color:var(--menu-expanded-blue)]">
                <p>Longitude: {props.longitude}</p>
                <p>Latitude: {props.latitude}</p>
            </div>}
        </section>
    )
}

export default IssPositionCard