const advice = document.querySelector(".data");
const btn = document.querySelector(".random-button");

btn.addEventListener("click", async () => {
  await fetch("https://api.adviceslip.com/advice").then(async (res) => {
    const data = await res.json();
    advice.innerHTML = `<h4 class="title">advice # ${data.slip.id}</h4>
    <h2 class="advice">${data.slip.advice}</h2>`;
  });
});

async function getAdvice() {
  await fetch("https://api.adviceslip.com/advice").then(async (res) => {
    const data = await res.json();
    advice.innerHTML = `<h4 class="title">advice # ${data.slip.id}</h4>
        <h2 class="advice">${data.slip.advice}</h2>`;
  });
}

getAdvice();
