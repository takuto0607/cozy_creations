const faqContent = document.querySelector(".faq__content");

// 設定値
const props = {
  isAnimating: false,
  slideDuration: 400,
  slideEasing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  items: faqContent.querySelectorAll(".faq__item"),
};

function answerShow(li) {
  props.isAnimating = true;

  // 他の項目をすべて閉じる
  props.items.forEach((otherLi) => {
    if (otherLi !== li && otherLi.classList.contains("is-open")) {
      answerHide(otherLi);
    }
  });

  li.classList.add("is-open");

  const answer = li.querySelector(".faq__answer");
  answer.style.display = "block";

  const startHeight = 0;
  const endHeight = answer.scrollHeight;

  answer.animate([{ height: `${startHeight}px` }, { height: `${endHeight}px` }], {
    duration: props.slideDuration,
    easing: props.slideEasing,
  }).onfinish = () => {
    answer.style.height = "";
    props.isAnimating = false;
  };
}

function answerHide(li) {
  li.classList.remove("is-open");

  const answer = li.querySelector(".faq__answer");
  const startHeight = answer.scrollHeight;
  const endHeight = 0;

  answer.animate([{ height: `${startHeight}px` }, { height: `${endHeight}px` }], {
    duration: props.slideDuration,
    easing: props.slideEasing,
  }).onfinish = () => {
    answer.style.display = "";
    answer.style.height = "";
    props.isAnimating = false;
  };
}

/* 初期表示：faq__content内の最初の項目を開く */
const firstItem = props.items[0];
firstItem.classList.add("is-open");
firstItem.querySelector(".faq__answer").style.display = "block";

/* クリックイベント */
props.items.forEach((li) => {
  li.querySelector(".faq__question button").addEventListener("click", () => {
    if (props.isAnimating) return;

    if (!li.classList.contains("is-open")) {
      answerShow(li);
    } else {
      answerHide(li);
    }
  });
});
