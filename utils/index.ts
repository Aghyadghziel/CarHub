export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "add543f862mshfb9e62904f544e5p11b97fjsnbed150c5cef8",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
