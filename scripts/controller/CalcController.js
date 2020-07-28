//criando a classes
class CalcController {

    constructor(){


        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }

    initialize(){

        dateEl.innerHTML = "01/05/2020";
        timeEl.innerHTML = "00:00";

    }

    get displayCalc(){
      return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor){
      this._displayCalcEl.innerHTML = valor;
    }

    get currentDate(){
      return this._currentDate;
    }

    set currentDate(data){
      this._dataAtual = data;
    }

}
