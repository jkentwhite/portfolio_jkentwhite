import WorkList from "./WorkList";
import { work } from "../data/db";

const Home = () => {

    const workList = work;

    return (
        <div className="home">
            {workList && <WorkList workList={workList.filter((work) => work.featured)} title='' /> }
        </div>
      );
}
 
export default Home;