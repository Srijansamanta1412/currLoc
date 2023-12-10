if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Success callback
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        async function fetchData() {
            const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude}%2C${longitude}`;
            
            const options = {
              method: 'GET',
              headers: {
                'X-RapidAPI-Key': '0f3a0626bemsh90d431dd5528610p15ff15jsnbb0bad8c3a85',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
              }
            };
          
            try {
              const response = await fetch(url, options);
              const result = await response.json();
              console.log(result);
              document.getElementById('country').innerHTML=result.location.country
              document.getElementById('temp').innerHTML=result.current["temp_c"]
              
            } catch (error) {
              console.error(error);
            }
          }
          fetchData();
          initMap();
          
      },
      (error) => {
        // Error callback
        console.error(`Error getting location: ${error.message}`);
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
  function initMap() {
    // Your latitude and longitude
    var myLatLng = { lat: 50.1, lng: -0.13 };

    // Create a new map centered at the specified coordinates
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 15, // Adjust the zoom level as needed
    });

    // Add a marker at the specified coordinates
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'My Location',
    });
  }
  

/*async function fetchData() {
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=50.1%2C-0.13';
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0f3a0626bemsh90d431dd5528610p15ff15jsnbb0bad8c3a85',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }*/
  
  // Call the async function
 
  