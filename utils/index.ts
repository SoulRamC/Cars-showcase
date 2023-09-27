import { CarProps, filterProps } from "@/types";

export async function fetchCars(filters: filterProps) {
  const {manufacturer, model, fuel, limit, year} = filters
  const headers = {
    "X-RapidAPI-Key": "24c019fd36mshd696472c798a2f4p1d3d6fjsn0f70ce6fb0ae",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&year=${year}&fuel_type=${fuel}&make=${manufacturer}&limit=${limit}`,
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}

/* export const fetchCarsID = async (car: CarProps) => {
  const { model, year, make } = car;
  const url = `https://api.fuelapi.com/v1/json/vehicles/?year=${year}&model=${model}&make=${make}&api_key=daefd14b-9f2b-4968-9e4d-9d4bb4af01d1`;

  const response = await fetch(url);

  const result = await response.json();

  const { id } = result;

  return result;
}; */

/* const getCarsImage = async (car: CarProps, angle?: number) => {
  const id = await fetchCarsID(car);
  const apiurl = `https://api.fuelapi.com/v1/json/vehicle/${id}/?api_key=daefd14b-9f2b-4968-9e4d-9d4bb4af01d1&shotCode=${angle}`;

  const response = await fetch(apiurl);

  const { products } = response;

  const { productFormats } = products[0];
  const { assets } = productFormats[0];

  const { url } = assets;

  return `${url}`
}; */

/* export const getCarImageURl = (car: CarProps, angle?: string) => {
  const urlimage = getCarsImage(car)

  const carurl = new URL(urlimage);
  return carurl
}; */

export const generateCarsImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { model, make, year } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("model", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("year", `${year}`);
  url.searchParams.append("angel", `${angle}`);

  return `${url}`;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePriceDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const milageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePriceDay + milageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
};


export const updatePathName = (type:string, value:string) => {
  const searchParams = new URLSearchParams(window.location.search)

    searchParams.set(type, value)

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    return newPathName
}