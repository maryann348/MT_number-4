import React, {Component} from 'react';

class BusinessCard extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {

    //     }
    // }
    render(){
        return(
                <div className = "center">
                    <h1>Welcome to MC Business Card</h1>
                    <h1>
                    <img className='profile-image' alt='businesscard' src={"https://images.sampletemplates.com/wp-content/uploads/2016/08/business-card-feature-1.jpg"}/>
                        </h1>
                        <h1>
                            Hope to see you again!!
                            </h1>
                </div>
        );
    }
}
export default BusinessCard;