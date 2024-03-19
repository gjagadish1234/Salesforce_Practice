import { LightningElement } from 'lwc';

export default class ComponentLightningInput extends LightningElement {
    name = 'Jagadish';

    nameChange(event){
        this.name = event.target.value;
    }
}