import React from 'react';
import './TargetVerbs.css';


class TargetVerbs extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{background:"red",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> Daily verb goal </div>

          { this.state.displayMenu ? (
          <ul>
         <li>25</li>
         <li>50</li>
         <li>75</li>
         <li>100</li>
         <li>150</li>
         <li>200</li>
         <li>300</li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default TargetVerbs;





