import React, { Component } from "react";
import Counter from "./counter";
import Form from "./form";

class Counters extends Component {
  render() {
    const { onReset, onDelete, counters, onIncrement, onDecreese} = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecreese={onDecreese}
            counter={counter}
          />
        ))}
        {/* <Form /> */}
      </div>
    );
  }
}

export default Counters;
