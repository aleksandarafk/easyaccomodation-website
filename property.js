function createPropertyHtml(property) {
  return `
    <section class="featuredproperty" id="featuredproperty">
    <!-- featured properties part of the homepage-->

    <h1 class="heading">${property.type}</h1>

    <div class="box-container">
      <div class="box">
        <div class="images">
          <img src="${property.allImages[0]}" alt="" />
        </div>
      </div>

      <div class="box">
        <div class="images">
          <img src="${property.allImages[1]}" alt="" />
        </div>
      </div>

      <div class="box">
        <div class="images">
          <img src="${property.allImages[2]}" alt="" />
        </div>
      </div>
    </div>
    <h2 class="propertyRent">Rent: <span>€${property.rent} / month </span></h2>
    <h2 class="heading">Description</h2>
    <div class="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in convallis elit. Quisque molestie magna non facilisis tincidunt. Proin imperdiet pharetra sem, eget pharetra justo mollis non. Donec fringilla porttitor metus, sed dignissim risus sollicitudin eget. Nunc varius, elit in vehicula lacinia, turpis leo blandit nulla, et dictum sapien dolor eu arcu. Praesent eget justo leo. Nullam commodo luctus congue. Curabitur semper vitae mi eget mattis. Nulla rhoncus tortor libero, eu congue lectus tempus vel. Aliquam non mauris eu magna eleifend pharetra ut et erat. Quisque nec tortor sit amet erat varius commodo. In egestas pulvinar mi vitae porttitor. Fusce fringilla ornare leo sed fermentum.
    </div>
  </section>
    `;
}

function populateProperties() {
  const box = document.querySelector("main");
  const urlParams = new URLSearchParams(window.location.search);

  const id = urlParams.get("id"); //we get the information that is required for displaying the right properties
  box.innerHTML += createPropertyHtml(properties[id]);
}
populateProperties();
