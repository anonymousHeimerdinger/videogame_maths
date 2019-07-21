/**
 * 
 * You will need this estrucutre in html5 to work with this class
 * 
 * <div id="container">
        <canvas id="slideshow" width="1024" height="631"></canvas>
    </div>
 */

class CanvasScreen {
    constructor(oImage, str_idBoard, str_idContainer, str_idPoints, musicWin, musicLose) {

        this.initX = [200, 400, 600, 800];
        this.H = 3;
        this.M = 8;

        this.generatorOperations = new GeneratorOperations();
        this.countBubbles;
        this.difficulty;
        this.velocity;

        this.nameUser;
        this.typeOperation;
        this.difficultyChoose;

        this.inputPoints = document.getElementById(str_idPoints);

        this.str_classHealth = "fas fa-heart";
        this.str_classHealthToDelete = "fa-heart";
        this.str_idHealth = '#health';
        this.health;
        this.gameIsNotLost;

        this.element = document.getElementById(str_idBoard);
        this.canvasScreen = this.element.getContext('2d');

        this.lastSeconds;

        this.objectPositionsOccupiedsOnCanvasScreen = new PositionsOccupiedsOnCanvasScreen();
        this.generatorIdBubble = new GeneratorIdBubble();

        this.container = document.getElementById(str_idContainer);

        //this.private_clearCanvasScreen();
        //this.canvasScreen.drawImage(oImage, 0, 0);
        this.oImage = oImage;

        this.arrayBubbles;

        //.addClass("fas fa-plus");

        this.screenIsEmpty;

        this.musicWin = musicWin;
        this.musicLose = musicLose;
    }

    initGame(nameUser, typeOperation, difficultyChoose) {
        this.nameUser = nameUser;
        this.typeOperation = typeOperation;
        this.difficultyChoose = difficultyChoose;

        this.countBubbles = 0;
        this.difficulty = 1;
        this.velocity = 1;

        this.health = 0;
        this.initHealth();
        this.gameIsNotLost = true;

        var time = new Date();
        this.lastSeconds = time.getSeconds();

        this.private_clearCanvasScreen();
        this.canvasScreen.drawImage(this.oImage, 0, 0);

        this.objectPositionsOccupiedsOnCanvasScreen.initPositions();
        this.generatorIdBubble.initIdBubble();

        this.arrayBubbles = new Array();
        this.screenIsEmpty = false;
        this.inputPoints.value = 0;
        this.addBubble(this);
        this.updateSelectBubble(this);
        this.updateScene(this);
    }

    initHealth() {
        for (var i = 0; i < this.H; ++i) {
            this.addHealth();
        }
    }

    loseHealth() {
        var elementI = $("." + this.str_classHealthToDelete).first();
        elementI.remove();
        --this.health;
        if (this.health <= 0) {
            this.gameIsNotLost = false;
        }
    }

    isGameLost() {
        return !this.gameIsNotLost;
    }

    loseHealthWithSelf(self) {
        var elementI = $("." + self.str_classHealthToDelete).first();
        elementI.remove();
        --self.health;
        if (self.health <= 0) {
            self.gameIsNotLost = false;
        }
    }

    addHealth() {
        $(this.str_idHealth).append('<i class="' + this.str_classHealth + '"></i>');
        ++this.health;
    }

