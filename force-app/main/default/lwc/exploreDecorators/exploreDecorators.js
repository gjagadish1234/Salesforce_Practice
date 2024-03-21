import { LightningElement, api, track } from 'lwc';

export default class ExploreDataBinding extends LightningElement {
    @api greeting = 'Hello World';
    @api newGreeting = 'Hello kebab';

    // handleChange(event){
    //     this.message = event.target.value;
    // }

}