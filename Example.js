import { useState } from "react";
import AnimalList from "./componets/AnimalList";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");
  const filterdAnimals =  animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
})
  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <AnimalList animals={filterdAnimals}/>
    </>
  );
};

export default Example;
