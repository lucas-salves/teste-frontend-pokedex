export default class Pokemon {
    name = "";
    id   = null;
    spriteUrl = "";

    constructor(name, id, spriteUrl) {
        this.name = name;
        this.id   = id;
        this.spriteUrl = spriteUrl;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getSpriteurl(){
        return this.spriteUrl;
    }
}
