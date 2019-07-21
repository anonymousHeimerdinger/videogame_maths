class Operation {
    //difficultNumber from 1 to 3, velocity from 1 to 5, type, text, solution
    constructor(difficultNumber, speed, type, text, solution) {
        this.difficultNumber = difficultNumber;
        this.speed = speed;
        this.type = type;
        this.text = text;
        this.solution = solution;
        var z;

        switch (this.type) {
            case 'sum':
                z = 1;
                break;
            case 'multiplication':
                z = 2;
                break;
            case 'equation':
                z = 4;
                break;
            default:
                z = 0;
                break;
        }

        this.points = parseInt(this.speed) + (parseInt(z) * parseInt(this.difficultNumber));
    }

    getDifficultNumber() {
        return this.difficultNumber;
    }

    getSpeed() {
        return this.speed;
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    getType() {
        return this.type;
    }

    getText() {
        return this.text;
    }

    getSolution() {
        return this.solution;
    }

    getPoints() {
        return this.points;
    }

};