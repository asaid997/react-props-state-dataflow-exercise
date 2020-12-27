import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            store: props.store,
            shouldDiscount: props.shouldDiscount
        }
    }

    render() {
        return(
            <div>
                {this.state.store.map(i => this.state.shouldDiscount ? (<Item item={i} shouldDiscount={true}/>) : (<Item item={i}/>))}
            </div>
        )

    }
}

export default Home