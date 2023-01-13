const createPropertyHtml = (property) => {
  //here we create the whole html page using this const
  return `
    <div class="box">
          <div class="images">
            <img src="${property.image}" alt="" />
            <div class="information">
              <h3>${property.type}</h3>
              <h3>For Rent</h3>
            </div>
            <div class="icons">
              <a class="fas fa-camera"><h3>4</h3></a>
            </div>
          </div>
          <div class="content">
            <div class="price">
              <h3>€${property.rent} / month</h3>
              <a href="mailto:owen.g@gmail.com" class="fas fa-envelope"></a>
              <a href="tel:+31123467581" class="fas fa-phone"></a>
            </div>
            <div class="location">
              <h3>${property.title}</h3>
              <p>${property.subTitle}</p>
            </div>
            <div class="buttons">
              <a href="property.html?id=${property.id}" class="btn">View Details</a>
            </div>
          </div>
        </div>
    `;
};

const populateProperties = () => {
  const box = document.querySelector("#box-container");
  const urlParams = new URLSearchParams(window.location.search);

  const priceFrom = urlParams.get("priceFrom"); //we get the information that is required for displaying the right properties
  const priceTo = urlParams.get("priceTo");
  const type = urlParams.get("type");

  let propertiesToShow = properties;
  if (priceFrom) {
    // simple if statement to show the properties from the selected min price, max price and type
    propertiesToShow = propertiesToShow.filter(
      (p) => p.rent >= Number(priceFrom)
    );
  }
  if (priceTo) {
    propertiesToShow = propertiesToShow.filter(
      (p) => p.rent <= Number(priceTo)
    );
  }
  if (type) {
    propertiesToShow = propertiesToShow.filter((p) => p.type === type);
  }
  propertiesToShow.forEach((property) => {
    box.innerHTML += createPropertyHtml(property);
  });
};

populateProperties(); //calling the function
