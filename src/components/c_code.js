import WorkList from "./WorkList";
import { work } from "../data/db";

const CreativeCode = () => {

    const workList = work;

    return ( 
        <div className="c_code">
            <h2>CREATIVE CODE</h2>
            <p>these are a short collection of experiments in creative coding that focus on distilling digital and generative works down to minimal elements. they are expressions of resitance to the maximalist digital art world</p>
            {workList && <WorkList workList={workList.filter((work) => work.medium==="code")} title='' /> }
        </div>
     );
}
 
export default CreativeCode;