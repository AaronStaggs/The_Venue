import React, { Component } from 'react';
import Fade from 'react-reveal';
import Slide from 'react-reveal';
import MyButton from '../Utils/MyButton';

class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:30
    } 

    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.porcentage()
        }, 30)
    }


    render() {
        return (
            <div className='center_wrapper'>
                <div className='discount_wrapper'>
                    <Fade
                        onReveal={() => this.porcentage()}
                    >
                    <div className='discount_porcentage'>
                        <span>{this.state.discountStart}%</span>
                        <span>Off</span>
                    </div>
                    </Fade>
                    <Slide right>
                    <div className='discount_description'>
                        <h3>Purchase tickets before March 18th!</h3>
                        <p>More gibberish here. Please clap. My wife left me.</p>
                        <MyButton
                        text="Purchase Tickets"
                        bck='#ffa800'
                        color="#ffffff"
                        link="http://www.espn.com">


                        </MyButton>
                    </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;