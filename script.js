const messages = [
  "I'm sorry if I hurt you...",
  "When you ignore me, it really hurts my feelings...",
  "I never wanted to cause you pain...",
  "You make me feel so special, whether offline or online...",
  "It's hard for me when I can't see you...",
  "Every time we talk, my day becomes brighter...",
  "I just hope you understand how much I care about you...",
  "Ramisa, you're someone truly special to me, always..."
];

let messageIndex = 0;

const chatBox = document.getElementById("chat-box");
const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", () => {
  if (messageIndex < messages.length) {
    const newMessage = document.createElement("p");
    newMessage.classList.add("chat-text");
    newMessage.textContent = messages[messageIndex];
    chatBox.appendChild(newMessage);
    messageIndex++;
  } else {
    const finalMessage = document.createElement("p");
    finalMessage.classList.add("chat-text");
    finalMessage.textContent = "I hope you smile and forgive me, Ramisa... 💖";
    chatBox.appendChild(finalMessage);
    nextBtn.disabled = true;
  }
});
