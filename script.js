const fakeDataArray = [
    { id: "123", latitude: "28.6738", longitude: "77.4375" },  // Ghaziabad
    { id: "456", latitude: "28.5355", longitude: "77.3910" },  // Noida
    { id: "789", latitude: "28.7041", longitude: "77.1025" },  // Gurgaon
    { id: "101", latitude: "28.6459", longitude: "77.3653" },  // Indirapuram
    { id: "112", latitude: "28.6692", longitude: "77.4538" },  // Ghaziabad
    { id: "131", latitude: "28.6139", longitude: "77.2090" },  // Delhi
    { id: "415", latitude: "28.5704", longitude: "77.3213" },  // Vaishali
    { id: "161", latitude: "28.6274", longitude: "77.2179" },  // East Delhi
    { id: "718", latitude: "28.4595", longitude: "77.0266" },  // Sohna
    { id: "192", latitude: "28.7041", longitude: "77.1025" },  // Gurgaon
    { id: "021", latitude: "28.5848", longitude: "77.3166" },  // Vasundhara
    { id: "222", latitude: "28.5692", longitude: "77.3260" },  // Sahibabad
    { id: "333", latitude: "28.6456", longitude: "77.3340" },  // Lajpat Nagar
    { id: "444", latitude: "28.4984", longitude: "77.1870" },  // Faridabad
    { id: "555", latitude: "28.7041", longitude: "77.1025" },  // Gurgaon
    { id: "666", latitude: "28.6191", longitude: "77.2793" },  // Connaught Place
    { id: "777", latitude: "28.5675", longitude: "76.9878" },  // Palwal
    { id: "888", latitude: "28.6500", longitude: "77.4084" },  // Nehru Place
    { id: "999", latitude: "28.6019", longitude: "77.2776" },  // South Extension
    { id: "000", latitude: "28.6139", longitude: "77.2090" }   // Delhi
  ];
  

const convertedArray = fakeDataArray.map(data => ({
    id: data.id,
    latitude: `${parseFloat(data.latitude).toFixed(4)}°N`,
    longitude: `${parseFloat(data.longitude).toFixed(4)}°E`
}));

const latitude = document.querySelector('.components-details-title-location-latitude');
const longitude = document.querySelector('.components-details-title-location-longitude');

function fakeData(event) {
    event.preventDefault();
    const enteredID = document.getElementById('locationInputIDInput').value;
    const fakeData = convertedArray.find(data => data.id === enteredID);

    setTimeout(() => {
        if (fakeData) {
            document.querySelector('.components-details-title-location-latitude').textContent = fakeData.latitude;
            document.querySelector('.components-details-title-location-longitude').textContent = fakeData.longitude;
            displayLocationOnMap(parseFloat(fakeData.latitude), parseFloat(fakeData.longitude));
        } else {
            alert("ID not found. Please enter a valid ID.");
        }
    }, 2000);
}

function displayLocationOnMap(latitude, longitude) {
    const map = L.map('map').setView([latitude, longitude], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
        .bindPopup('Location')
        .openPopup();
}
