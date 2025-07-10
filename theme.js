export function toggleDarkMode(){
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('dark', document.body.classList.contains('dark-mode'));
}
export function loadDarkMode(){
  if(localStorage.getItem('dark')==='true'){
    document.body.classList.add('dark-mode');
  }
}
