class CreateObjectCanvas { // you will need create once object canvasScreen to use this class

    constructor(container, positionOcupied, id, canvasScreenWidth, canvasScreenHeight,
        sizeCanvas, aBitmap, xInicial, operation) {

        this.sizeCanvasScreenWidth = canvasScreenWidth;
        this.sizeCanvasScreenHeigth = canvasScreenHeight;

        this.operation = operation;
        this.isSelected = false; //bubble is selected or not selected
        this.countPaintSelect = 0;

        this.transparency = 255; // nivel de transparencia
        this.fontSize = 15;
        this.element = document.createElement("CANVAS");
        this.element.height = sizeCanvas;
        this.element.width = sizeCanvas;
        this.speedX = 0;
        this.speedY = this.operation.getSpeed();
        this.size = sizeCanvas;
        this.posX = this.size / 2;
        this.posY = this.size / 2;
        this.shine = 0.2;
        this.bubleSize = (Math.floor(this.getSize()) / 2);

        this.aBitmap = aBitmap;
        this.aMap = [];

        this.canvas = this.element.getContext('2d');

        this.positionOcupied = positionOcupied;
        this.element.id = id;
        this.element.className = "objectCanvas"; //.className

        container.appendChild(this.element);


        for (var y = 0; y < this.getSize(); y++) {
            for (var x = 0; x < this.getSize(); x++) {
                var t = this.mathSphere(x, y);
                this.aMap[(x + y * this.getSize()) * 2 + 0] = Math.max(Math.min(t.x, this.getSize() - 1), 0);
                this.aMap[(x + y * this.getSize()) * 2 + 1] = Math.max(Math.min(t.y, this.getSize() - 1), 0);
            }
        }

        this.setPosX(xInicial);

    }

    clearRect() {
        this.canvas.clearRect(0, 0, this.sizeCanvasScreenWidth, this.sizeCanvasScreenHeigth);
    }

    toExploitBubble() {
        this.clearRect();
        //ObjectPositionsOccupiedsOnCanvasScreen.exploitBubble(this.positionOcuped); pending to use on canvasScreen when the bubble exploit
        this.element.remove();
    }

    toDie() {
        this.clearRect();
        this.element.remove();
    }

    getId() {
        return this.id;
    }

    getPositionOcupied() {
        return this.positionOcupied;
    }

    getShine() {
        return this.shine;
    }

    getSize() {
        return this.size;
    }

    getPosX() {
        return this.posX;
    }

    getPosY() {
        return this.posY;
    }

    setPosX(pos) {
        this.posX = pos;
    }

    setPosY(pos) {
        this.posY = pos;
    }

    setStyleLeft(styleLeft) {
        this.element.style.left = styleLeft;
    }

    getStyleLeft() {
        return this.element.style.left;
    }

    getStyleTop() {
        return this.element.style.top;
    }

    setStyleTop(styleTop) {
        this.element.style.top = styleTop;
    }

    getSpeedX() {
        return this.speedX;
    }

    getSpeedY() {
        return this.speedY;
    }

    setSpeedX(speed) {
        this.speedX = speed;
    }

    setSpeedY(speed) {
        this.speedY = speed;
    }

    reduceSpeedX() {
        --this.speedX;
    }

    reduceSpeedY() {
        --this.speedY;
    }

    getText() {
        return this.operation.getText();
    }

    getSolution() {
        return this.operation.getSolution();
    }

    getPoints() {
        return this.operation.getPoints();
    }

    putImageData(aBitmap, posX, posY) {
        this.canvas.putImageData(aBitmap, posX, posY);

        var x = this.element.width * 0.5;
        var y = this.element.height * 0.5 + this.fontSize * 0.5;

        this.canvas.font = this.fontSize + "px Arial";
        this.canvas.textAlign = "center";
        this.canvas.fillStyle = "#000000"; // #EABE3F  // #E5A65E // #FFD700
        this.canvas.fillText(this.getText(), x+1, y+1);
        this.canvas.fillStyle = "#EABE3F"; // #EABE3F  // #E5A65E // #FFD700
        this.canvas.fillText(this.getText(), x, y);        
    }

    getTransparency() {
        return this.transparency;
    }

    getBubleSize() {
        return this.bubleSize;
    }

    reduceTransparency() {
        this.transparency -= 7;
        if (this.transparency < 0) { this.transparency = 0; }
    }

    selected() {
        return this.isSelected;
    }

    setSelected(bool) {
        this.isSelected = bool;
    }

    getPoints(){
        return this.operation.getPoints();
    }

    getSolution(){
        return this.operation.getSolution();
    }

