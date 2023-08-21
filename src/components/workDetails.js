import { useParams } from "react-router-dom";
import { work } from "../data/db";

const WorkDetails = () => {

    const { id } = useParams();
    const workId = work.filter((work) => work.id == id);
    const workDetails = workId[0];

    return ( 
        <div className="work-details">
            
            {workDetails && (
                <article>
                    <h2>{ workDetails.title }</h2>
                    <div>{ workDetails.desc }</div>
                    {workDetails.image && <img src={ workDetails.image } alt="detail of work"/>}
                </article>
            )}   
        </div>
        
     );
}
 
export default WorkDetails;