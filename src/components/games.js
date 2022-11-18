import useFetch from "../useFetch";
import WorkList from "./WorkList";

const Games = () => {
    const { data:work, error, isLoading } = useFetch('http://localhost:8000/work');
    
    return ( 
        <div className="games">
            {error && <div>{ error }</div>}
            {isLoading && <div>loading...</div>}
            {work && <WorkList workList={work.filter((work) => work.medium==="game")} title='' /> }
        </div>
     );
}
 
export default Games;