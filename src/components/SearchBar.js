import React from 'react';
import {Paper,TextField} from '@material-ui/core';
export default class SearchBar extends React.Component{
    state={
        searchItem:'',
    }

    handleChange=(event)=>{
        this.setState({searchItem:event.target.value})
        //console.log(this.state.searchItem);
    }

    handleSubmit=(e)=>{
        const {searchItem}=this.state;
        const {onFormSubmit}=this.props;

        onFormSubmit(searchItem);
        
        e.preventDefault();
    }

    render(){
        return(
            <Paper elevation={6} style={{padding:'20px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}/>
                </form>
            </Paper>
        )
    }
}