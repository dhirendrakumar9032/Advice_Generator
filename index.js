let advice;

const updateAdvice = () => {
  const adviceContent = document.getElementById("advice");
  adviceContent.textContent = `"${advice.slip.advice}"`;
  const adviceNo = document.getElementById("number");
  adviceNo.textContent = advice.slip.id;
};

const loadAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    advice = data;
    console.log(advice.slip);
    updateAdvice();
  } catch (error) {
    console.error(error);
  }
};

loadAdvice();
console.log("Initial value of advice:", advice);
