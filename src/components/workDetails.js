import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const WorkDetails = () => {

    const { id } = useParams();
    const { data:work, error, isLoading } = useFetch('http://localhost:8000/work/' + id);

    return ( 
        <div className="work-details">
            {error && <div>{ error }</div>}
            {isLoading && <div>loading...</div>}
            {work && (
                <article>
                    <h2>{ work.title }</h2>
                    <div>{ work.desc }</div>
                </article>
            )}   
        </div>
        
     );
}
 
export default WorkDetails;