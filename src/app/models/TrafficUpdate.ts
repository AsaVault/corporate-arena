import { Comment } from '.';

type TrafficUpdate = {
  id: number;
  title: string;
  description: string;
  slug: string;
  dateCreated: Date;
  comments: Comment[];
};

export default TrafficUpdate;
