export interface CommentsData {
    data: Comments[];
}


export interface Post {
    [x: string]: any;
    id: number,
    title: string,
    body: string,
    imgSrc: string
    likeCounter:number ,
    isReadMore?: boolean,
}

export interface Comments {
    id: number,
    name: string
    email: string
    comment?: string
}

