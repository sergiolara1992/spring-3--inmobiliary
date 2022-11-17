export let createCards = (home) => {
  let creater = /*html*/ `
  
<a class="cards" href= "property.html?id=${home.id}">
            <div class="img" style="background-image:url('imgs spring/2 featured properties/${home.image}')"> 
              <div class="top">
                <span class="type">${home.type}</span>
                <span class="status">${home.status}</span>
                <span class="square"></span>
              </div>
              <div class="bottom">
                <span class="price">${home.price}</span>
                <span class="black-square"></span>
                <span class="black-square"></span>
              </div>
            </div>

            <div class="card-info">
              <h4 class="location">${home.ubication}</h4>
              <h3 class="complete-location">
                ${home.addres}
              </h3>
              <div class="owner">
                <img src="https://thispersondoesnotexist.com/image" class="owner-photo">
                <span class="owner-name">${home.owner}</span>
                <span class="date">${home.date}</span>
              </div>
              <div class="features">
                <span class="area"><strong>${home.area}</strong></span>
                <span><strong>2</strong></span>
                <span><strong>3</strong></span>
                <span><strong>3</strong></span>

              </div>
            </div>
          </a>
    `;

  return creater;
};
