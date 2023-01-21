import { Link } from "react-router-dom";

const WorkList = ({workList, title}) => {


    return (  
        <div className="work-list" >
            <h2>{title}</h2>
            {workList.map((work) => (
                <div className="work-preview" key={work.id}>
                    <Link to={ `workList/${work.id}` }>
                        <h2>{ work.title }</h2>
                    </Link>
                    {work.image && <img src={work.image} alt="art"/>}
                    <p>{ work.desc }</p>
                </div>
            ))}
        </div>
    );
}
 
export default WorkList;