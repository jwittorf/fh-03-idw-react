import React from 'react';

export default class Patient extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            recipes: {
                0: {
                    recipename: "soup",
                    calories: 14,
                },
                1: {
                    recipename: "marshmallow",
                    calories: 20,
                },
                2: {
                    recipename: "arsenic",
                    calories: -2750,
                },
            },
        }
    }
    render(){
        return (
            <div>
                <h1>
                    hello, parent banana is defeated.
                </h1>
                <p>
                    The first recipe is {this.state.recipes[0].recipename} and has {this.state.recipes[0].calories} calories.
                </p>
                <PatientChild recipes={this.state.recipes} />
            </div>
        )
    }
}
class PatientChild extends React.Component {
    constructor (props){
        super(props);
    }
    render(){
        let recipes = this.props.recipes;
        return (
            <div>
                <h2>
                    hello, i am child. fear me
                </h2>
                <p>
                    The menu has the following recipes.
                    <ul>
                        {
                            Object.keys(recipes).map((key) =>
                                <li key={key}>
                                    {key}: {recipes[key].recipename} has {recipes[key].calories} calories
                                </li>
                            )
                        }
                    </ul>
                </p>
            </div>
        )
    }
}