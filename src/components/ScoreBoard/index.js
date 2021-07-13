import './style.css'
import PlayerName from "../PlayerName";

function ScoreBoard() {
    return `
    <header class='score-board'>
        ${PlayerName('PlayerOne')}
        ${PlayerName('PlayerTwo')}
    </header>
    `
}

export default ScoreBoard;