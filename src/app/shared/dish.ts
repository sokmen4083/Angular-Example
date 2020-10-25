import { Comment } from './comment';
export class Dish {
    id: string;
    name: string;
    image: string;
    featured: boolean;
    description: string;
    comments:Comment[];
}