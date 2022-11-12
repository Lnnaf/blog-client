import React from "react";

import PostService from "../../services/postService";
import { Post } from "../../interface/Post.object";
import VerticalCard from "../../components/post-item/VerticalCard";
interface HomePageProps {}

interface HomePageState {
  datas: Post[];
}
const services = {
  postService: new PostService(),
};

class HomePage extends React.Component<HomePageProps, HomePageState> {
  state: HomePageState = {
    datas: [],
  };
  async componentDidMount() {
    const data = await services.postService.getAll();
    this.setState({ datas: data });
  }

  render() {
    return (
      <div className="container">
        <div className="mainheading">
          <h1 className="sitetitle">Mediumish</h1>
          <p className="lead">
            Bootstrap theme, medium style, simply perfect for bloggers
          </p>
          <section className="featured-posts" />
          <div className="section-title">
            <h2>
              <span>Featured</span>
            </h2>
          </div>
          <div className="card-columns listfeaturedtag">
            {this.state.datas.map((item: any, index: any) => {
              return <VerticalCard key={index} data={item}></VerticalCard>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
