import WorkList from "./WorkList";
import { work } from "../data/db";

const Art = () => {

    const workList = work;

    return ( 
        <div className="art">
            {WorkList && <WorkList workList={workList.filter((work) => work.medium==="art")} title='' /> }
        </div>
     );
}
 
export default Art;