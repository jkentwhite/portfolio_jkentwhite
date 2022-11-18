import useFetch from "../useFetch";
import WorkList from "./WorkList";

const Home = () => {

    const { data:workList, isLoading, error } = useFetch('http://localhost:8000/work');

    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isLoading && <div>loading...</div>}
            {workList && <WorkList workList={workList} title='' /> }
        </div>
      );
}
 
export default Home;