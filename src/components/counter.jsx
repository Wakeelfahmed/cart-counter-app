import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value : this.props.counter.value
    };

    render() { 
        return (
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                <button 
                onClick={() => this.props.onIncrement(this.props.counter)}  
                className='btn btn-secondary btn-sm'>
                    +
                </button>
                <button onClick={() => this.props.onDecrement(this.props.counter)}
                className={this.disableDecrement()}>
                    -
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}
                 className="btn btn-danger btn-sm">
                    Delete
                </button>
                </div>
                
            </div>
            );
    }

    disableDecrement(){
        let classes = "btn btn-secondary btn-sm m-2 ";
        classes += this.props.counter.value === 0 ? "disabled" : "";
        return classes;
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning " : "primary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.props.counter;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;