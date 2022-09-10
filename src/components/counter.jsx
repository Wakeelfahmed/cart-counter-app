import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 0
        ,tags: ['tag1','tag2','tag3']
    };
    // constructor(){
    //     super();
    //     this.handleIncreament = this.handleIncreament.bind(this);
    // }
    HandleIncrement = () => {
        this.setState({count: this.state.count + 1});
    }
    doHandleIncrement = () => {
        this.HandleIncrement({id:1});
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags</p>  
    }
    render() { 
        return (
            <div>
                {this.state.tags.length === 0 && 'Please create a new tags!'}
                {this.renderTags()}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                onClick={this.doHandleIncrement} 
                className='btn btn-secondary btn-sm'>Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}       
                </ul>
            </div>
            );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning " : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;