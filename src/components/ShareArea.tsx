import { FunctionComponent } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons' 

interface ShareAreaProps {
    
}
 
const ShareArea: FunctionComponent<ShareAreaProps> = () => {
    return (
        <div className="col-md-2 col-xs-12">
        <div className="share">
            <p>
                Share
            </p>
            <ul>
                <li>
                    <a target="_blank" href="https://twitter.com/home?status=http%3A//www.wowthemes.net">
                       <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A//www.wowthemes.net">
                    <FontAwesomeIcon icon={faFacebookF}/>
                    </a>
                </li>
            </ul>
            <div className="sep">
            </div>
            <p>
                Talk
            </p>
            <ul>
                <li>
                    <a href="#comments">
                        42<br />
                       <FontAwesomeIcon icon={faComment} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
      );
}
 
export default ShareArea;