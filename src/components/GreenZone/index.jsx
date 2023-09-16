import { useSelector } from "react-redux";

function GreenZone(){

    const data = useSelector((state) => state.test.data);
    console.log(data);
    return (
        <div>
            <p>{data}</p>
        </div>
    );
};

export default GreenZone;