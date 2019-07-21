class GeneratorIdBubble {

    constructor() {
        this.id = 0;
    }


    getId() {
        ++this.id;
        var idBubble = "bubble" + this.id;
        return idBubble;
    }

    initIdBubble() {
        this.id = 0;
    }

};