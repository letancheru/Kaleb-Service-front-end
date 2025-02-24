import React from 'react';
import {Link} from "react-router-dom";

const BlogItemList = (props) => {
    const blogURL = `/blog/${props.title.split(' ').join('-').toLocaleLowerCase()}?id=${props.id}`;
    return (
        <div className="blog-item">
            <div className="row align-items-center">
                <div className="col-md-5">
                    <figure className="blog-thumb">
                        <Link to={`${blogURL}`}>
                            <img
                                src={`src/assets/img/${props.thumb}`}
                                alt={props.title}
                            />
                        </Link>
                    </figure>
                </div>

                <div className="col-md-7">
                    <div className="blog-content">
                        <h2 className="h5"><Link to={`${blogURL}`}>{props.title}</Link></h2>
                        <p>{props.excerpt}</p>

                        <div className="blog-meta">
                            <Link to={`${blogURL}`}>By: {props.postBy}</Link>
                            <Link to={`${blogURL}`}>{props.date}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogItemList;