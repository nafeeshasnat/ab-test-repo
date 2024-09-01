(function() {
  var debug = 0;
  var variation_name = "Free expedited holiday shipping (100%)";

  if (window.location.href.indexOf('qa-debug') > -1 || localStorage.getItem('qa_debug')) {
    debug = 1;
    localStorage.setItem('qa_debug', true);
    console.log('>> ' + variation_name);
  }
  try {
    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function() {
        if (
          document &&
          document.querySelector(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function() {
        clearInterval(interval);
      }, delayTimeout);
    }

    function getBaseUrl(url) {
      // Split the URL at the "?" to remove query parameters
      var baseUrl = url.split('?')[0];

      // Split again at the "#" in case there's a fragment identifier
      baseUrl = baseUrl.split('#')[0];

      return baseUrl;
    }

    var popularProducts = [
      '/collections/best-sellers/products/flirty-flare-dress-pink',
      '/collections/best-sellers/products/sunset-oasis-jumpsuit-black-white',
      '/products/summer-stunner-copy',
      '/collections/best-sellers/products/summer-stunner-coral',
      '/collections/best-sellers/products/sunset-oasis-jumpsuit-black-white',
      '/collections/best-sellers/products/flirty-flare'
    ]

    var html =
      `<div class="pro-container pUpsell_container">
        <h2 class="pro-header">Aloha Picks for You!</h2>
      </div>`;

    // main function
    function init() {
      // get uniqe upsell prduct link which are not already in cart
      var upsellProducts = getUpsellProducts();

      if (upsellProducts.length == 0) {
        return;
      }

      // get the details of upsell products
      var upsellProductDetails = getUpsellProductsDetails(upsellProducts);

      document.querySelector('.cart-drawer__body .cart-drawer__items').insertAdjacentHTML('afterend', html);

      Object.keys(upsellProductDetails).forEach(function(key) {
        var product = upsellProductDetails[key]
        var upsellItem = '' +
          '<div class="pro-product" p-ID = ' + product.id + '>' +
          '<div class="pro-product-container">' +
          '  <a href="' + product.url + '">' +
          '    <img src="' + product.img + '" alt="' + product.title + '">' +
          '  </a>' +
          '  <div class="pro-product-info">' +
          '    <div class="pro-product-details-group">' +
          '      <div class="pro-product-details">' +
          '        <h3><a href="' + product.url + '">' + product.title + '</a></h3>' +
          '        <p class="pro-price">$' + product.price + '</p>' +
          '      </div>' +
          '      <div class="pro-product-button">' +
          '        <button class="pro-toggle-size ">Size/Grind</button>' +
          '      </div>' +
          '      <!-- This div needs to be closed properly -->' +
          '    </div>' +
          '  </div>' +
          '</div>' +
          '      <div class="pro-size-selector">' +
          '        <select>';

        Object.keys(product.size).forEach(function(item) {
          var variations = product.size[item];
          upsellItem += '<option var_ID = ' + variations.id + ' options[Color]=' + variations.option2 + '>' + variations.option1 + '</option>';
        });

        upsellItem +=
          '        </select>' +
          '      </div>' +
          '</div>';

        document.querySelector('.pUpsell_container').insertAdjacentHTML('beforeend', upsellItem);
      });

      // initiate add to cart functionlity
      document.querySelectorAll('.pro-product').forEach(function(item) {
        item.querySelector('.pro-toggle-size').addEventListener('click', function(e) {
          if (e.target.classList.contains('add-active')) {
            item.querySelector('.pro-toggle-size').classList.add('pro-adding');
            item.querySelector('.pro-toggle-size.pro-adding').innerHTML = 'Adding...';
            // add to cart function call
            addToCart(item);
          }
        });
      });

      // sizze show functionality
      document.querySelectorAll('.pro-product').forEach(function(item) {
        item.querySelector('.pro-toggle-size').addEventListener('click', function() {
          if (!item.querySelector('.pro-size-selector').classList.contains('pro-open')) {
            item.querySelector('.pro-size-selector').classList.add('pro-open');
            item.querySelector('.pro-toggle-size').classList.add('add-active');
            item.querySelector('.pro-toggle-size').innerHTML = 'Add';
          }
        });
      });
    }

    function getUpsellProducts() {
      var upsellArray = [];
      var count = 0;

      // Get all hrefs from the a tags on the page
      var pageLinks = Array.from(document.querySelectorAll('.cart__item__title a')).map(function(link) {
        return getBaseUrl(link.getAttribute('href'));
      });

      // Iterate through popularProducts to find unmatched ones
      popularProducts.forEach(function(productUrl) {
        // Check if the product URL exists in the list of page links
        var isMatched = pageLinks.some(function(pageLink) {
          return productUrl.indexOf(pageLink) > -1;
        });

        // If not matched and we haven't reached the limit of 2, add to upsellArray
        if (!isMatched && count < 2) {
          upsellArray.push('https://ellaelisque.com' + productUrl + '.json');
          count++;
        }
      });
      return upsellArray;
    }

    function getUpsellProductsDetails(upsellProducts) {
      var upsellDetails = {};
      upsellProducts.forEach(function(productUrl, index) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', productUrl, false); // false makes the request synchronous

        xhr.onload = function() {
          if (xhr.status === 200) {
            try {
              var productData = JSON.parse(xhr.responseText);

              console.log(productData)
              // Adding the product data to the upsellDetails object
              upsellDetails['upsellPro' + (index + 1)] = {
                id: productData.product.id || '',
                url: productUrl.replace('.json', ''),
                img: productData.product.image.src || '',
                title: productData.product.title || 'No Title',
                price: productData.product.variants[0].price || '0',
                size: productData.product.variants || [],
              };
            } catch (e) {
              if (debug) console.log('Error parsing product data:', e);
            }
          } else {
            if (debug) console.log('Request failed with status ' + xhr.status);
          }
        };

        xhr.onerror = function() {
          if (debug) console.log('Network error');
        };

        xhr.send();
      });

      return upsellDetails;
    }

    function updateCartManually(itemClass, newQuantity) {
      console.log('>> update initiated')
      // Select the input field based on the item ID
      var inputField = itemClass;

      if (inputField) {
        // Update the input field value
        inputField.value = newQuantity;

        // Create and dispatch an 'input' event
        var inputEvent = new Event('input', {
          bubbles: true
        });
        inputField.dispatchEvent(inputEvent);

        // Create and dispatch a 'change' event
        var changeEvent = new Event('change', {
          bubbles: true
        });
        inputField.dispatchEvent(changeEvent);
      } else {
        console.error('Input field with class not found');
      }
    }

    function addToCart(product) {
      var selectElement = product.querySelector('.pro-size-selector select');
      var selectedOption = selectElement.options[selectElement.selectedIndex];
      var variantId = selectedOption.getAttribute('var_id');
      var colorOption = selectedOption.getAttribute('options[color]');
      var sizeOption = selectedOption.innerHTML;
      var productID = product.getAttribute('p-id');

      var formData = {
        'items': [{
          'id': variantId,
          'quantity': 1,
          'options[Size]': sizeOption,
          'options[Color]': colorOption,
          'product-id': productID
        }]
      };

      var xhr = new XMLHttpRequest();
      xhr.open('POST', '/cart/add.js?request=customupsell', true);
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) { // request completed
          if (xhr.status === 200) { // successful response
            try {
              var response = JSON.parse(xhr.responseText);
            } catch (error) {
              console.error('Error parsing response JSON:', error);
            }
          } else {
            console.error('Error:', xhr.statusText);
          }
        }
      };

      xhr.send(JSON.stringify(formData));

    }

    // dynamic functionalities are handled by this function
    function mutation() {
      var targetNode = document.querySelector('#cart-drawer');
      var config = {
        attributes: true,
        childList: true,
        subtree: true
      };

      var callback = function(mutationsList, observer) {
        for (var mutation of mutationsList) {
          console.log(mutation.type)
          if (mutation.type === 'childList') {
            if (document.querySelector('.cart-drawer__body .cart__item') && !document.querySelector('.pUpsell_container')) {
              init();
            }

            if (!document.querySelector('.cart-drawer__body .cart__item') && document.querySelector('.pUpsell_container')) {
              document.querySelector('.pUpsell_container').remove();
            }

            if (document.querySelector('.pro-toggle-size') && document.querySelector('.pro-toggle-size').classList.contains('pro-adding')) {
              document.querySelectorAll('.cart-drawer__items .cart__item__title a').forEach(function(productTitle) {
                document.querySelectorAll('.pUpsell_container .pro-product-details a').forEach(function(upsellTitle) {
                  if (productTitle.innerHTML.trim() == upsellTitle.innerHTML.trim()) {
                    document.querySelector('.pUpsell_container').remove();
                  }
                });
              });
            }
          }
        }
      };

      var observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
    }

    waitForElement('#cart-drawer', mutation, 50, 5000);

    // Update sitecart  after ajax complete
    var req = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function() {
      this.addEventListener('load', function() {
        if (this.responseURL.indexOf('/cart/add.js?request=customupsell') > -1) {
          var forceUpdateProductQuantity = document.querySelector('.cart-drawer__items .cart__item .cart__item__quantity-field');
          updateCartManually(forceUpdateProductQuantity, 1);
        }
      });
      return req.apply(this, arguments);
    };
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
