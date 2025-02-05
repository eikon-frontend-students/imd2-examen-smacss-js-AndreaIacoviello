document.addEventListener("DOMContentLoaded", function () {
  const icons = document.querySelectorAll(".product i");
  icons.forEach((icon, index) => {
    icon.addEventListener("click", function () {
      const productText = icon.nextElementSibling;

      if (
        productText.style.display === "none" ||
        productText.style.display === ""
      ) {
        productText.style.display = "block";
      } else {
        productText.style.display = "none";
      }
    });
  });

  const header = document.querySelector(".header");
  const headerTitle = document.querySelector(".header h1");
  headerTitle.addEventListener("click", function () {
    header.style.backgroundColor = "var(--yellow, #fce757)";
    headerTitle.style.color = "var(--dark-blue, #005564)";
  });

  const products = document.querySelectorAll(".product");

  products.forEach((product, index) => {
    product.addEventListener("click", function () {
      if (index === 0) {
        product.style.backgroundColor = "var(--red, #cf9697)";
      }

      if (index === 2) {
        product.style.backgroundColor = "var(--light-blue, #c0d9d9)";
      }
    });
  });
});
