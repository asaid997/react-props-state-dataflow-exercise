import React, { Component } from 'react';

class Landing extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: props.user,
            store: props.store
        }
    }


    render() {
        const hottest = this.state.store.find(item => item.hottest)
        return (
            <div>
                Welcome {this.state.user}
                Hottest item in the store! - {hottest.item} {hottest.price}
                <div>____</div>
            </div>
        )

    }
}

export default Landing