const slider = document.querySelector(".sliderCategories");
const prevBtn = document.querySelector(".prebtn");
const nextBtn = document.querySelector(".nextbtn");

const cardWidth = 220; // 200px картка + 20px відступ
let index = 0; // Початковий індекс

nextBtn.addEventListener("click", () => {
  const maxIndex = slider.children.length - 3;
  if (index < maxIndex) {
    index++;
    slider.style.transform = `translateX(-${index * cardWidth}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    slider.style.transform = `translateX(-${index * cardWidth}px)`;
  }
});