    isAnswerCorrect(str_answer){
        var answerNum = parseInt(str_answer);
        return answerNum == this.getSolution();
    }

    mathSphere(px, py) {
        var x = px - this.getSize() / 2;
        var y = py - this.getSize() / 2;
        var r = Math.sqrt(x * x + y * y);
        var maxR = this.getSize() / 2;
        if (r > maxR) return { 'x': px, 'y': py };

        var a = Math.atan2(y, x);
        var k = (r / maxR) * (r / maxR) * 0.5 + 0.5;
        var dx = Math.cos(a) * r * k;
        var dy = Math.sin(a) * r * k;
        return { 'x': dx + this.getSize() / 2, 'y': dy + this.getSize() / 2 };
    }

    updateData(self, aData) {

        ++self.countPaintSelect;

        for (var j = 0; j < self.getSize(); j++) {
            for (var i = 0; i < self.getSize(); i++) {
                var u = self.aMap[(i + j * self.getSize()) * 2];
                var v = self.aMap[(i + j * self.getSize()) * 2 + 1];
                var x = Math.floor(u);
                var y = Math.floor(v);
                var kx = u - x;
                var ky = v - y;

                var vectorx = x - self.getBubleSize();
                var vectory = y - self.getBubleSize();
                var modulo = Math.sqrt(vectorx * vectorx + vectory * vectory);

                for (var c = 0; c < 4; c++) {
                    self.aBitmap.data[(i + j * self.getSize()) * 4 + c] =
                        (aData.data[(x + y * self.getSize()) * 4 + c] * (1 - kx) + aData.data[((x + 1) + y * self.getSize()) * 4 + c] * kx) * (1 - ky) +
                        (aData.data[(x + (y + 1) * self.getSize()) * 4 + c] * (1 - kx) + aData.data[((x + 1) + (y + 1) * self.getSize()) * 4 + c] * kx) * (ky);

                    //if (Math.floor(modulo) == bubblew) {
                    if (modulo < self.getBubleSize()) {
                        var delta = modulo / self.getBubleSize();

                        // c = 0 canal rojo, c = 1 canal verde, c = 2 canal azul, c = 3 canal alpha (transparencia)
                        if (c < 3) {
                            var shine = self.shine;
                            self.aBitmap.data[(i + j * self.getSize()) * 4 + c] *= (1.0 + shine * delta * delta * delta * delta);
                        }

                        // a partir de cierto punto la burbuja se desvanece (se vuelve transparente)
                        self.aBitmap.data[(i + j * self.getSize()) * 4 + 3] = self.getTransparency();
                    } else {

                        if (self.isSelected && self.countPaintSelect > 15) {
                            if (self.countPaintSelect > 30) {
                                self.countPaintSelect = 0;
                            }
                            var moduloEntero = Math.floor(modulo);
                            var bubbleSize = self.getBubleSize();
                            if (moduloEntero >= bubbleSize) { //painting color (234, 190, 63)
                                switch (c) {
                                    case 0:
                                        self.aBitmap.data[(i + j * self.getSize()) * 4 + c] = 234;
                                        break;
                                    case 1:
                                        self.aBitmap.data[(i + j * self.getSize()) * 4 + c] = 190;
                                        break;
                                    case 2:
                                        self.aBitmap.data[(i + j * self.getSize()) * 4 + c] = 63;
                                        break;
                                    default:
                                        break;
                                }
                            }
                        }

                    }

                }


            }
        }

        self.putImageData(self.aBitmap, 0, 0);

    }

    update(self) {

        // update last coordinates
        self.setPosX(self.getPosX() + self.getSpeedX());
        self.setPosY(self.getPosY() + self.getSpeedY());
        // manage speed
        if (self.getPosX() > self.sizeCanvasScreenWidth - self.getSize() / 2) {
            self.setSpeedX(-3);
        }

        if (self.getPosX() < self.getSize() / 2) {
            self.setSpeedX(3);
        }

        if (self.getPosY() > self.sizeCanvasScreenHeigth - self.getSize() / 2) {
            self.setSpeedY(0);
            self.reduceTransparency();
        }
        if (self.getPosY() < self.getSize() / 2) {
            self.setSpeedY(0);
        }

        //get bubble size
        self.bubleSize = (Math.floor(self.getSize()) / 2);

        //manage css position
        var styleLeft = self.getPosX() - self.bubleSize + 'px';
        var styleTop = self.getPosY() - self.bubleSize + 'px';
        self.setStyleLeft(styleLeft);
        self.setStyleTop(styleTop);

    }

};