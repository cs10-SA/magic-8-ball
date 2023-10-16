// 8 ball by Salwa
// btn event listener
document.getElementById("btn").addEventListener("click", btnClicked);
let outputE1 = document.getElementById("output");

//  Btn click function
function btnClicked() {
  let msg = document.getElementById("search-in").value.toLowerCase();
  console.log(msg);
  if (msg === "does magic 8 ball even work?") {
    outputE1.innerHTML = `<p>How DARE you doubt me! >:0 </p>`;
  } else if (msg === "bobo") {
    outputE1.innerHTML = `<p>💩</p>`;
  } else if (msg === "hi") {
    outputE1.innerHTML = `<p>hello stinky!</p>`;
  } else {
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.2) {
      outputE1.innerHTML = `<p> Without a Doubt </p>`;
    } else if (randNum < 0.4) {
      outputE1.innerHTML = `<p> As I see it...Yes  </p>`;
    } else if (randNum < 0.6) {
      outputE1.innerHTML = `<p> Concentrate and ask again  </p>`;
    } else if (randNum < 0.8) {
      outputE1.innerHTML = `<p> Don't count on it</p>`;
    } else {
      outputE1.innerHTML = `<p> Outlook not so good... </p>`;
    }
  }
}
