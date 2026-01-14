document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".product-detail__form");

  forms.forEach((form) => {
    const selectors = form.querySelectorAll(".product-detail__quantity-selector");
    const input = form.querySelector(".product-detail__quantity-input");
    const minusBtn = form.querySelector(".minus");
    const plusBtn = form.querySelector(".plus");
    const addToCartBtn = form.querySelector(".product-custom__add");

    if (!input || !minusBtn || !plusBtn || !addToCartBtn) return;

    const min = parseInt(input.min, 10) || 0;
    const max = input.dataset.max ? parseInt(input.dataset.max, 10) : null;

    /**
     * ボタンの有効 / 無効を更新
     */
    const updateButtons = () => {
      const value = parseInt(input.value, 10) || 0;

      // マイナス
      minusBtn.disabled = value <= min;

      // プラス
      if (max !== null) {
        plusBtn.disabled = value >= max;
      }

      // カート追加（0のとき無効）
      addToCartBtn.disabled = value <= 0;
    };

    /**
     * 初期化
     */
    input.value = Math.max(min, parseInt(input.value, 10) || min);
    updateButtons();

    /**
     * マイナスボタン押下
     */
    minusBtn.addEventListener("click", () => {
      let value = parseInt(input.value, 10);

      if (value > min) {
        input.value = value - 1;
        updateButtons();
      }
    });

    /**
     * プラスボタン押下
     */
    plusBtn.addEventListener("click", () => {
      let value = parseInt(input.value, 10);

      if (max === null || value < max) {
        input.value = value + 1;
        updateButtons();
      }
    });
  });
});
