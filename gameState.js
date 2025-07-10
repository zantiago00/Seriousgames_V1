const PREFIX = 'sg_v1_';
export const GameState = {
  /**
   * Guarda los datos del usuario.
   * @param {{name:string,email:string,nickname:string}} u
   */
  setUser(u) { localStorage.setItem(PREFIX + 'user', JSON.stringify(u)); },
  /** Obtiene el objeto completo del usuario. */
  getUser() { return JSON.parse(localStorage.getItem(PREFIX + 'user') || 'null'); },
  saveScore(key, score) { localStorage.setItem(PREFIX + key, score); },
  getScore(key) { return Number(localStorage.getItem(PREFIX + key) || 0); },
  getTotalScore() { return ['definiciones','completar','unir','ahorcado']
     .reduce((s,k)=>s+GameState.getScore(k),0); },
  unlock(key) { localStorage.setItem(PREFIX + 'unlock_'+key, true); },
  isUnlocked(key) { return localStorage.getItem(PREFIX + 'unlock_'+key) === 'true'; }
};
