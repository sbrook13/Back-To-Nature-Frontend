import React, { Component } from 'react'
import TreeCard from './TreeCard'

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

    showSelectedTree = ({selectedTree}) => {
        return <img className="tree-image" src={this.state.selectedTree.image} alt="" /> 
    }

    render(){
        return (
            <div className="tree-box">
            <h2>Give Back to Nature</h2>
                <div>
                    if(this.state.selectedTree) ? this.showSelectedTree() : <img src="https://csfs.colostate.edu/media/sites/22/2016/04/pinon-tree.jpg" alt=""/> 
                    <h3>Donate a Tree to Fight Deforestation!</h3>
                    <select onChange={this.handleChange}>
                        {this.listTreeNames()}
                    </select>
                    <button className="submit-button">Submit</button>
                </div>
            </div>
                )
            }
        }
        
        // {this.showTreeCards()}
