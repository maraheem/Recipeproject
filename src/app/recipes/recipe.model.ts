export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(rname:string, rdesc: string, rimagePath: string){
        this.name = rname;
        this.description = rdesc;
        this.imagePath = rimagePath;
    }
}