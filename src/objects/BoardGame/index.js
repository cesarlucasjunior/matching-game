import CardGame from '../../components/CardGame'
import './style.css'

function BoardGame(amountOfCards) {
    const $htmlCardGame = CardGame();
    const $htmlBoardGame = $htmlCardGame.repeat(amountOfCards);

    return `
        <section class='board-game'>
            ${$htmlBoardGame}
        </section>`;
}

export default BoardGame;