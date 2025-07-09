export function shuffleArray(arr){
  for(let i=arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
}

export function qs(selector, parent=document){
  return parent.querySelector(selector);
}

export function qsa(selector, parent=document){
  return Array.from(parent.querySelectorAll(selector));
}
