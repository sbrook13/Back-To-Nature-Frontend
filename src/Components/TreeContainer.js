import React, { Component } from 'react'
import TreeCard from './TreeCard'
import DonateTreeForm from './DonateTreeForm'

export default class TreeContainer extends Component {

    state = {
        trees: [],
        selectedTree: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/trees')
            .then(response => response.json())
            .then(data => this.setState({trees: data}))
    }

    showTreeCards = () => {
        return this.state.trees.map(tree => {
            return <TreeCard key={tree.id} tree={tree}/>
        })
    }
    
    
    handleChange = (event) => {
        this.setState({selectedTree: event.target.value})
        console.log(event.target.value)
    }

    listTreeNames = () => {
        return this.state.trees.map(tree => {
            return <option value="image">{tree.name}</option>
        })
    }

    render(){
        return (
            <div className="tree-box">
                <h2 className="tree-header">Give Back to Nature</h2>
                <img className="tree-image" src="https://i.imgur.com/MogR0ee.jpg" alt=""/>
                <h3 className="call-to-action">Donate a Tree to Fight Deforestation!</h3>
                <form className="select-tree-form">
                    <select onChange={this.handleChange}>
                        {this.listTreeNames()}
                    </select>
                    <button className="submit-button">Select Tree</button>
                </form>
                <DonateTreeForm />
            </div>
                )
            }
        }
        
