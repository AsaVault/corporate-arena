import { Comment } from '.';

type TrafficUpdate = {
  id: number;
  title: string;
  body: string;
  slug: string;
  createdAt: string;
  comments: Comment[];
};

export default TrafficUpdate;
