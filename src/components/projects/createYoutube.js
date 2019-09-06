// import React, { Component } from 'react';
// import { Paper, TextField } from '@material-ui/core';

// class CreateYoutube extends Component {
//  state = {
//      searchTerm: ''
//  }
 
//  handleChange = (event) => {
//     // console.log(event.target.value);
//     this.setState({ searchTerm: event.targer.value });
//  }

//  handleSubmit = () => {
//     const { searchTerm } = this.state;
//     const { onFormSubmit } = this.props;

//     onFormSubmit (searchTerm); //onFormSubmit je sa stranice youtubePage
//   //kroz ovu funkciju koju pozovemo ovde, a kreiramo na ytPage strani prolazice podaci kroz props
//  }

  
//   render() {
    
//     return (
//       <Paper elevation={6} style={{ padding: '25px' }}>
//           <form onSubmit={this.handleSubmit}>
//               <TextField fullWidth label="Search..." onChange={this.handleChange} /> 
//           </form>
//       </Paper>
//     )
//   }
// }




// export default CreateYoutube


import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

export default ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => setSearchTerm(event.target.value);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  }

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <TextField
        fullWidth
        label="Search..."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </Paper>
  );
}