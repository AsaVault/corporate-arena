import { Comment } from './';
class Blog {
  id: number;
  title: string;
  slug: string;
  body: string;
  publishedAt: Date;
  createdAt: Date;
  comments: Comment[];
}

export default Blog;
