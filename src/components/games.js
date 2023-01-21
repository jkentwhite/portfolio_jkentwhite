import WorkList from "./WorkList";
import { work } from "../data/db";

const Games = () => {

    const workList = work;

    return ( 
        <div className="games">
            {workList && <WorkList workList={workList.filter((work) => work.medium==="game")} title='' /> }
        </div>
     );
}
 
export default Games;