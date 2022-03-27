export interface CommentsData {
    data: Comments[];
}


export interface Post {
    id: number,
    title: string,
    body: string,
    imgSrc: string
    // comments?: Comments[],
    isReadMore?:boolean,
}

export interface Comments {
    id:number,
    name: string
    email: string
    comment?: string
}

