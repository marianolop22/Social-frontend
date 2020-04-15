import { Image  } from "./image.model";

export class Post {

    style: number;
    avatar: string;
    author: string;
    published: string;
    text: string;
    likes: number;
    comments: number;
    shared: number;
    images: Array<Image>;

}