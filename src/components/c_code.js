import WorkList from "./WorkList";
import { work } from "../data/db";

const CreativeCode = () => {

    const workList = work;

    return ( 
        <div className="c_code">
            {workList && <WorkList workList={workList.filter((work) => work.medium==="new media")} title='' /> }
        </div>
     );
}
 
export default CreativeCode;