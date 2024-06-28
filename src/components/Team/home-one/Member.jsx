import React,{Fragment} from 'react';
import {Link} from "react-router-dom";

function Member(props) {
    const teamMemberURl = `/team-member/${props.name.split(' ').join('-').toLocaleLowerCase()}?id=${props.id}`;
    return (
        <Fragment>
            {props.type === 'page' ? (
                <div className="col-sm-6 col-lg-3">
                    <div className="team-mem-item">
                        <figure className="member-pic">
                            <Link to={`${teamMemberURl}`}>
                                <img src={`/src/assets/img/${props.profilePic}`} alt={props.name}/>
                            </Link>
                        </figure>
                        <div className="member-info">
                            <h5><Link to={`${teamMemberURl}`} className="stretched-link">{props.name}</Link></h5>
                            <span className="designation">{props.designation}</span>
                        </div>
                    </div>
                </div>
            ):(
                <div className="team-mem-item">
                    <figure className="member-pic">
                        <Link to={`${teamMemberURl}`}>
                            <img src={`/src/assets/img/${props.profilePic}`} alt={props.name}/>
                        </Link>
                    </figure>
                    <div className="member-info">
                        <h5><Link to={`${teamMemberURl}`} className="stretched-link">{props.name}</Link></h5>
                        <span className="designation">{props.designation}</span>
                    </div>
                </div>
            )}
        </Fragment>
    );
}

export default Member;