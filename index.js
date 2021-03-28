let ar=[1,5,4,3,8];
let row=document.createElement("div");
for(let i=0; i<ar.length;i++){
  let el=document.createElement("div");
  el.style.height=ar[i]+"rem";
  el.classList.add("content");
  row.appendChild(el);
}

ar.sort();
console.log(ar);

let row1=document.createElement("div");
for(let i=0; i<ar.length;i++){
  let el=document.createElement("div");
  el.style.height=ar[i]+"rem";
  el.classList.add("content");
  row1.appendChild(el);
}

let body=document.querySelector('body');
body.appendChild(row);
body.appendChild(row1);

