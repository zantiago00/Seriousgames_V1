import { GameState } from '../gameState.js';
const ENDPOINT =
  'https://script.google.com/macros/s/AKfycby-b4Jn17hr1W_V3jcvkhM-fp7i2kHHvO7f8jCIOMySZQ3BJWQUJYP0Yhh4BDcTRPhQ/exec';
export async function sendScore(gameKey, score){
  const { name, email } = GameState.getUser();
  if(!name || !email) return;
  await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'score', name, email, game: gameKey, score })
  });
}
