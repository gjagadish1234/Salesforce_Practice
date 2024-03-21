import { LightningElement } from 'lwc';

export default class ExploreGettersSetters extends LightningElement {

    welcomeMessage = "Hellooooo";
    finalMessage
    get message(){
        return this.welcomeMessage;
    }

    set message(value){
       this.finalMessage =  value.toUpperCase();
    }

    handleChange(event){
        this.message = event.target.value;
    }

}