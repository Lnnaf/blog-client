import { FunctionComponent, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

import { Post } from "../../interface/Post.object";
import PostService from "../../services/postService";
import ShareArea from "../../components/ShareArea";
import { TimeHelper } from "../../helper/TimeHelper";
import { User } from "../../interface/User.object";

interface PostDetailProps {
    content?: string
}


const PostDetail: FunctionComponent<PostDetailProps> = (props) => {
    const services = {
        postService: new PostService(),
        timeHelper: new TimeHelper()
    }
    const [post, setPost] = useState({author: {} as User} as Post)
    useEffect(() => {
        const urlTtile = window.location.href.split('/')[4]
        services.postService.getByUrlTitle(urlTtile).then((post) => {
            setPost(post)   
        })
        Prism.highlightAll()
    }, [post.content])

    return (
        
        // <div dangerouslySetInnerHTML={{ __html: post.content || ''}} />
        <div className="container">
            <div className="row">
                {/* <!-- Begin Fixed Left Share --> */}
                <ShareArea />
                {/* <!-- End Fixed Left Share --> */}

                {/* <!-- Begin Post --> */}
                <div className="col-md-8 col-md-offset-2 col-xs-12">
                    <div className="mainheading">

                        {/* <!-- Begin Top Meta --> */}
                        <div className="row post-top-meta">
                            <div className="col-md-2">
                                <a href="author.html"><img className="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal"/></a>
                            </div>
                            <div className="col-md-10">
                                <a className="link-dark" href="author.html">{post.author.displayName || 'no name'}</a><a href="#" className="btn follow">Follow</a>
                                <span className="author-description">Founder of WowThemes.net and creator of <b>"Mediumish"</b> theme that you're currently previewing. Developing professional premium themes, templates, plugins, scripts since 2012.</span>
                                <span className="post-date">{services.timeHelper.convertHumanTime(post.createdDate || '' )}</span><span className="dot"></span><span className="post-read">6 min read</span>
                            </div>
                        </div>
                        {/* <!-- End Top Menta --> */}

                        <h1 className="posttitle">{post.title}</h1>

                    </div>

                    {/* <!-- Begin Featured Image --> */}
                    <img className="featured-image img-fluid" src="assets/img/demopic/10.jpg" alt=""/>
                        {/* <!-- End Featured Image --> */}

                        {/* <!-- Begin Post Content --> */}
                        <div id="post_content" className="article-post"  dangerouslySetInnerHTML={{ __html: post.content || ''}} >
                          
                        </div>
                        {/* <!-- End Post Content --> */}

                        {/* <!-- Begin Tags --> */}
                        <div className="after-post-tags">
                            <ul className="tags">
                                <li><a href="#">Design</a></li>
                                <li><a href="#">Growth Mindset</a></li>
                                <li><a href="#">Productivity</a></li>
                                <li><a href="#">Personal Growth</a></li>
                            </ul>
                        </div>
                        {/* <!-- End Tags --> */}

                </div>
                {/* <!-- End Post --> */}
            </div>
        </div>

    );
}

export default PostDetail;