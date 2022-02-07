const inputData = document.getElementById("massage-input");
// console.log(inputData.value);
const sendButton = document.getElementById("send");
const miceButton = document.getElementById("mic");
const bodymsg = document.getElementById("section2");
const inputValueArray = [];
// const countlike=10;

sendButton.addEventListener("click", () => {
  pushMsgInArray();
});
sendButton.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    pushMsgInArray();
  }
});
miceButton.addEventListener("click", () => {
  // vanilla();
});
function pushMsgInArray() {
  const itm = `
    <div class="text">
        ${inputData.value}
    </div>
   <div class="button">
    <button><ion-icon name="thumbs-up"></ion-icon></button>
    <button><ion-icon name="trash"></ion-icon></button>
   </div>
`;
  inputValueArray.push(itm);
  showitem();
}
// function vanilla(){
//     const lisener;
// }
function showitem() {
  bodymsg.innerHTML = "";
  for (let i = 0; i < inputValueArray.length; i++) {
    const right = document.createElement("div");
    right.setAttribute("class", "right");
    right.setAttribute("id", "massage-show");
    // // const left= document.createElement("div");

    // const textdiv= document.createElement("div");
    // textdiv.setAttribute("class","text");
    // textdiv.innerHTML=inputValueArray[i];
    // const buttondiv = document.createElement("div");
    // buttondiv.setAttribute("class","button");
    // const btn1= document.createElement("button");
    // const btn2= document.createElement("button");
    // const likeicon= document.createElement("ion-icon");
    // likeicon.setAttribute("name","heart-dislike")
    // const delicon= document.createElement("ion-icon");
    // delicon.setAttribute("name","trash");
    // buttondiv.append(btn1);
    // buttondiv.append(btn2);
    // right.append(textdiv);
    // right.append(buttondiv);
    // bodymsg.append(left);
    right.innerHTML = inputValueArray[i];
    bodymsg.append(right);
  }
}