    getOperationRandom(self) {
        //self.nameUser;
        //self.typeOperation;
        //self.difficultyChoose;
        var operation;
        var type;
        var level;
        var speed;
        var intType;

        switch (self.typeOperation) {
            case 'sum':
                switch (self.difficultyChoose) {
                    case 'easy':
                        type = self.typeOperation;
                        level = 1;
                        break;
                    case 'normal':
                        type = self.typeOperation;
                        if (self.difficulty < 3) {
                            level = 1;
                        } else {
                            level = Math.floor(Math.random() * 2) + 1;
                        }
                        break;
                    case 'hard':
                        type = self.typeOperation;
                        level = Math.floor(Math.random() * self.difficulty) + 1;
                        break;
                    default:
                        console.log('error was created on sum');
                        break;
                }
                break;
            case 'multiplication':
                switch (self.difficultyChoose) {
                    case 'easy':
                        intType = Math.floor(Math.random() * 2);
                        if (intType == 0) {
                            type = "sum";
                            level = Math.floor(Math.random() * self.difficulty) + 1;
                        } else {
                            type = "multiplication";
                            level = 1;
                        }
                        break;
                    case 'normal':
                        intType = Math.floor(Math.random() * 2);
                        if (intType == 0) {
                            type = "sum";
                            level = Math.floor(Math.random() * (1 + self.difficulty)) + 1;
                        } else {
                            type = "multiplication";
                            if (self.difficulty < 3) {
                                level = 1
                            } else {
                                level = Math.floor(Math.random() * 2) + 1;
                            }

                        }
                        break;
                    case 'hard':
                        intType = Math.floor(Math.random() * 2);
                        if (intType == 0) {
                            type = "sum";
                            level = Math.floor(Math.random() * (self.difficulty + 3)) + 1;
                        } else {
                            type = "multiplication";
                            level = Math.floor(Math.random() * self.difficulty) + 1;
                        }
                        break;
                    default:
                        console.log('error was created on multiplication');
                        break;
                }
                break;
            case 'equation':
                switch (self.difficultyChoose) {
                    case 'easy':
                        intType = Math.floor(Math.random() * 3);
                        if (intType == 0) {
                            type = "sum";
                            level = Math.floor(Math.random() * (2 + self.difficulty)) + 1;
                        } else {
                            if (intType == 1) {
                                type = "multiplication";
                                level = Math.floor(Math.random() * self.difficulty) + 1;
                            } else {
                                type = "equation";
                                level = 1;
                            }
                        }
                        break;
                    case 'normal':
                        intType = Math.floor(Math.random() * 3);
                        if (intType == 0) {
                            type = "sum";
                            level = Math.floor(Math.random() * (2 + self.difficulty)) + 1;
                        } else {
                            if (intType == 1) {
                                type = "multiplication";
                                level = Math.floor(Math.random() * self.difficulty) + 1;
                            } else {
                                type = "equation";
                                if (self.difficulty < 3) {
                                    level = 1;
                                } else {
                                    level = Math.floor(Math.random() * 2) + 1;
                                }
                            }
                        }
                        break;
                    case 'hard':
                        intType = Math.floor(Math.random() * 3);
                        if (intType == 0) {
                            type = "sum";
                            level = Math.floor(Math.random() * (2 + self.difficulty)) + 1;
                        } else {
                            if (intType == 1) {
                                type = "multiplication";
                                level = Math.floor(Math.random() * self.difficulty) + 1;
                            } else {
                                type = "equation";
                                level = Math.floor(Math.random() * self.difficulty) + 1;
                            }
                        }
                        break;
                    default:
                        console.log('error was created on equation');
                        break;
                }
                break;
            default:
                console.log('error was created');
                break;
        }

        speed = Math.random() * (self.velocity - 1) + 1;
        operation = self.generatorOperations.getOperation(type, level, speed);

        return operation;
    }

    addBubble(self) {

        var positionOcupied = self.objectPositionsOccupiedsOnCanvasScreen.getPositionFreeAndToOccupy();
        if (positionOcupied == -1) {
            return;
        }
        var id = self.generatorIdBubble.getId();
        //if (positionOcupied > 3) {
        //}
        var operation = self.getOperationRandom(self);

        var sizeTestBubble = 4 + ((operation.getText().length) * 8);
        var initPosX = self.initX[positionOcupied];
        var aBitmap = self.canvasScreen.getImageData(0, 0, sizeTestBubble, sizeTestBubble);


        var bubble = new CreateObjectCanvas(container, positionOcupied, id,
            self.canvasScreen.canvas.width, self.canvasScreen.canvas.height,
            sizeTestBubble, aBitmap, initPosX, operation);

        self.arrayBubbles.push(bubble);
        ++self.countBubbles;

        if (self.countBubbles % self.M == 0) {
            if (self.difficulty < 3) {
                ++self.difficulty;
            } else {
                self.velocity += 0.3;
            }
        }

        if (self.screenIsEmpty) {
            self.updateSelectBubble(self);
        }
    }

