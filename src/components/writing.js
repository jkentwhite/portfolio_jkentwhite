import WorkList from "./WorkList";
import { work } from "../data/db";

const Writing = () => {

    const workList = work;

    return ( 
        <div className="writing">
            {workList && <WorkList workList={workList.filter((work) => work.medium==="writing")} title='' /> }
        </div>
     );
}
 
export default Writing;