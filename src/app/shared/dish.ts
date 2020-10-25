import { Comment } from './comment';
export class Dish {
    id: string;
    name: string;
    image: string;
    description: string;
    comments:Comment[];
}