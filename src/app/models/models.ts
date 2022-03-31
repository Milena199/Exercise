export interface CommentsData {
    id: number;
    data: Comments[];
}


export interface Post {
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

