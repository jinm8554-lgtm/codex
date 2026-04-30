const helloButton = document.getElementById("helloButton");
const helloMessage = document.getElementById("helloMessage");
const yearText = document.getElementById("year");

if (yearText) {
  yearText.textContent = new Date().getFullYear();
}

const greetingText = "你好，很高兴认识你！欢迎来到我的个人主页。";

if (helloButton && helloMessage) {
  helloButton.addEventListener("click", () => {
    helloMessage.textContent = greetingText;
  });
}
