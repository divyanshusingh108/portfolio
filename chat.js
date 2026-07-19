import { db } from "./firebase.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js"; 
const toggle = document.getElementById("chat-toggle");
const chatBox = document.getElementById("chat-box");
const closeBtn = document.getElementById("close-chat");
const sendBtn = document.getElementById("send-btn");
const input = document.getElementById("user-input");
const messages = document.getElementById("chat-messages");

toggle.onclick = () => {
    chatBox.classList.remove("hidden");
};

closeBtn.onclick = () => {
    chatBox.classList.add("hidden");
};

sendBtn.onclick = sendMessage;

input.addEventListener("keypress",(e)=>{
    if(e.key==="Enter") sendMessage();
});

async function sendMessage(){

    let text=input.value.trim();

    if(text==="") return;

    messages.innerHTML+=`
    <div class="user-message">${text}</div>
    `;

    input.value="";



    messages.innerHTML+=`
    <div class="bot-message">Typing...</div>
    `;

    messages.scrollTop=messages.scrollHeight;

    setTimeout(async () => {
  const bots = document.querySelectorAll(".bot-message");

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: text
      })
    });

    const data = await response.json();

    bots[bots.length - 1].innerHTML = "🤖 " + data.reply;

  } catch (error) {
    bots[bots.length - 1].innerHTML = "❌ AI server error.";
    console.error(error);
  }

  messages.scrollTop = messages.scrollHeight;
}, 1000);

 }