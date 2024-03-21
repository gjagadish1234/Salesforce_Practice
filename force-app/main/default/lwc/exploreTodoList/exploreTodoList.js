import { LightningElement, track } from 'lwc';

export default class ExploreTodoList extends LightningElement {

    todo;
    @track todoArray = [];
    handleChange(event){
        this.todo = event.target.value;
    }

    handleClick(){
        const todoObj = {
            id: null,
            name: ''
        }
        todoObj.id = Math.round(Math.random() * 100);
        todoObj.name = this.todo;
       // this.todoArray.push(todoObj);
        this.todoArray.unshift(todoObj);
        console.log('Entered');
        console.log(this.todoArray);
    }

}