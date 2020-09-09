import { Comment } from './';

class BrainTeaser {
  id: number;
  riddle: string;
  createdAt: Date;
  comments: Comment[];
}

export default BrainTeaser;
