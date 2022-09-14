class QuantityInput extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input[name="quantity"]');
    this.maxValue = parseInt(this.dataset.max);
    this.changeEvent = new Event('change', { bubbles: true });
    this.selectedItemsContainer = document.getElementById("selected__items");
    this.vid = this.input.dataset.id;
    this.input.addEventListener('change', ()=>{
      this.productItem = this.closest('.boost-pfs-filter-product-item');
      this.itemId = this.productItem.dataset.vid;
      if(this.input.value > this.maxValue){
        alert('You have exceeded maximum quantity');
        this.input.value = this.maxValue;
      }
      if(this.input.value > 0){
        if(this.selectedItemsContainer.querySelector(`.boost-pfs-filter-product-item[data-v-id="${this.vid}"]`)){
          this.selectedItemsContainer.querySelector(`.quantity__input[data-id="${this.vid}"]`).value = this.input.value;
        } else{
          this.selectedItemsContainer.appendChild(this.productItem.cloneNode(true));
        }
      } else {
        this.selectedItemsContainer.querySelector(`.boost-pfs-filter-product-item[data-v-id="${this.itemId}"]`).remove();
      }
    })
    this.querySelectorAll('button')?.forEach((button) => button.addEventListener('click', this.onButtonClick.bind(this)));
  }

  onButtonClick(event) {
    event.preventDefault();
    const previousValue = this.input.value;

    event.target.name === 'plus' ? this.input.stepUp() : this.input.stepDown();
    if (previousValue !== this.input.value) this.input.dispatchEvent(this.changeEvent);
  }
}

customElements.define('quantity-input', QuantityInput);

(()=>{
  const inputSelected = document.querySelector('.js-show-selected');
  inputSelected.addEventListener('change', e=>{
    if(inputSelected.checked){
      if(document.querySelector(".boost-pfs-filter-products") && !document.querySelector(".boost-pfs-filter-products.selected-items")){
        let parentContainer = document.querySelector(".boost-pfs-filter-products").parentNode;
        let clonedProductsContainer = document.querySelector(".boost-pfs-filter-products").cloneNode(false);
        parentContainer.append(clonedProductsContainer);
        clonedProductsContainer.classList.add("selected-products-container"); 
        document.getElementById("selected__items").querySelectorAll(".boost-pfs-filter-product-item").forEach((selectedItem) =>{
          let clonedItem = selectedItem.cloneNode(true); 
          document.querySelector(".selected-products-container").append(clonedItem);
        })
      }
    }else{
      if(document.querySelector(".selected-products-container")){
        document.querySelector(".selected-products-container").remove();
      }
    }
    document.body.classList.toggle('show-selected', inputSelected.checked)
  });

  const submitBtn = document.querySelector('.js-form-submit');
  submitBtn.addEventListener('click', e=>{
    const selectedItems = document.getElementById("selected__items").querySelectorAll(".boost-pfs-filter-product-item");
    console.log(selectedItems);
    if(!selectedItems.length) return;
	submitBtn.textContent = 'Adding..';
    let items = [];
    selectedItems.forEach(i=>{
      const input = i.querySelector('[name="quantity"].quantity__input');
      const disc3PropertyInput = i.querySelector('[name="properties[__product-discount3]"]');
      const disc5PropertyInput = i.querySelector('[name="properties[__product-discount5]"]');
      const disc6PropertyInput = i.querySelector('[name="properties[__product-discount6]"]');

      // Set Item properties for customer level discount
      // Created By Paul 17 June 2022
      let properties = {};
      if(disc3PropertyInput){
        properties['__product-discount3'] = disc3PropertyInput.value;
      }
      if(disc5PropertyInput){
        properties['__product-discount5'] = disc5PropertyInput.value;
      }
      if(disc6PropertyInput){
        properties['__product-discount6'] = disc6PropertyInput.value;
      }
      items.push({
        id: input.dataset.id,
        quantity: +input.value,
        properties: properties
      })
    })
    const body = {
          items: items
    };

	fetch(submitBtn.dataset.addCartUrl+'.js', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': `application/json;`
      },
      body: JSON.stringify(body)
    })
    .then(i=>i.json())
    .then(i=>{
      if(i.status){
//         alert(i.description.replace("You can't add more", 'You have exceeded maximum quantity'));
        alert('You have exceeded maximum quantity');
        return;
      }
      location.href = submitBtn.dataset.cartUrl;
    })
    .finally(()=>{
             submitBtn.textContent = 'Add all to cart';
             })
  });
})()