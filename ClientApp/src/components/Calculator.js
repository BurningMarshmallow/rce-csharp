import React, { Component } from "react";

export class Calculator extends Component {
    static displayName = Calculator.name;

    constructor(props) {
        super(props);
        this.state = { expression: "", answer: "" };
    }

    render() {
        return (
            <div>
                <h1>Calculator</h1>
                <p>Calculate your expression!</p>
                <div className="form-outline">
                    <input
                        type="text"
                        value={this.state.expression}
                        name="expression"
                        className="form-control"
                        id="form"
                        onChange={(evt) => this.updateExpression(evt)}
                    />
                    <p>
                        <button
                            onClick={() => this.calculate()}
                            className="btn btn-primary mt-2"
                        >
                            Calculate
                        </button>
                    </p>
                </div>
                <div>{this.state.answer}</div>
            </div>
        );
    }

    async calculate() {
        this.setState({ loading: true });
        const expression = { expression: this.state.expression };
        const response = await fetch("calculator", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(expression),
        });
        const answer = await response.text();
        this.setState({ answer: answer });
    }

    updateExpression(evt) {
        this.setState({
            expression: evt.target.value,
        });
    }
}
