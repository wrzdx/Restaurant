export default loadHomepage

function loadHomepage() {
  document.querySelector("#content").innerHTML = `
  <div class="card">
      <h1>Welcome to Delizia!</h1>
      <p>Expreience the finest blend of Italian and Mediterranean cuisine in the heart of the city. At Delizia, we take pride in using fresh, locally sourced ingredients to create memorable dishes for every palate.</p>
      <div class="info">
        <div class="story">
          <h3>Out Story</h3>
          <p>Founded in 2012, Delizia has become a beloved culinary destination for both locals and visitors. Our chefs bring passion and expertise to every plate, ensuring a delightful dining experience for all.</p>
        </div>
        <div class="scheduleAndLocation">
          <h3>Hours & Location</h3>
          <p>
            Open Daily: 11am - 11pm <br>
            123 Flavor Street, <br>
            Downtown Cityville
          </p>
        </div>
      </div>
      <div>
        <p>Call us: (123) 456-7890</p>
      </div>
    </div>
    `;
}