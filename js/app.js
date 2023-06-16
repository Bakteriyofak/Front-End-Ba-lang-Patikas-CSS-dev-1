class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;
  
    constructor(title, image, desc, price) {
      this.title = title;
      this.imageUrl = image;
      this.description = desc;
      this.price = price;
    }
  }
  
  class ProductItem {
    constructor(product) {
      this.product = product;
    }
  
    render() {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
      return prodEl;
    }
  }
  
  class ProductList {
    products = [
      new Product(
        'Technogym Run',
        'https://www.technogym.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/t/e/technogym_run_gallery_002_b_mini_def_1.jpg',
        'Koşu bandıyla biten yüksek yoğunluklu egzersizlerle hız, dayanıklılık, güç ve kuvvet kazanın.',
        150
      ),
      new Product(
        'Technogym Bike',
        'https://www.technogym.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/t/e/technogym-bike_still_life_hero_1.jpg',
        'Technogym Bisiklet ile biten yüksek yoğunluklu egzersizlerle hız, dayanıklılık, güç ve kuvvet kazanın.',
        89.99
      ),
      new Product(
        'Technogym Elliptical',
        'https://www.technogym.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/0/0/00.jpg',
        'Technogym Elliptical, tüm vücut antremanı sunan tek kompakt cross-trainer',
        174.99
      ),
      new Product(
        'Skillrow',
        'https://www.technogym.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/s/k/skillrow-gallery01.jpg',
        'Sporcularla geliştirilen Skillrow ™, uygulamada bulunan çeşitli toplam vücut antrenmanları ve en gerçekçi kürek çekme hissi ile hem kardiyonuzu hem de gücünüzü geliştirir.',
        94.99
      ),
      new Product(
        'Technogym Bench',
        'https://www.technogym.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/t/e/technogym_bench_gallery_01_1.jpg',
        'Sayısız toplam vücut egzersizi yapmanızı sağlayan her şey dahil fonksiyonel antrenman istasyonunu edinin. Technogym Bench elastik bantları, altıgen halterleri, ağırlıklı mafsalları ve bir eğitim matını kompakt bir ayak izinde birleştirir.',
        94.99
      )
    ];
  
    constructor() {}
  
    render() {
      const renderHook = document.getElementById('app');
      const prodList = document.createElement('ul');
      prodList.className = 'product-list';
      for (const prod of this.products) {
        const productItem = new ProductItem(prod);
        const prodEl = productItem.render();
        prodList.append(prodEl);
      }
      renderHook.append(prodList);
    }
  }
  
  const productList = new ProductList();
  productList.render();
  