    private_clearCanvasScreen() {
        var width = this.canvasScreen.canvas.width;
        var height = this.canvasScreen.canvas.height;

        this.canvasScreen.clearRect(0, 0, width, height);
    }

    isThereBubbleSelected(self) {

        var length = self.arrayBubbles.length;
        var i = 0;

        while (i < length) {
            if (self.arrayBubbles[i].selected()) {
                return true;
            }
            ++i;
        }

        return false;
    }

    updateSelectBubble(self) {

        if (!self.isThereBubbleSelected(self)) {
            var length = self.arrayBubbles.length;

            if (length > 0) {
                var posBubbleTop = self.arrayBubbles[0].getPosY();
                var indexBubbleTop = 0;

                for (var i = 1; i < length; ++i) {
                    if (self.arrayBubbles[i].getPosY() > posBubbleTop) {
                        posBubbleTop = self.arrayBubbles[i].getPosY();
                        indexBubbleTop = i;
                    }
                }
                self.arrayBubbles[indexBubbleTop].setSelected(true);
                self.screenIsEmpty = false;
            } else {
                self.screenIsEmpty = true;
            }
        }
    }

    takeUpdateSelectBubble() {
        var length = this.arrayBubbles.length;

        if (length > 0) {
            var posBubbleTop = this.arrayBubbles[0].getPosY();
            var indexBubbleTop = 0;
            this.arrayBubbles[0].setSelected(false);

            for (var i = 1; i < length; ++i) {
                this.arrayBubbles[i].setSelected(false);
                if (this.arrayBubbles[i].getPosY() > posBubbleTop) {
                    posBubbleTop = this.arrayBubbles[i].getPosY();
                    indexBubbleTop = i;
                }
            }
            this.arrayBubbles[indexBubbleTop].setSelected(true);
            this.screenIsEmpty = false;
            return true;
        } else {
            this.screenIsEmpty = true;
            return false;
        }
    }

    takeUpSelectBubble() {
        var indexBubbleSelected = this.getIndexBubbleSelected();

        if (indexBubbleSelected == -1) {
            return;
        }

        var length = this.arrayBubbles.length;
        var indexBubbleChosen = -1;
        var distanceMin = 4000;

        var posBubbleSelected = this.arrayBubbles[indexBubbleSelected].getPosY();

        for (var i = 0; i < indexBubbleSelected; ++i) {
            var i_posY = this.arrayBubbles[i].getPosY();
            if (i_posY < posBubbleSelected) {
                var distanceBetweenBubbles = posBubbleSelected - i_posY;
                if (distanceBetweenBubbles < distanceMin) {
                    distanceMin = distanceBetweenBubbles;
                    indexBubbleChosen = i;
                }
            }
        }

        for (var i = indexBubbleSelected + 1; i < length; ++i) {
            var i_posY = this.arrayBubbles[i].getPosY();
            if (i_posY < posBubbleSelected) {
                var distanceBetweenBubbles = posBubbleSelected - i_posY;
                if (distanceBetweenBubbles < distanceMin) {
                    distanceMin = distanceBetweenBubbles;
                    indexBubbleChosen = i;
                }
            }
        }

        if (indexBubbleChosen != -1) {
            this.arrayBubbles[indexBubbleChosen].setSelected(true);
            this.arrayBubbles[indexBubbleSelected].setSelected(false);
            return true;
        }
        return false;
    }

