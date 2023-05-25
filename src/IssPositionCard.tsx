const IssPositionCard = (props: any) => {
    return (
        <div className="fixed justify-self-start z-10 text-white border-solid border-2 border-white-500 bg-black right-10 mt-[25%]">
            <p>Longitude: {props.longitude}</p>
            <p>Latitude: {props.latitude}</p>
        </div>
    )
}

export default IssPositionCard