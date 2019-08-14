import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Counter.css'
import { increment, decrement, add, subtract, storeResult, deleteResult } from '../../store/actions/index'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const ADD = 5
const SUB = 15

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label={`Add ${ADD}`} clicked={this.props.onAddCounter}  />
                <CounterControl label={`Subtract ${SUB}`} clicked={this.props.onSubCounter}  />
                <hr />
                <button className="StoreControl" onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storeResults.map(strResult => (
                        <li className="DeleteList" onClick={() => this.props.onDeleteResult(strResult.id)} key={strResult.id}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storeResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(decrement()),
        onAddCounter: () => dispatch(add(ADD)),
        onSubCounter: () => dispatch(subtract(SUB)),
        onStoreResult: (result) => dispatch(storeResult(result)),
        onDeleteResult: (id) => dispatch(deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);