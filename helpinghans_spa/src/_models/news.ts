export interface News {
    description:string;
    title:string;
    publishedAt:Date;
    url:string;
    urlToImage:string;
    source:{
        id:string,
        name:string
    };
    author:string;
    content:string;

}