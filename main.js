import "./src/styles/settings/colors.css";
import "./src/styles/generics/reset.css";
import "./src/styles/elements/base.css";
import "./src/styles/tools/NessBorder/style.css";
import BoardGame from "./src/objects/BoardGame";



const $root = document.querySelector('#root');
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML('beforeend', $htmlBoardGame);

$root.onclick = (param) => {
    if(param.srcElement.className === 'card-game' || param.srcElement.className === 'icon') {
        console.log('clicking card...');
    }
}