    takeDownSelectBubble() {
        var indexBubbleSelected = this.getIndexBubbleSelected();

        if (indexBubbleSelected == -1) {
            return;
        }

        var length = this.arrayBubbles.length;
        var indexBubbleChosen = -1;
        var distanceMin = 4000;

        var posBubbleSelected = this.arrayBubbles[indexBubbleSelected].getPosY();

        for (var i = 0; i < indexBubbleSelected; ++i) {
            var i_posY = this.arrayBubbles[i].getPosY();
            if (i_posY > posBubbleSelected) {
                var distanceBetweenBubbles = i_posY - posBubbleSelected;
                if (distanceBetweenBubbles < distanceMin) {
                    distanceMin = distanceBetweenBubbles;
                    indexBubbleChosen = i;
                }
            }
        }

        for (var i = indexBubbleSelected + 1; i < length; ++i) {
            var i_posY = this.arrayBubbles[i].getPosY();
            if (i_posY > posBubbleSelected) {
                var distanceBetweenBubbles = i_posY - posBubbleSelected;
                if (distanceBetweenBubbles < distanceMin) {
                    distanceMin = distanceBetweenBubbles;
                    indexBubbleChosen = i;
                }
            }
        }

        if (indexBubbleChosen != -1) {
            this.arrayBubbles[indexBubbleChosen].setSelected(true);
            this.arrayBubbles[indexBubbleSelected].setSelected(false);
            return true;
        }
        return false;
    }

    takeLeftSelectBubble() {
        var indexBubbleSelected = this.getIndexBubbleSelected();

        if (indexBubbleSelected == -1) {
            return;
        }

        var length = this.arrayBubbles.length;
        var indexBubbleChosen = -1;
        var distanceMin = 4000;

        var posBubbleSelected = this.arrayBubbles[indexBubbleSelected].getPosX();

        for (var i = 0; i < indexBubbleSelected; ++i) {
            var i_posX = this.arrayBubbles[i].getPosX();
            if (i_posX < posBubbleSelected) {
                var distanceBetweenBubbles = posBubbleSelected - i_posX;
                if (distanceBetweenBubbles < distanceMin) {
                    distanceMin = distanceBetweenBubbles;
                    indexBubbleChosen = i;
                }
            }
        }

        for (var i = indexBubbleSelected + 1; i < length; ++i) {
            var i_posX = this.arrayBubbles[i].getPosX();
            if (i_posX < posBubbleSelected) {
                var distanceBetweenBubbles = posBubbleSelected - i_posX;
                if (distanceBetweenBubbles < distanceMin) {
                    distanceMin = distanceBetweenBubbles;
                    indexBubbleChosen = i;
                }
            }
        }

        if (indexBubbleChosen != -1) {
            this.arrayBubbles[indexBubbleChosen].setSelected(true);
            this.arrayBubbles[indexBubbleSelected].setSelected(false);
            return true;
        }
        return false;
    }

    takeRightSelectBubble() {
        var indexBubbleSelected = this.getIndexBubbleSelected();

        if (indexBubbleSelected == -1) {
            return;
        }

        var length = this.arrayBubbles.length;
        var indexBubbleChosen = -1;
        var distanceMin = 4000;

        var posBubbleSelected = this.arrayBubbles[indexBubbleSelected].getPosX();

        for (var i = 0; i < indexBubbleSelected; ++i) {
            var i_posX = this.arrayBubbles[i].getPosX();
            if (i_posX > posBubbleSelected) {
                var distanceBetweenBubbles = i_posX - posBubbleSelected;
                if (distanceBetweenBubbles < distanceMin) {
                    distanceMin = distanceBetweenBubbles;
                    indexBubbleChosen = i;
                }
            }
        }

        for (var i = indexBubbleSelected + 1; i < length; ++i) {
            var i_posX = this.arrayBubbles[i].getPosX();
            if (i_posX > posBubbleSelected) {
                var distanceBetweenBubbles = i_posX - posBubbleSelected;
                if (distanceBetweenBubbles < distanceMin) {
                    distanceMin = distanceBetweenBubbles;
                    indexBubbleChosen = i;
                }
            }
        }

        if (indexBubbleChosen != -1) {
            this.arrayBubbles[indexBubbleChosen].setSelected(true);
            this.arrayBubbles[indexBubbleSelected].setSelected(false);
            return true;
        }
        return false;
    }

