import React from 'react';
import SectionTitle from "../UI/SectionTitle";
import BlogItem from "./blogItem";

import Blogs from '../../data/Blog/blog';

function Blog() {
    return (
        <div className="blog-area-wrapper sm-top">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <SectionTitle title="OUR PRODUCT" heading="Latest Product"/>
                    </div>
                </div>

                <div className="row mtn-35">
                    {
                        Blogs.reverse().slice(0,3).map(blog =>(
                            <BlogItem key={blog.id} id={blog.id} title={blog.title} thumb={blog.thumb}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Blog;