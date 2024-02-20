let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

const counters = document.querySelectorAll(".counter");
const speed = 4;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const inc = target / speed;

    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCount, 800);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});
