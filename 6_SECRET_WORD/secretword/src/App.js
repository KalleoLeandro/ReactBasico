//CSS
import './App.css';

//React
import {useCallback, useEffect, useState} from 'react';

//data
import { wordsList } from './data/words';

//Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: 'start' },
  {id: 2, name: 'game' },
  {id: 3, name: 'end' },
];

const guessesQty = 10;

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]); 
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordAndPickCategory = useCallback(()=>{
    //pegar uma categoria
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    
    //pegar uma palavra
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return {word, category};
  }, [words]);

  // Começa o jogo
  const startGame = useCallback(()=>{
    //limpar as letras
    clearLetterStates();

    //Pegar palavra e pegar categoria
    const {word, category} = pickWordAndPickCategory();    

    //criar um array de letras
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letra) => letra.toLowerCase())
    
    //Setar os estados
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  }, [pickWordAndPickCategory]);

  //processar a letra
  const verifyLetter = (letter)=>{
    const normalizedLetter = letter.toLowerCase()

    //checar se a letra já foi utilizada
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }

    //colocar no array a letra que o usuário digitou

    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) =>[
        ...actualGuessedLetters, normalizedLetter
      ])
      setScore(score + 10);
    } else {
      setWrongLetters((actualWrongLetters) =>[
        ...actualWrongLetters, normalizedLetter
    ])
    }

    setGuesses((actualGuesses) => actualGuesses - 1);  
  }

  const clearLetterStates = ()=>{
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  //checar se acabou as tentativas
  useEffect(()=>{
    if(guesses <= 0){
      //Apagar todos os dados e declarar fim de jogo
      clearLetterStates();
      //Fim de jogo
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  
  //checa se ganhou
  useEffect(()=>{
    const uniqueLetters = [...new Set(letters)]

    if(guessedLetters.length === uniqueLetters.length){
      //Adicionar score
      setScore((acutalScore)=> acutalScore + 100);
      startGame();      
    }
  },[guessedLetters, letters, startGame]);
  
  //reinicia jogo
  const retry = ()=>{
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);
  }


  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && (
        <Game 
        verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />
      
      )}
      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  );
}

export default App;
