type Position = {
    latitude: number|undefined,
    longitude: number|undefined,
}

const IssPositionCard = (props: Position) => {
    return (
        <section className="fixed p-2 justify-self-start z-10 text-white border-solid border-2 border-white-500 bg-black right-10 mt-[25%]">
            <p>Longitude: {props.longitude}</p>
            <p>Latitude: {props.latitude}</p>
        </section>
    )
}

export default IssPositionCard