import "./src/styles/settings/colors.css";
import "./src/styles/generics/reset.css";
import "./src/styles/elements/base.css";
import "./src/styles/tools/NessBorder/style.css";
import BoardGame from "./src/objects/BoardGame";
import PlayerName from "./src/components/PlayerName";
import ScoreBoard from "./src/components/ScoreBoard";



const $root = document.querySelector('#root');
const $htmlBoardGame = BoardGame(6);
const $htmlPlayerName = PlayerName('PlayerOne');

$root.insertAdjacentHTML('beforeend', 
    `
    ${ScoreBoard()}
    ${BoardGame(6)}
    `);

$root.onclick = (param) => {
    if(param.srcElement.className === 'card-game' || param.srcElement.className === 'icon') {
        console.log('clicking card...');
    }
}