    addPoints(points) {
        var pointsCurrent = parseInt(this.inputPoints.value);
        this.inputPoints.value = points + pointsCurrent;
    }

    getIndexBubbleSelected() {
        var length = this.arrayBubbles.length;
        var i = 0;

        while (i < length) {
            if (this.arrayBubbles[i].selected()) {
                return i;
            }
            ++i;
        }
        return -1;

    }

    setAnswer(str_answer) {
        var index = this.getIndexBubbleSelected();

        if (index == -1) {
            return;
        }

        if (this.arrayBubbles[index].isAnswerCorrect(str_answer)) {
            var points = this.arrayBubbles[index].getPoints();
            this.addPoints(points);
            this.private_destroyBubble(index);
            $('#getPoint').trigger("play");
        } else {
            this.loseHealth();
            this.private_destroyBubble(index);
            $('#otherDie').trigger("play");
        }
    }

    private_destroyBubbleWithSelf(self, positionOcupedBybubble, indexBubble) {
        var bool = self.arrayBubbles[indexBubble].selected();
        self.objectPositionsOccupiedsOnCanvasScreen.exploitBubble(positionOcupedBybubble);
        self.arrayBubbles[indexBubble].toDie();
        self.arrayBubbles.splice(indexBubble, 1); // (index, number valors to delete)
        if (bool) {
            self.updateSelectBubble(self);
        }
        $('#dieGame').trigger("play");
    }

    private_destroyBubble(indexBubble) {
        var bool = this.arrayBubbles[indexBubble].selected();
        var positionOcupedBybubble = this.arrayBubbles[indexBubble].positionOcupied;
        this.objectPositionsOccupiedsOnCanvasScreen.exploitBubble(positionOcupedBybubble);
        this.arrayBubbles[indexBubble].toDie(); //Clear and delete the element canvas html
        this.arrayBubbles.splice(indexBubble, 1); // (index, number valors to delete)
        if (bool) {
            this.updateSelectBubble(this);
        }
    }

    private_destroyAllBubbles(self) {

        for (var i = 0; i < self.arrayBubbles.length; ++i) {
            self.arrayBubbles[i].toDie();
            self.arrayBubbles.splice(i, 1);
            --i;
        }
    }

    updateScene(self) {
        var time = new Date();

        var secondsNow = time.getSeconds();
        var distance = Math.abs(self.lastSeconds - secondsNow);
        if (distance > 3) {
            self.addBubble(self);
            self.lastSeconds = secondsNow;
        }


        var length = self.arrayBubbles.length;

        // draw spheres
        for (var i = 0; i < length; ++i) {
            var bubble = self.arrayBubbles[i];
            bubble.update(bubble);
            var aData = self.canvasScreen.getImageData(
                bubble.getPosX() - Math.ceil(bubble.getSize() / 2),
                bubble.getPosY() - Math.ceil(bubble.getSize() / 2),
                bubble.getSize(),
                bubble.getSize() + 1);

            bubble.updateData(bubble, aData);
            if (bubble.transparency == 0) {
                var positionOcuped = bubble.positionOcupied;
                self.loseHealthWithSelf(self);
                self.private_destroyBubbleWithSelf(self, positionOcuped, i);
                --i;
                --length;
                // pending delete once point of health
                self.updateSelectBubble(self); // select other bubble after to die
            }
        }

        // update timer
        if (this.health > 0) {
            setTimeout((function() { self.updateScene(self); }), 16);
        } else {
            self.private_destroyAllBubbles(self);
            this.gameIsNotLost = false;
            $(document).trigger('funEventFinishGame');
        }

        //setTimeout((function() { self.addBubble(self); }), 10);
    }

};