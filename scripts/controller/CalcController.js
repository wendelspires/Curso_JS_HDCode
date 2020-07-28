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


    }

    get displayTime(){
      return.this_timeEl.innerHTML;
    }

    set displayTime(value){
      return.this_timeEl.innerHTML = value;
    }

    get displayDate(){
      return.this_dateEl.innerHTML;
    }

    set displayDate(value){
      return.this_dateEl.innerHTML = value;
    }

    get displayCalc(){
      return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
      this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
      return new Date();
    }

    set currentDate(data){
      this._dataAtual = data;
    }

}
