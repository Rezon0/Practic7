let selectedImages = {
    area1: null,
    area2: null
  };

  function selectImage(event) {
    const container = event.target.closest('.image-container'); // closest ищет ближайший родительский элемент, подходящий под указанный CSS селектор
    const images = container.getElementsByTagName('img');

    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove('selected'); // Удаляем класс
    }

    const selectedImage = event.target;
    selectedImage.classList.add('selected'); // Добавляем класс

    selectedImages[container.id] = selectedImage; // Да
  }

  function swapImages() {
    const temp = selectedImages.area1.src;
    selectedImages.area1.src = selectedImages.area2.src;
    selectedImages.area2.src = temp;
  }
