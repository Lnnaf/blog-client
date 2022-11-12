import axios from "axios";
import { Post } from "../interface/Post.object";

export default class PostService {
  async getAll(): Promise<Post[]> {
    const response = await axios.get("http://localhost:8080/api/v1/post/posts");
    return response.data;
  }

  async getByUrlTitle(urlTitle: string): Promise<Post> {
    const response = await axios.get(`http://localhost:8080/api/v1/post/detail/${urlTitle}`);
    return response.data;
  }
}
