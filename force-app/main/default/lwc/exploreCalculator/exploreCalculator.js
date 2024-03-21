import { LightningElement } from 'lwc';

export default class ExploreCalculator extends LightningElement {

    totalAmount;
    taxPercentage;
    handleChange(event){
        const field = event.target.name;
        if(field === "totalAmount"){
           this.totalAmount = event.target.value;
        }

        if(field === "totalPercentage"){
            this.taxPercentage = event.target.value;
         }

         this.template.querySelector("c-explore-math").calculate(this.totalAmount, this.taxPercentage);
    }
}