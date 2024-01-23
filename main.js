/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
Variables
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

var nan = 'N/A';
var debugmode = true;
var useless_var = 0;
var holidays = [['a',['halloween','Oct * ****'],['Thanksgiving','Nov * ****'],['Christmas','Dec * ****']],['b'['Technoblade','Jun 1 ****'],['summer','month * ****'],['virus','* * **20']]];
var holiday_selector = 'auto';
var crashpage = 0;
var year = getFullYear;
var month = getMonth;
var daym = getDate;
var dayw = getDay;
var hour24 = getHours;
var min = getMinutes;
var sec = getSeconds;
 
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
functions
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

function random(min=0, max=10) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function placeholdertext(l=5){
	if(l.toLowerCase()===l.toUpperCase()){
		if (l <= 999999){
    	let lorem = ["Lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit","sed","do","eiusmod","tempor","incididunt","ut","labore","et","dolore","magna","aliqua","Felis","eget","velit","aliquet","sagittis","id","Donec","massa","sapien","faucibus","molestie","ac","feugiat","lectus","Risus","commodo","viverra","maecenas","accumsan","lacus","vel","Facilisis","odio","morbi","quis","Neque","volutpat","tincidunt","vitae","semper","nulla","Mauris","rhoncus","aenean","scelerisque","pellentesque","pulvinar","Hac","habitasse","platea","dictumst","vestibulum","est","consequat","nam","libero","justo","laoreet","ullamcorper","Placerat","in","egestas","erat","imperdiet","euismod","nisi","porta","nibh","tortor","proin","ornare","quam","orci","eu","sem","pharetra","diam","praesent","Pretium","leo","purus","lacinia","at","vulputate","nec","Senectus","netus","malesuada","fames","turpis","aliquam","ultricies","mi","ultrices","dui","Ante","cursus","mattis","a","non","enim","elementum","nisl","condimentum","Lobortis","Cras","auctor","tempus","gravida","fermentum","sollicitudin","phasellus","tellus","suspendisse","blandit","Nunc","interdum","varius","porttitor","dignissim","nullam","etiam","dictum","Tristique","facilisi","bibendum","convallis","augue","sodales","quisque","venenatis","urna","hendrerit","Congue","vehicula","integer","arcu","duis","Magnis","dis","parturient","montes","nascetur","ridiculus","mus","rutrum","Posuere","metus","Fringilla","eleifend","eros","luctus","cum","Suscipit","curabitur","dapibus","Ligula","iaculis","habitant","Penatibus","Mollis","fusce","potenti","Vivamus","sociis","natoque","Class","aptent","taciti","sociosqu","ad","litora","torquent","per","conubia","nostra","inceptos","himenaeos","primis","cubilia","Curae","pede","consectetuer"];
    	var text = "";
    	for (let i = 0; i < l; i++) {
				if (i<=4){
    	  	text = text + ' ' + lorem[i]
   	  	}else{
					text = text + ' ' + lorem[random(0,lorem.length-1)];
   	  	}
   	 }
  	}else{
  	  text = "value too large"
  	}
	}else{
  	text = "value not a number"
	}
	return text
}

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}

debugactiveator = () =>{
  document.getElementById('debugtoggler').classList.remove("disable");
  document.getElementById('debugtoggler').classList.add("show");
}

function reloadpage(){
  location.reload()
};

toggledebugmode = () => {
  debugmode = !debugmode
}

function chromeurls(){
  window.location.replace("chrome://chrome-urls");
}

function spugeti(){
	/*I hate making this function*/
  let rating = random(0, 5)
  alert(rating)
  let ratings = ['the chef did a very very bad job','the chef did a very bad job','the chef did a bad job','the chef did decent job','the chef did a good job','the chef did a amazing job']
  let failrates = ["0, 3","1, 4","2, 5","3, 5","4, 5","5, 5"]
  let failrate = failrates[rating]
  alert(random(failrate))
  for (let i = random(failrates[rating]); i <= 4; i++) {
    alert('preping spugeti')
    alert('fail trying again')
  }
  alert('preping spugeti')
  alert('done')
  for (let i = random(failrates[rating]); i < 5; i++) {
    alert('cooking spugeti')
    alert('fail trying again')
  }
  alert('cooking spugeti')
  alert('done')
  for (let i = random(failrates[rating]); i < 5; i++) {
    alert('serving spugeti')
    alert('fail trying again')
  }
  alert('serving spugeti')
  alert('done')
  alert("the spugeti got "+rating+" stars, "+ratings[rating])
}

blank = () => {
  useless_var = useless_var+1
}

function cookieclicker() {
  let rnd = Math.round(Math.random()*10000)
  Alert("Loading 'Cookie Clicker'");
  if (rnd === 0) {
    Alert("WARNING UNKNOWN ERROR FOUND LOADING UNKNOWN FILE");
    parent.location.href = "UNKNOWN/index.html";
  }
  else{
    Alert("'Cookie Clicker' Loaded Now Running");
    parent.location.href = "Cookie_Clicker/index.html";
  }
}

function playsound(sounda){
  let soundb = new Audio(sounda);
  soundb.play();
}

function darkmodetoggle() {
  let element = document.body;
	element.classList.toggle("dark-mode");
}

/* this works but you can make more than 1 context menu(right click menu) and it acts weard when you scroll
oncontextmenu = (e) => {
  e.preventDefault()
  let menu = document.createElement("div")
  menu.id = "ctxmenu"
  menu.style = `top:${e.pageY-10}px;left:${e.pageX-40}px`
  menu.onmouseleave = () => ctxmenu.outerHTML = ''
  menu.innerHTML = "<p>Option1</p><p>Option2</p><p>Option3</p><p>Option4</p><p onclick='alert(`Thank you!`)'>Upvote</p>"
  document.body.appendChild(menu)
}
*/

