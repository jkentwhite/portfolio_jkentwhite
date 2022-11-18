import useFetch from "../useFetch";
import WorkList from "./WorkList";

const Writing = () => {
    const { data:work, error, isLoading } = useFetch('http://localhost:8000/work');

    return ( 
        <div className="writing">
            {error && <div>{ error }</div>}
            {isLoading && <div>loading...</div>}
            {work && <WorkList workList={work.filter((work) => work.medium==="writing")} title='' /> }
        </div>
     );
}
 
export default Writing;