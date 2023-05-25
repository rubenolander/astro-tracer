type Position = {
    latitude: number|undefined,
    longitude: number|undefined,
}

const IssPositionCard = (props: Position) => {
    return (
        <section className="min-w-[275px] p-2 flex flex-col z-10 text-white border-solid border-2 border-white-500 bg-black">
            <div className="flex gap-4 justify-between ">
                <p>&#127772;</p>
                <p className="font-bold mb-1">Current ISS location</p>
                <p>&#8593;</p>
            </div>

            <div className="flex flex-col gap-1 my-1 font-light text-sm">
                <p>Longitude: {props.longitude}</p>
                <p>Latitude: {props.latitude}</p>
            </div>
        </section>
    )
}

export default IssPositionCard