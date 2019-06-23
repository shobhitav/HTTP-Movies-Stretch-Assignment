import React from 'react';
import axios from 'axios';

const defaultState = { 
    title: "" ,
    director: "" ,
    metascore: "" ,
    stars: []
};

class AddMovieForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = defaultState;
    }

    inputChangeHandler = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    formSubmitHandler = event => {
        event.preventDefault();
        let newMovie = {
            title:this.state.title ,
            director:this.state.director,
            metascore: this.state.metascore,
            stars:['a','b'] 
        };
        console.log(newMovie);
        
        axios.post ("http://localhost:5000/api/movies", newMovie)
        .then(response => console.log(response.data) )
        .catch(err => console.log(err));

        this.setState(defaultState);
    }

    render() {
        return (
            <div>
                <h2>Add New Item</h2>
                <form  onSubmit={this.formSubmitHandler}>
                    <input
                        name= "title"
                        placeholder= "moviename"
                        value= {this.state.title}
                        onChange={this.inputChangeHandler}
                    />
                    <input
                        name= "director"
                        placeholder= "director"
                        value= {this.state.director}
                        onChange={this.inputChangeHandler}
                    />
                    <input
                        name= "metascore"
                        placeholder= "metascore"
                        value= {this.state.metascore}
                        onChange={this.inputChangeHandler}
                    />
                    <input
                        name= "stars"
                        placeholder= "stars"
                        value= {this.state.stars}
                        onChange={this.inputChangeHandler}
                    />
                    <button type="submit" > Add Movie </button>
                </form >
            </div>
        );
    }
}

export default AddMovieForm;




