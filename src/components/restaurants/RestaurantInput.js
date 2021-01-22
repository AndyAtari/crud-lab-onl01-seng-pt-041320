import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: "",
  }
  
  handleOnChange(event) {
   this.setState({
     text: event.target.value,
   });
 }

 handleOnSubmit(event) {
   event.preventDefault();
   this.props.addRestaurant(this.state.text)
   this.setState({
     text: ''
   });
 }
 
  render() {
    return (
      <div>
      
      </div>
    );
  }
};

export default RestaurantInput;
