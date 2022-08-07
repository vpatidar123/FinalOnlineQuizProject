import { QuestionsPrimaryData } from "./questions-primary-data";

export class Questions {

    constructor(
                public questionsprimarydata : QuestionsPrimaryData,
                public question : String,
                public optiona : String,
                public optionb : String,
                public optionc : String,
                public optiond : String,
                public correctoption : String){}
}
