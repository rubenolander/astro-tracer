const IssPositionCard = (props: any) => {
    return (
        <div className="fixed z-10 m-auto text-white border-solid border-2 border-white-500 bg-black">
            <p>Longitude: {props.longitude}</p>
            <p>Latitude: {props.latitude}</p>
        </div>
    )
}

export default IssPositionCard