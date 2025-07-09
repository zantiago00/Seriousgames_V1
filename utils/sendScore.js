import { GameState } from '../gameState.js';
const ENDPOINT = 'https://script.google.com/macros/s/AKfycbxWb1aaP8S_nGKPUwiLexT_3Z2Zr66l0k--G0DK7UKyO_05-FsmQCKrO3hGHOcK-L3F/exec';
export async function sendScore(gameKey, score){
  const { name, email } = GameState.getUser();
  if(!name || !email) return;
  await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'score', name, email, game: gameKey, score })
  });
}
