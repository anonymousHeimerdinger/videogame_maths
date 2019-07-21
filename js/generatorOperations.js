class GeneratorOperations {
    constructor() {

        //thermes :=
        // type indicate us the sum, multiplication or equation
        // level indicate us the difficulty -> there is 3 levels of difficulty

        this.MAX = 100;
        this.MIN = 10;
        this.MED = 20;
        this.sizeVectorEquation = 11;
        this.numTypes = 3;

        this.matrix = new Array(this.numTypes);

        for (var i = 0; i < 3; ++i) {
            this.matrix[i] = new Array(this.sizeVectorEquation);
        }

        //The  object Operation needs next information: 
        //difficultNumber from 1 to 3, velocity from 1 to 5, type, text, solution


        //(this.matrix[0].length == this.matrix[1].length ==  this.matrix[2].length) == TRUE

        //equation level 1

        var equation = "3x=21";
        var solutionEquation = 7;

        this.matrix[0][0] = new Operation(0, 1, 'equation', equation, solutionEquation);

        equation = "8x+4=4x";
        solutionEquation = 1;

        this.matrix[0][1] = new Operation(0, 1, 'equation', equation, solutionEquation);

        equation = "2-5x=17";
        solutionEquation = -3;

        this.matrix[0][2] = new Operation(0, 1, 'equation', equation, solutionEquation);

        equation = "1-x=-2";
        solutionEquation = 3;

        this.matrix[0][3] = new Operation(0, 1, 'equation', equation, solutionEquation);

        equation = "2x/3=4";
        solutionEquation = 6;

        this.matrix[0][4] = new Operation(0, 1, 'equation', equation, solutionEquation);

        equation = "x=2x";
        solutionEquation = 0;

        this.matrix[0][5] = new Operation(0, 1, 'equation', equation, solutionEquation);

        equation = "2x=5x";
        solutionEquation = 0;

        this.matrix[0][6] = new Operation(0, 1, 'equation', equation, solutionEquation);

        equation = "2x+3x=5x";
        solutionEquation = 0;

        this.matrix[0][7] = new Operation(0, 1, 'equation', equation, solutionEquation);

        equation = "x=-x";
        solutionEquation = 0;

        this.matrix[0][8] = new Operation(0, 1, 'equation', equation, solutionEquation);

        equation = "2x=2";
        solutionEquation = 1;

        this.matrix[0][9] = new Operation(0, 1, 'equation', equation, solutionEquation);

        equation = "2x=6";
        solutionEquation = 3;

        this.matrix[0][10] = new Operation(0, 1, 'equation', equation, solutionEquation);

        //equation level 2



        equation = "1+x=3+1";
        solutionEquation = 3;

        this.matrix[1][0] = new Operation(1, 1, 'equation', equation, solutionEquation);


        equation = "-2+5=6-x-2";
        solutionEquation = 1;

        this.matrix[1][1] = new Operation(1, 1, 'equation', equation, solutionEquation);

        equation = "2x+4+3x-1=7x-2-x";
        solutionEquation = 5;

        this.matrix[1][2] = new Operation(1, 1, 'equation', equation, solutionEquation);

        equation = "2x-3=6+x";
        solutionEquation = 9;

        this.matrix[1][3] = new Operation(1, 1, 'equation', equation, solutionEquation);

        equation = "2*(2x-3)=6+x";
        solutionEquation = 4;

        this.matrix[1][4] = new Operation(1, 1, 'equation', equation, solutionEquation);

        equation = "3*[2*(2x-3)]=3*(6+x)";
        solutionEquation = 4;

        this.matrix[1][5] = new Operation(1, 1, 'equation', equation, solutionEquation);

        equation = "8-5x=8+2x";
        solutionEquation = 0;

        this.matrix[1][6] = new Operation(1, 1, 'equation', equation, solutionEquation);

        equation = "x+5=2x+3";
        solutionEquation = 2;

        this.matrix[1][7] = new Operation(1, 1, 'equation', equation, solutionEquation);

        equation = "12x+5=41";
        solutionEquation = 3;

        this.matrix[1][8] = new Operation(1, 1, 'equation', equation, solutionEquation);

        equation = "7x+2+4x=5x+32";
        solutionEquation = 5;

        this.matrix[1][9] = new Operation(1, 1, 'equation', equation, solutionEquation);

        equation = "5*(2+x)=2x+31";
        solutionEquation = 7;

        this.matrix[1][10] = new Operation(1, 1, 'equation', equation, solutionEquation);

        //equation level 3

        equation = "3*2+3*(5-x)=0";
        solutionEquation = 7;

        this.matrix[2][0] = new Operation(2, 1, 'equation', equation, solutionEquation);

        equation = "(3*2+3)*5-x=0";
        solutionEquation = 45;

        this.matrix[2][1] = new Operation(2, 1, 'equation', equation, solutionEquation);

        equation = "3*2+(3*5)-x=0";
        solutionEquation = 21;

        this.matrix[2][2] = new Operation(2, 1, 'equation', equation, solutionEquation);

        equation = "3*(2+3)*5-x=0";
        solutionEquation = 75;

        this.matrix[2][3] = new Operation(2, 1, 'equation', equation, solutionEquation);

        equation = "(1-x)/3=1-(2x-5)/3";
        solutionEquation = 7;

        this.matrix[2][4] = new Operation(2, 1, 'equation', equation, solutionEquation);

        equation = "x+(2/3)*(5-x)=2x";
        solutionEquation = 2;

        this.matrix[2][5] = new Operation(2, 1, 'equation', equation, solutionEquation);

        equation = "(1/5)*[(5x/3)-1]=(3x/10)";
        solutionEquation = 6;

        this.matrix[2][6] = new Operation(2, 1, 'equation', equation, solutionEquation);

        equation = "[(x-1)/6]-[(x-3)/2]=-1";
        solutionEquation = 7;

        this.matrix[2][7] = new Operation(2, 1, 'equation', equation, solutionEquation);

        equation = "(3/4)(2x+4)=x+19";
        solutionEquation = 32;

        this.matrix[2][8] = new Operation(2, 1, 'equation', equation, solutionEquation);

        equation = "4*(x-10)=-6*(2-x)-6x";
        solutionEquation = 7;

        this.matrix[2][9] = new Operation(2, 1, 'equation', equation, solutionEquation);

        equation = "2*(x+1)-3*(x-2)=x+6";
        solutionEquation = 1;

        this.matrix[2][10] = new Operation(2, 1, 'equation', equation, solutionEquation);


        //equation = "4/(x-3)=5/(x-2)";
        //solutionEquation = 7;

        //this.matrix[2][11] = new Operation(2, 1, 'equation', equation, solutionEquation);

        //equation = "[(x-1)/3]+[(x-2)/2]=2";
        //solutionEquation = 4;

        //this.matrix[2][12] = new Operation(2, 1, 'equation', equation, solutionEquation);
    }

    getOperation(type, level, velocity) {

        var number1;
        var number2;
        var number3;
        var textNumber1;
        var textNumber2;
        var textNumber3;
        var valueNegative1;
        var valueNegative2;
        var valueNegative3;
        var text;
        var solution;
        var type;

        switch (type) {
            case 'sum':
                switch (level) {
                    case 1:
                        // save sums of level 1
                        number1 = Math.floor(Math.random() * this.MIN);
                        number2 = Math.floor(Math.random() * this.MIN);
                        text = number1 + " + " + number2;
                        solution = number1 + number2;
                        break;
                    case 2:
                        //save sums of level 2
                        number1 = Math.floor(Math.random() * this.MIN);
                        number2 = Math.floor(Math.random() * this.MIN);
                        valueNegative1 = Math.floor(Math.random() * 2) - 1;
                        valueNegative2 = Math.floor(Math.random() * 2) - 1;
                        if (valueNegative1 == -1) {
                            number1 *= -1;
                            textNumber1 = number1;
                        } else {
                            textNumber1 = number1;
                        }
                        if (valueNegative2 == -1 && number2 != 0) {
                            number2 *= -1;
                            textNumber2 = " " + number2;
                        } else {
                            textNumber2 = " + " + number2;
                        }
                        text = textNumber1 + textNumber2;
                        solution = number1 + number2;
                        break;
                    case 3:
                        //save sums of level 3
                        number1 = Math.floor(Math.random() * this.MIN);
                        number2 = Math.floor(Math.random() * this.MIN);
                        number3 = Math.floor(Math.random() * this.MIN);
                        valueNegative1 = Math.floor(Math.random() * 2) - 1;
                        valueNegative2 = Math.floor(Math.random() * 2) - 1;
                        valueNegative3 = Math.floor(Math.random() * 2) - 1;
                        if (valueNegative1 == -1) {
                            number1 *= -1;
                            textNumber1 = "(" + number1 + ")";
                        } else {
                            textNumber1 = number1;
                        }
                        if (valueNegative2 == -1) {
                            number2 *= -1;
                            textNumber2 = "(" + number2 + ")";
                        } else {
                            textNumber2 = number2;
                        }
                        if (valueNegative3 == -1) {
                            number3 *= -1;
                            textNumber3 = "(" + number3 + ")";
                        } else {
                            textNumber3 = number3;
                        }
                        text = textNumber1 + " + " + textNumber2 + " + " + textNumber3;
                        solution = number1 + number2 + number3;
                        break;
                    case 4:
                        //save sums of level 4
                        number1 = Math.floor(Math.random() * this.MED);
                        number2 = Math.floor(Math.random() * this.MED);
                        valueNegative1 = Math.floor(Math.random() * 2) - 1;
                        valueNegative2 = Math.floor(Math.random() * 2) - 1;
                        if (valueNegative1 == -1) {
                            number1 *= -1;
                            textNumber1 = number1;
                        } else {
                            textNumber1 = number1;
                        }
                        if (valueNegative2 == -1 && number2 != 0) {
                            number2 *= -1;
                            textNumber2 = " " + number2;
                        } else {
                            textNumber2 = " + " + number2;
                        }
                        text = textNumber1 + textNumber2;
                        solution = number1 + number2;
                        break;
                    case 5:
                        //save sums of level 5
                        number1 = Math.floor(Math.random() * this.MED);
                        number2 = Math.floor(Math.random() * this.MED);
                        number3 = Math.floor(Math.random() * this.MED);
                        valueNegative1 = Math.floor(Math.random() * 2) - 1;
                        valueNegative2 = Math.floor(Math.random() * 2) - 1;
                        valueNegative3 = Math.floor(Math.random() * 2) - 1;
                        if (valueNegative1 == -1) {
                            number1 *= -1;
                            textNumber1 = "(" + number1 + ")";
                        } else {
                            textNumber1 = number1;
                        }
                        if (valueNegative2 == -1) {
                            number2 *= -1;
                            textNumber2 = "(" + number2 + ")";
                        } else {
                            textNumber2 = number2;
                        }
                        if (valueNegative3 == -1) {
                            number3 *= -1;
                            textNumber3 = "(" + number3 + ")";
                        } else {
                            textNumber3 = number3;
                        }
                        text = textNumber1 + " + " + textNumber2 + " + " + textNumber3;
                        solution = number1 + number2 + number3;
                        break;
                    default:
                        type = 'sum';
                        text = "0 + 0";
                        solution = 0;
                        break;
                }
                break;
            case 'multiplication':
                switch (level) {
                    case 1:
                        // save multiplications of level 1
                        number1 = Math.floor(Math.random() * this.MIN);
                        number2 = Math.floor(Math.random() * this.MIN);
                        text = number1 + " * " + number2;
                        solution = number1 * number2;
                        break;
                    case 2:
                        // save multiplications of level 2
                        number1 = Math.floor(Math.random() * this.MIN);
                        number2 = Math.floor(Math.random() * this.MIN);
                        valueNegative1 = Math.floor(Math.random() * 2) - 1;
                        valueNegative2 = Math.floor(Math.random() * 2) - 1;
                        if (valueNegative1 == -1) {
                            number1 *= -1;
                            textNumber1 = "" + number1;
                        } else {
                            textNumber1 = number1;
                        }
                        if (valueNegative2 == -1) {
                            number2 *= -1;
                            textNumber2 = "(" + number2 + ")";
                        } else {
                            textNumber2 = number2;
                        }
                        text = textNumber1 + " * " + textNumber2;
                        solution = number1 * number2;
                        break;
                    case 3:
                        // save multiplications of level 3
                        number1 = Math.floor(Math.random() * this.MED);
                        number2 = Math.floor(Math.random() * this.MED);
                        valueNegative1 = Math.floor(Math.random() * 2) - 1;
                        valueNegative2 = Math.floor(Math.random() * 2) - 1;
                        number1 = number1 * number2;
                        if (valueNegative1 == -1) {
                            number1 *= -1;
                            textNumber1 = "" + number1;
                        } else {
                            textNumber1 = number1;
                        }
                        if (valueNegative2 == -1) {
                            number2 *= -1;
                            textNumber2 = "(" + number2 + ")";
                        } else {
                            textNumber2 = number2;
                        }
                        text = textNumber1 + " / " + textNumber2;
                        solution = number1 / number2;
                        break;
                    default:
                        type = 'multiplication';
                        text = "0 * 0";
                        solution = 0;
                        break;
                }
                break;
            case 'equation':
                if (level < 1 || level > 3) {
                    text = "error";
                    solution = 0;
                }
                number1 = Math.floor(Math.random() * this.sizeVectorEquation);
                text = this.matrix[level - 1][number1].getText();
                solution = this.matrix[level - 1][number1].getSolution();
                break;
            default:
                type = 'equation';
                text = "x = 0";
                solution = 0;
                break;
        }

        return new Operation(level, velocity, type, text, solution);
    }

};