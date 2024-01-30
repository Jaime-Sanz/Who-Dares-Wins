var lib;(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{closePanel:()=>s,openPanel:()=>a,showCreateScreen:()=>c,showToDoScreen:()=>m});let o=[],n=null;class d{constructor(e,t,o){this.name=e,this.description=t||"",this.priority=o||"",this.todos=[]}addTodo(e,t,o,n){const d={title:e,description:t,dueDate:o,priority:n};return this.todos.push(d),d}}function l(e){let t=document.getElementById("folderHolder"),d=(document.getElementById("goals-panel"),document.getElementById("todo-container-panel"),document.getElementById("folder-name-panel")),l=document.createElement("div"),s=document.createElement("span"),a=document.createElement("a"),u=document.createElement("a"),y=document.createElement("a"),p=document.createElement("div"),f=document.createElement("p");p.classList.add("hoverBubble"),p.appendChild(f),t.appendChild(p),f.textContent=e.description,a.textContent=e.name,s.textContent="folder",u.textContent="add",y.textContent="delete",a.href="#",u.href="#",y.href="#",u.classList.add("material-symbols-outlined"),s.classList.add("material-symbols-outlined"),y.classList.add("material-symbols-outlined"),"High"===e.priority?s.style.color="red":"Normal"===e.priority?s.style.color="green":s.style.color="blue",l.addEventListener("click",(function(){n=e,d.textContent=e.name,console.log("Selected Folder:",n),i(n)})),a.addEventListener("mouseover",(function(){p.style.visibility="visible"})),a.addEventListener("mouseout",(function(){p.style.visibility="hidden"})),y.addEventListener("click",(function(){if(1==confirm("Are You Sure You Want to Delete?")){const d=o.indexOf(e);-1!==d&&o.splice(d,1),t.removeChild(l),e.todos=[],i(n),n=null,r()}})),u.addEventListener("click",(function(){m()})),t.appendChild(l),l.appendChild(s),l.appendChild(a),l.appendChild(u),l.appendChild(y),o.push(e),o.length<1&&!n&&c()}function i(e){let t=document.getElementById("todo-container-panel");t.textContent="",e.todos.forEach((o=>{let n=document.createElement("div"),d=document.createElement("h3"),l=document.createElement("p"),i=document.createElement("p"),s=document.createElement("p"),a=document.createElement("button");n.classList.add("todo-container"),d.classList.add("todo-title"),l.classList.add("todo-description"),i.classList.add("todo-duedate"),s.classList.add("todo-prio"),a.classList.add("todo-erase"),"High"===o.priority?(n.style.backgroundColor="#fd5c63",a.classList.add("button-bg-red")):"Normal"===o.priority?(n.style.backgroundColor="#00FA9A",a.classList.add("button-bg-green")):(n.style.backgroundColor="#89CFF0",a.classList.add("button-bg-blue")),console.log(o.priority),d.textContent=o.title,l.textContent=o.description,i.textContent="Due Date: "+o.dueDate,a.textContent="Erase",a.onclick=function(){const d=e.todos.indexOf(o);-1!==d&&e.todos.splice(d,1),t.removeChild(n),r()},n.appendChild(d),n.appendChild(l),n.appendChild(i),n.appendChild(s),n.appendChild(a),t.appendChild(n)}))}function r(){const e={folders:o,selectedFolder:n},t=JSON.stringify(e);console.log("Saving data to JSON:",t),localStorage.setItem("yourAppData",t)}function s(){document.getElementById("folders-panel").style.width="0%",document.getElementById("goals-panel").style.width="100%",document.getElementById("three-lines").style.visibility="visible",document.getElementById("new-folder").style.visibility="hidden"}function a(){document.getElementById("new-folder").style.visibility="visible",document.getElementById("folders-panel").style.width="20%",document.getElementById("goals-panel").style.width="80%",document.getElementById("three-lines").style.visibility="hidden",document.getElementById("new-folder").style.visibility="visible"}function c(){let e=document.getElementById("create-form"),t=document.getElementById("create-folder");"visible"===e.style.visibility?(e.style.visibility="hidden",t.reset()):e.style.visibility="visible"}function m(){let e=document.getElementById("todo-form"),t=document.getElementById("create-todo");"visible"===e.style.visibility?(e.style.visibility="hidden",t.reset()):e.style.visibility="visible"}document.getElementById("create-folder").addEventListener("submit",(function(e){let t=document.getElementById("folder-name").value,o=document.getElementById("folder-description").value,n=document.getElementById("folderPrio").value,i=document.getElementById("create-folder");l(new d(t,o,n)),i.reset(),r(),e.preventDefault()})),document.getElementById("create-todo").addEventListener("submit",(function(e){let t=document.getElementById("todo-title").value,o=document.getElementById("todo-description").value,d=document.getElementById("todo-date").value,l=document.getElementById("todo-prio").value;n?(n.addTodo(t,o,d,l),i(n),r(),m()):console.error("No folder selected."),e.preventDefault()})),window.addEventListener("load",(function(){console.log("Loading data from JSON");const e=localStorage.getItem("yourAppData");if(console.log("Retrieved JSON string:",e),e)try{const t=JSON.parse(e),r=[];t.folders&&Array.isArray(t.folders)&&t.folders.forEach((e=>{const t=r.find((t=>t.name===e.name));if(t)t.description=e.description,t.priority=e.priority,t.todos=[],e.todos.forEach((e=>{t.addTodo(e.title,e.description,e.dueDate,e.priority)}));else{const t=new d(e.name,e.description,e.priority);e.todos.forEach((e=>{t.addTodo(e.title,e.description,e.dueDate,e.priority)})),r.push(t),l(t)}})),o=r,n=t.selectedFolder||null,n&&i(n)}catch(e){console.error("Error parsing JSON:",e)}})),window.addEventListener("beforeunload",(function(){r()})),lib=t})();