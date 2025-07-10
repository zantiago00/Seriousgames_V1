export function renderNav(prefix='..'){
  const nav=document.createElement('nav');
  nav.className='bottom-nav';
  nav.innerHTML=`
    <a href="${prefix}/register.html" aria-label="Registro">🤚</a>
    <a href="${prefix}/index.html" aria-label="Juegos">🎮</a>
    <a href="${prefix}/ranking.html" aria-label="Ranking">📊</a>
    <button id="dark-toggle" aria-label="Tema oscuro" class="btn">🌙</button>
  `;
  document.body.appendChild(nav);
}

