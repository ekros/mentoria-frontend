console.info('Loading images...');

let lastImagesURL = [];

function loadMore() {
      fetch('https://dog.ceo/api/breeds/image/random/20')
        .then(response => response.json())
        .then(data => {
          lastImagesURL = lastImagesURL.concat(data.message);
          const gallery = document.getElementById('dog-gallery');
          data.forEach(m => {
              const img = document.createElement('img');
              img.src = m;
              gallery.appendChild(img);
          });
        });
  }

  function saveToLocalStorage() {
    localStorage.setItem('lastImagesURL', JSON.stringify(lastImagesURL));
  }

  function loadFromLocalStorage() {
    const savedStr = localStorage.getItem('lastImagesURL');
    if (savedStr) {
        lastImagesURL = JSON.parse(savedStr);
        const gallery = document.getElementById('dog-gallery');
        gallery.innerHTML = '';
        lastImagesURL.forEach(m => {
            const img = document.createElement('img');
            img.src = m;
            gallery.appendChild(img);
        });
    }
  }

loadMore();