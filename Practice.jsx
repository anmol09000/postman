import React, { Component } from "react";
import { Avatar, Chip, TextField } from "@mui/material";
import "./style.css";

class ReactSet extends Component {
  state = {
    data: [
      { name: "Tracy Bing", id: "bing23@abc.com" },
      { name: "Kathy Williams", id: "williamsk@gmail.com" },
      { name: "Ken Alvarez", id: "ken.alvarez@example.com" },
      { name: "Sohan Newman", id: "sohan.newman@gmail.com" },
      { name: "John Newlay", id: "john.newlay@test.com" },
      { name: "Bob Marley", id: "marley.bob@test.com" },
    ],
    showList: false,
    inpValue:"",
    selected:[],
  };

  show = () => {
    this.setState((prevState) => ({
      showList: !prevState.showList,
    }));
  };

  handleChange=(e)=>{
    let s1 = {...this.state};
    s1.inpValue = e.currentTarget.value;
    this.setState(s1);
  }

  handleDelete=(data)=>{
    let s1={...this.state};
    let idx = s1.selected.findIndex((a)=>a===data);
    if(idx>=0){
        s1.selected.splice(idx,1);
        s1.data.push(data);
        this.setState(s1);
    }
  }

  addItem=(data)=>{
    let s1={...this.state};
    let idx = s1.data.findIndex((a)=>a===data);
    if(idx>=0){
        s1.selected.push(data);
        s1.data.splice(idx,1);
        this.setState(s1);
        this.show();
    }
  }
  
  render() {
    let { data, showList, inpValue, selected } = this.state;
    return ( 
      <div className="container">
        <div className="">
          <h2 style={{ fontFamily: "serif", color: "blue", fontWeight: 600 }}>
            Pick Users
          </h2>
          <div>
          {selected.map((a)=>(
            <Chip className="mr-2" avatar={<Avatar>{a.name[0]}</Avatar>} label={a.name} onDelete={()=>this.handleDelete(a)} />
          ))}
          </div>
          <TextField
            className="col-6 mt-3"
            onClick={this.show}
            value={inpValue}
            onChange={this.handleChange}
            placeholder="Add new user..."
            variant="standard"
            color="primary"
            focused
          />
        </div>
        {showList && (
          <div className="col-5" style={{top:-3}}>
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                overflowY: "auto",
                maxHeight: "120px",
                backgroundColor:"white",
              }}
            >
              {data.filter((a)=>a.name.toLowerCase().includes(inpValue.toLowerCase())).map((a) => (
                <div className="py-2 m-0" key={a.id} onClick={()=>this.addItem(a)} style={{cursor:"pointer"}}>
                  <span style={{margin:"5px",backgroundColor:"gray",padding:"5px",borderRadius:"50%"}}>{a.name[0]}</span>  
                  <span style={{fontWeight:500,marginRight:"20px"}}>{a.name}</span> 
                  {a.id}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ReactSet;
