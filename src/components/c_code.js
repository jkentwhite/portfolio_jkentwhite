import WorkList from "./WorkList";
import useFetch from "../useFetch";

const CreativeCode = () => {

    const { data:work, isLoading, error } = useFetch('http://localhost:8000/work');

    return ( 
        <div className="c_code">
            {error && <div>{ error }</div>}
            {isLoading && <div>loading...</div>}
            {work && <WorkList workList={work.filter((work) => work.medium==="new media")} title='' /> }
        </div>
     );
}
 
export default CreativeCode;