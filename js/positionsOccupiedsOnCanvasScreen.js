class PositionsOccupiedsOnCanvasScreen {

    constructor() {
        this.position = new Array();
        this.MAX = 4;
        for (var i = 0; i < this.MAX; ++i) {
            this.position[i] = false;
        }
    }

    initPositions() {
        for (var i = 0; i < this.MAX; ++i) {
            this.position[i] = false;
        }
    }

    isOccupied(pos) {
        return position[pos];
    }

    exploitBubble(pos) {
        this.position[pos] = false;
    }

    countPositionsFree() {
        var count = 0;
        for (var i = 0; i < this.position.length; ++i) {
            if (!this.position[i]) {
                ++count;
            }
        }
        return count;
    }

    getPositionFreeAndToOccupy() {
        var countPositionFree = this.countPositionsFree();

        if (countPositionFree == 0) {
            return -1;
        }

        var numberRandom = Math.floor(Math.random() * countPositionFree);
        numberRandom;

        var j = 0;
        var i = 0;

        for (; j <= numberRandom; ++j) {
            if (this.position[i + j]) {
                ++i;
                --j;
            }
        }
        var posOcupied = i + numberRandom;
        this.position[posOcupied] = true; // occupy position
        return posOcupied;
    }

};