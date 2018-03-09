import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }
    //Persisting Data with Firebase
    componentDidMount() {
        const { params } = this.props.match;
        //for persisting Order Data with LocalStorage
        //first reinstate our LocalStorage
        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }

        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }
    //Persisting Data with LocalStorage
    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }


    addFish = fish => {
        //1. take a copy of the existing state
        const fishes = { ...this.state.fishes };
        //2. add our new fish to that fishes variables
        fishes[`fish${Date.now()}`] = fish;
        //3. set the new fishes object to the new state
        this.setState({
            fishes: fishes
        });
    };

    updateFish = (key, updateFish) => {
        //1. take a copy of the current state
        const fishes = { ...this.state.fishes };
        //2. update that state
        fishes[key] = updateFish;
        //3. set that state
        this.setState({ fishes });
    }

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        });
    };
    addToOrder = (key) => {
        // 1. take a copy of state
        const order = { ...this.state.order };
        // 2. either add to the order, or update the number in our order
        order[key] = order[key] + 1 || 1;
        // 3. call setState to update our state object
        this.setState({ order: order }); //in ES6 it is possible to write only this.setState({order});
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="FRESH SEAFOOD MARKET" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key =>(
                        <Fish
                        key={key}
                        index={key}
                        details={this.state.fishes[key]}
                        addToOrder={this.addToOrder}
                        />
                        ))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory
                    addFish={this.addFish}
                    updateFish={this.updateFish}
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes}
                />
            </div>
        )
    }
}

export default App;