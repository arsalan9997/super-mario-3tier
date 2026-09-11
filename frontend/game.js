const c=document.getElementById("game"),ctx=c.getContext("2d");
let x=80,y=430,vy=0,score=0,keys={},running=true;
const ground=470, coins=[{x:300,y:400},{x:500,y:330},{x:700,y:400},{x:830,y:280}];
const enemies=[{x:610,y:442,v:1.4},{x:760,y:442,v:-1.2}];
addEventListener("keydown",e=>{keys[e.key]=true;if(["ArrowUp"," "].includes(e.key)&&y>=430)vy=-12});
addEventListener("keyup",e=>keys[e.key]=false);
function api(path,opt){return fetch("/api"+path,opt)}
function draw(){
 ctx.clearRect(0,0,c.width,c.height);
 ctx.fillStyle="#87ceeb";ctx.fillRect(0,0,c.width,c.height);
 ctx.fillStyle="#7bc96f";for(let i=0;i<12;i++)ctx.fillRect(i*90,ground+5,70,65);
 ctx.fillStyle="#6b4328";ctx.fillRect(0,ground,c.width,70);
 ctx.fillStyle="#8b5a2b";[[220,410,120,20],[420,340,150,20],[650,410,120,20],[790,290,120,20]].forEach(a=>ctx.fillRect(...a));
 ctx.fillStyle="#ffd21f";coins.forEach(o=>{ctx.beginPath();ctx.arc(o.x,o.y,10,0,7);ctx.fill()});
 ctx.fillStyle="#e33";enemies.forEach(o=>ctx.fillRect(o.x,o.y,28,28));
 ctx.fillStyle="#2455d6";ctx.fillRect(x,y,30,40);ctx.fillStyle="#ffd1a4";ctx.fillRect(x+7,y-12,17,14);
}
function update(){
 if(keys.ArrowLeft)x-=4;if(keys.ArrowRight)x+=4;x=Math.max(0,Math.min(c.width-30,x));
 vy+=.6;y+=vy;if(y>430){y=430;vy=0}
 coins.forEach((o,i)=>{if(Math.abs(x+15-o.x)<25&&Math.abs(y+15-o.y)<30){coins.splice(i,1);score+=10;document.getElementById("score").textContent=score}});
 enemies.forEach(o=>{o.x+=o.v;if(o.x<0||o.x>930)o.v*=-1;if(Math.abs(x-o.x)<25&&Math.abs(y-o.y)<35){score=Math.max(0,score-5);x=80}});
 draw();if(running)requestAnimationFrame(update);
}
async function saveScore(){let name=document.getElementById("player").value||"Player1";await api("/scores",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({playerName:name,score})});alert("Score saved!")}
async function showBoard(){let r=await api("/scores"),d=await r.json();document.getElementById("board").innerHTML="<h3>Leaderboard</h3>"+d.map((s,i)=>`${i+1}. ${s.playerName} — ${s.score}`).join("<br>")}
update();
