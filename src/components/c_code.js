import WorkList from "./WorkList";
import { work } from "../data/db";

const CreativeCode = () => {

    const workList = work;

    return ( 
        <div className="c_code">
            <h2>CREATIVE CODE</h2>
            <p>these are a short collection of applications and experiments in creative coding that focus on distilling digital and generative works down to minimal elements </p>
            {workList && <WorkList workList={workList.filter((work) => work.medium==="code")} title='' /> }
        </div>
     );
}
 
export default CreativeCode;