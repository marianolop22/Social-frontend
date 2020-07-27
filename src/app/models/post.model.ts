import { Image  } from "./image.model";
import { Group  } from "./group.model";

export class Post {

    idTemplate: string;
    id: string
    avatar: string;
    author: string;
    published: string;
    text: string;
    likes: number;
    comments: number;
    shared: number;
    images: Array<Image>;
    distributionGroup: Array<Group>;

    constructor () {
        this.images = new Array<Image>();
        this.distributionGroup = new Array<Group>();

    }

}