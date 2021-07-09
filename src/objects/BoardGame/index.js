import CardGame from '../../components/CardGame'

function BoardGame(amountOfCards) {
    const $htmlCardGame = CardGame();
    const $htmlBoardGame = $htmlCardGame.repeat(amountOfCards);

    return `${$htmlBoardGame}`;
}

export default BoardGame;