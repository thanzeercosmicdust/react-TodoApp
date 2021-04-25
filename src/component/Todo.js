import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  state = {
    input: "",
    items :[]
  };
  updatevalue=(key2)=>{
    const allitems=this.state.items;
    const newvalue=prompt("enter the new value")
    allitems[key2]=newvalue;
    this.setState({
      items:allitems
    })

  }
  
  deleteitem=(key)=>{ 
   const allitems=this.state.items;
    allitems.splice(key,1); 
    this.setState({
      items:allitems
    })
    

  };
  submit=(event)=>{
    event.preventDefault();

    
    const allitems=this.state.items;
    allitems.push(this.state.input);
    this.setState({
      items:allitems,
      input:""
    })
    
    
      
  }
  change = (event) => {
    this.setState({
      input: event.target.value
    });
    console.log(this.state.input);
  };
  render() {
    const { input,items } = this.state;
    console.log(items);
    return (
      <div className="Todo-container">
        <h2>Todo list</h2>
        <form className="input-section" onSubmit={this.submit}>
          <input type="text" value={input} onChange={this.change} />
          <button>Add</button>
        </form>
        <ul>
          {items.map((data,index)=>(
            <li key="index">
            {data}<i class="fas fa-pen-alt"onClick={()=>this.updatevalue(index)}></i><i class="fas fa-trash-alt" onClick={()=>this.deleteitem(index)}></i>
          </li>

          ))}
          
        </ul>
      </div>
    );
  }
}

export default Todo;
