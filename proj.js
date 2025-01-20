document.addEventListener("DOMContentLoaded", () => {
    // Валидация формы
    const form = document.getElementById("signUpForm");
    const nameInput = document.getElementById("name");
    const favoriteBookInput = document.getElementById("favoriteBook");
    const formError = document.getElementById("formError");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = nameInput.value;
        const favoriteBook = favoriteBookInput.value;

        if (name.length < 3) {
            formError.textContent = "Please enter a valid name (at least 3 characters).";
            return;
        }
        if (favoriteBook.length < 3) {
            formError.textContent = "Please enter a valid book title.";
            return;
        }

        formError.textContent = "";
        alert(`Welcome, ${name}! Your favorite book is "${favoriteBook}".`);
    });

    // Модальное окно
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");

    // Открытие модального окна
    openModalBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Закрытие модального окна
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Если кликнуть в любую точку экрана, модальное окно тоже закрывается
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Слайдер изображений
    const sliderImages = document.querySelectorAll(".slider-image");
    let currentIndex = 0;

    function showImage(index) {
        sliderImages.forEach((image, i) => {
            image.classList.remove("show");
            if (i === index) {
                image.classList.add("show");
            }
        });
    }

    showImage(currentIndex);

    document.getElementById("prevBtn").addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? sliderImages.length - 1 : currentIndex - 1;
        showImage(currentIndex);
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
        currentIndex = (currentIndex === sliderImages.length - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    });
});
