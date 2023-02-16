import WorkList from "./WorkList";
import { work } from "../data/db";

const Games = () => {

    const workList = work;

    return ( 
        <div className="games">
            <h2>GAMES</h2>
            <p>this is a non-exhaustive list of games and game-like things that i have created or worked on</p>
            {workList && <WorkList workList={workList.filter((work) => work.medium==="game")} title='' /> }
        </div>
     );
}
 
export default Games;