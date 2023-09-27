"use client";
import React, { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({otherClasses} : {otherClasses: string}) => {
  return (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src={"/magnifying-glass.svg"}
    height={40}
    width={40}
    className="object-contain"
    alt="magnifying-glass.svg">

    </Image>
  </button>
)}

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("")
    const [model, setmodel] = useState("")
    const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(manufacturer === "" && model === ""){
      return alert("Please fill the search bar")
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());

  };

  const updateSearchParams = (model:string, manufacturer:string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if(model){
      searchParams.set('model', model)
    } else {
      searchParams.delete('model')
    }

    if(manufacturer){
      searchParams.set('manufacturer', manufacturer)
    } else {
      searchParams.delete('manufacturer')
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathName, {scroll:false})
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer 
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden"/>
      </div>
      <div className="searchbar__item">
        <Image
        src={"/model-icon.png"}
        height={25}
        width={25}
        className="absolute w-[20px] h-[20px] ml-4" alt="car model"
        />
        <input 
        type="text"
        name="model"
        value={model}
        onChange={(e) => setmodel(e.target.value)}
        placeholder="Tiguan"
        className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden"></SearchButton>
      </div>
      <SearchButton otherClasses="max-sm:hidden"></SearchButton>
    </form>
  );
};

export default SearchBar;