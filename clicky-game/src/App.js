import React, { Component } from 'react';
import Petcards from "./components/petcards";
import Wrapper from "./components/wrapper";
import Title from "./components/title"
import pets from "./components/pets.json";
import './App.css';


let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "Memorize the pictures! Click on an image to earn points, but don't click on any of them more than once!";

class App extends Component {
    
    state = {
        pets,
        correctGuesses,
        bestScore,
        clickMessage
    };

    setClicked = id => {
        const pets = this.state.pets;
    
        const clickedpet = pets.filter(pets => pets.id === id);

    //the img are set to false (not clicked)
        if (clickedpet[0].clicked){

            console.log ("Correct Guesses: " + correctGuesses);
            console.log ("Best Score: " + bestScore);

            correctGuesses = 0;
            clickMessage = "You lose! Now you have to start over!"

            for (let i = 0 ; i < pets.length ; i++){
                pets[i].clicked = false;
            }

            this.setState({clickMessage});
            this.setState({ correctGuesses });
            this.setState({pets});

//in order to win img must be clicked and set to true

} else if (correctGuesses < 10) {

    clickedpet[0].clicked = true;


    correctGuesses++;
    
    clickMessage = "Can you win?! Keep guessing!";

    if (correctGuesses > bestScore){
        bestScore = correctGuesses;
        this.setState({ bestScore });
    }
    pets.sort(function(a, b){return 0.5 - Math.random()});
    this.setState({ pets });
    this.setState({correctGuesses});
    this.setState({clickMessage});

}
};
render() {
    return (
        <Wrapper>
            <Title>The game where you must memorize my cute fluff balls. The clicky game - pet edition!</Title>
    
            
                clickMessage: {this.state.clickMessage}
                Correct Guesses: {this.state.correctGuesses} 
                Best Score: {this.state.bestScore} 
            

            {this.state.matches.map(pets => (
                <Petcards 
                    setClicked={this.setClicked}
                    id={pets.id}
                    key={pets.id}
                    image={pets.image}
                />
            ))}
        </Wrapper>
    );
}
}




export default App;
