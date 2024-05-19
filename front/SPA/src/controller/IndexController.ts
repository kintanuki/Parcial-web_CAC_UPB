import IndexModel from "../model/IndexModel.js";
import IndexViewv from "../view/IndexView.js";

export default class IndexController {
    
    constructor (
        private readonly view: IndexViewv,
        private readonly model: IndexModel
    )
    {
        console.log('IndexController')
    }
    public async start(): Promise<void>{
        this.view.deploy(this.model.getBook(1));
        
    }
    public searchAuthor(author: string): void{
        this.view.deploy(this.model.getAuthor(author));
    }
    
}
