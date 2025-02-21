import {Character} from "../interfaces/Character.ts"
export default function BluePrint({data} : {data:Character}) {
// Name of component has to match file name
    return (
        <div key = {data.key}>
            <h1>Name of the character</h1>
            <img src={} alt={}/>
            <p>Status</p>
        </div>
    )
}