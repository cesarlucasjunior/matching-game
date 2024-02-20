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
//Link para o curso - https://www.youtube.com/playlist?list=PLirko8T4cEmzWZVn_ZKQbfDOuCnSZJ4va
export default BoardGame;