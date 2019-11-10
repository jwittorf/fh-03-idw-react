import React from 'react';
import axios from 'axios';
import Result from "./Result";
import {observable} from "mobx";
import {observer} from "mobx-react";


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
            results: {},
        }
    }

    getAPI = () => {
        axios.get('https://randomuser.me/api/')
            .then((response) => {
                this.setState(prevState => {
                    let results = Object.assign({}, prevState.results);
                    let length = Object.keys(this.state.results).length;
                    console.log("length: "+length);
                    console.log("prevState"); console.log(results);
                    Object.keys(response.data.results).forEach((key) => {results[key+length] = response.data.results[key]; console.log(key);});
                    console.log("newState"); console.log(results);
                    return { results };
                });
                //this.setState({recipes: this.state.recipes, results: [...this.state.results, response.data.results]});
            })
    };

    componentDidMount() {
        this.getAPI();
    }

    render(){

        var timerData = observable ({
            secondsPassed: 0
        });

        setInterval(() => {
            timerData.secondsPassed++;
        }, 1000);

        const Timer = observer(({ timerData }) =>
            <span>Seconds passed: {timerData.secondsPassed}</span>);

        return (
            <div>
                <Timer timerData={timerData}/>
                <h1>
                    hello, parent banana is defeated.
                </h1>
                <button onClick={this.getAPI} value="api make person ahhh">api make person ahhh</button>
                <ul>
                    {Object.keys(this.state.results).map(key => <li>
                        <Result id={"result-"+key.toString()} data={this.state.results[key]}>{console.log("key: "+key)}</Result>
                    </li>)}
                </ul>
                <h2>
                    recapi
                </h2>
                <p>
                    The first recipe is {this.state.recipes[0].recipename} and has {this.state.recipes[0].calories} calories.
                </p>
                <PatientChild recipes={this.state.recipes} />
            </div>
        )
    }
}


//@observer
class API extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            results : {
                name: {
                    title: '',
                    first: '',
                    last: ''
                }
            }
        }
    }

    render(){
        return(
            <div>

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

