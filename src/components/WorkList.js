import { Link } from "react-router-dom";

const WorkList = ({workList, title}) => {


    return (  
        <div className="work-list">
            <h2>{title}</h2>
            {workList.map((work) => (
                <div className="work-preview" key={work.id}>
                    <Link to={ `workList/${work.id}` }>
                        <h2>{ work.title }</h2>
                        <p>{ work.desc }</p>
                    </Link>
                    <p>{ work.image }</p>
                </div>
            ))}
        </div>
    );
}
 
export default WorkList;