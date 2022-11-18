import useFetch from "../useFetch";
import WorkList from "./WorkList";

const Art = () => {

    const { data:work, error, isLoading } = useFetch('http://localhost:8000/work');

    return ( 
        <div className="art">
            {error && <div>{ error }</div>}
            {isLoading && <div>loading...</div>}
            {work && <WorkList workList={work.filter((work) => work.medium==="art")} title='' /> }
        </div>
     );
}
 
export default Art;