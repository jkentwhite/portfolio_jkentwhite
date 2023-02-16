import { Link } from "react-router-dom";

const WorkList = ({workList, title}) => {


    return (  
        <div className="work-list" >
            <h2>{title}</h2>
            {workList.map((work) => (
                <div className="work-preview" key={work.id}>
                    <Link to={ `workList/${work.id}` }>
                        <h2>{ work.title.toUpperCase() }</h2>
                        {/* {work.image && <img src={work.image} alt="art"/>} */}
                        {work.tech && <p className="tech">{ work.tech }</p> }
                        <p className="desc">{ work.desc }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default WorkList;