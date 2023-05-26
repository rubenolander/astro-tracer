import ArrowUp from "../../assets/arrow-up.svg"
import PositionIcon from "../../assets/position-icon.svg"

type Position = {
    latitude: number|undefined,
    longitude: number|undefined,
}

const IssPositionCard = (props: Position) => {
    return (
        <section className="flex flex-col z-10 text-white bg-[color:var(--menu-blue)] rounded-br-xl">
            <div className="cursor-pointer p-4 pl-2 flex justify-between border-b-[color:var(--menu-divider-blue)] border-b border-b-solid border-l-[color:var(--menu-select-blue)] border-l-8 border-l-solid">
                <div className="flex">
                    <img className="w-5 mr-2" src={PositionIcon} alt="position icon" />
                    <p className="font-bold">Current ISS location</p>
                </div>
                <img className="w-5 ml-4" src={ArrowUp} alt="collapse menu" />
            </div>

            <div className="rounded-br-xl p-4 flex flex-col gap-1 text-sm bg-[color:var(--menu-expanded-blue)]">
                <p className="font-bold">Longitude: <span className="font-normal">{props.longitude}</span></p>
                <p className="font-bold">Latitude: <span className="font-normal">{props.latitude}</span></p>
            </div>
        </section>
    )
}

export default IssPositionCard