oncontextmenu = (e) => {
  const ctxmenudiv = document.getElementById('ctxmenu');
  e.preventDefault();
  if (ctxmenudiv === null) {
    const menu = document.createElement("div");
    menu.id = "ctxmenu";
		menu.style = `top:${e.clientY}px;left:${e.clientX}px`;
    menu.onmouseleave = () => ctxmenu.outerHTML = ''
    menu.innerHTML = "<b onclick='history.forward()'>forward</b><b onclick='history.back()'>back</b><b onclick='location.reload()'>reload</b><br><b onclick=''>Save as(does not work)</b><b onclick='print()'>Print</b>";
    if(debugmode==true){
      menu.innerHTML = "<t>Default Context Menu Options:</t>" + menu.innerHTML + "<t>Debug Options:</t><b onclick='parent.location.href = `UNKNOWN/index.html`'>Test Unknown Secret Game</b><b onclick='parent.location.href = `Cookie_Clicker/index.html`'>Play Cookie Clicker</b><b onclick='alert(placeholdertext(prompt(`amount of words`)))'>Test Lorum ipsum genarator</b><b onclick='spugeti()'>spugeti</b><b onclick='Cconfurm('test')'>test alert</b>"
    }
    document.body.appendChild(menu);
  }
	
}

function Cconfurm(message) {
	let confermed = null
  const Alert = document.getElementById('alert');
  if (Alert === null) {
    const alertmenu = document.createElement("div");
    alertmenu.id = "alert";
    alertmenu.innerHTML = "<center><t>" + message + "</t><br><b onclick='confermed=false'>cansel</b></center><b onclick='confermed=true'>ok</b></center>";
    document.body.appendChild(alertmenu);
			while (confermed===null){}
			alertmenu.outerHTML = ``; 
			retern(confermed)
  }
}

function holiday(){
	let topleft = document.getElementById('topleft');
	let topright = document.getElementById('topright');
	let bottomleft = document.getElementById('bottomleft');
	let bottomright = document.getElementById('bottomright');
	topleft.innerHTML = ''
	topright.innerHTML = ''
	bottomleft.innerHTML = ''
	bottomright.innerHTML = ''
	if (holiday_selector=='auto'){
		var date = month+" "+daym+" "+year;
		
	}
	else{
		if(holiday_selector[0]=='a'){
			if(holiday_selector=='a1'){
				
			}else if(holiday_selector=='a2'){
				
			}else if(holiday_selector=='a3'){
				
			}else if(holiday_selector=='a4'){
				
			}else if(holiday_selector=='a5'){
				
			}else if(holiday_selector=='a6'){
				
			}else if(holiday_selector=='a7'){
				
			}
		}else{
			if(holiday_selector=='b1'){
				bottomleft.classList.add("ui");
				bottomleft.style = `left: 2.5% !important;`;
				bottomleft.innerHTML = '<center><h1>RIP<br>Technoblade<br>1999-2022</h1><img src="images/holladay_stuff/technoblade.png" alt="Technoblade" style="width:200px;"><h2>Technoblade will truly never die<br>in the hearts of his fans</h2></center>'
			}else if(holiday_selector=='b2'){
				
			}else if(holiday_selector=='b3'){
				
			}else if(holiday_selector=='b4'){
				
			}else if(holiday_selector=='b5'){
				
			}else if(holiday_selector=='b6'){
				
			}else if(holiday_selector=='b7'){
				
			}
		}
	}
}

function TICK(){
	let topleft = document.getElementById('topleft');
	let topright = document.getElementById('topright');
	let bottomleft = document.getElementById('bottomleft');
	let bottomright = document.getElementById('bottomright');
	holiday()
	if (crashpage==1){
		crashpage=0
		crash()
	}
  const date = new Date();
	if(debugmode){
		document.getElementById('debuginfo').style = `right: 0% !important;`;
		document.getElementById('debuginfo').innerHTML = "Year: "+year+'<br>'+"Month: "+month+'<br>'+"Day(month): "+daym+'<br>'+"Day(week): "+dayw+'<br>'+"Hour(24): "+hour24+'<br>'+"Minute: "+min+'<br>'+"Second: "+sec+'<br>'+date.toString();
	}else{
	document.getElementById('debuginfo').style = ``;
	}
}

function DRAW(){

}

function STARTUP(){
	DRAW();
	setInterval(TICK, 0);
	setInterval(TIME, 0);
}

function crash(){
	setInterval(crash, 50)
}

function ccrash(){
	if(confirm("PLEASE DO NOT I BEG YOU I WILL CRASH")){
		crash()
	}
}

function TIME() {
  const date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString()+'<br>'+date.toLocaleDateString();
	year = date.getFullYear();
	const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	const d1 = new Date();
	let themonth = months[d1.getMonth()];
	month = themonth;
	daym = date.getDate();
	const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	const d2 = new Date();
	let day = weekday[d2.getDay()];
	dayw = day;
	hour24 = date.getHours();
	min = date.getMinutes();
	sec = date.getSeconds();
}

/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
startup code
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

console.log('hello there please exit the console')
console.log('if you are going to check the code please dont it is just spugeti')
console.log('i am not even joking i have a spugeti function for some ression')
console.log('and yes i do know there is a lotof spelling mistakes')

toggledebugmode()

blank()

window.scrollTo(0,0)