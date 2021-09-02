import { findUserById } from "./data";
export default class Comment{
    constructor(userId, text, data){

        this.id=Comment.id++;
        this.userId=userId;
        this.text=text;
        this.data=data;    

        this.userId=userId;
        this.text=text;
        this.data=data;
        this.id=Comment.id++;

    }
    static id=0;

    renderComment(){
        return `
        <div>~~~~~~~~~~~~~~~~~~~~~~~~~~~~   

        <h5>${this.text}</h5> 
        <p>${this.data},
        <br> comment by ${findUserById(this.userId).name}</p>

        <h5>${this.text}</h5>
        <p>${this.data}, comment by ${findUserById(this.userId).name}</p>

        </div>
        `
    }
}