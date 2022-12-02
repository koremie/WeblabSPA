import React, { useState, useEffect } from "react";
import {
  FiltersWrapper,
  MySelect,
  ApplyButton,
  FiltersContainer,
  CardWrapper,
} from "./Catalog.styled";
import { NavLink } from "react-router-dom";
import { Select } from "antd";
import CardItem from "../../components/CardItem/CardItem";
import { getAllItems, getItemsFiltered } from "../../api/Api";
import LoadingSpinner from "../../components/Spinner/Spinner";
import lol from "../../images/frog-spin-frog.gif";

const dangerLevels = ['Danger level (Any)', 'Low', 'Moderate', 'Considerable', 'High', 'Extreme'];
const daysStarving = ['Days not fed (Any)','1-2', '3-5', '6-10', '11-20'];

const Catalog = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [value, setValue] = useState('');
    let [filterDangerLevel, setFilterDangerLevel] = useState('Danger level (Any)');
    let [filterDaysNotFed, setFilterDaysNotFed] = useState('Days not fed (Any)');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      getAllItems().then((response) => {
        setItems(response);
        setFilteredItems(response);
        setIsLoading(false);
      });
    }, []);

    const filter = () => {
        let filters = {};
        if (filterDangerLevel !== 'Danger level (Any)') {
          filters.dangerLevel = filterDangerLevel;
          console.log(filterDangerLevel);
          
        }
        if (filterDaysNotFed !== 'Days not fed (Any)') {
          filters.daysNotFed = filterDaysNotFed;
        }
        setIsLoading(true);
        getItemsFiltered(filters).then((response) => {
          setTimeout(() => {
            if(value !== ''){
              setItems(response.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())));
              setFilteredItems(response);
            } else {
              setItems(response);
              setFilteredItems(response);
            }
            setIsLoading(false);
          }, 2000);
        });
    }
  
  useEffect(() => {
    const searched = (data) => {
        return data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
    }
      setItems(searched(filteredItems));
  }, [value])

  return (
    <div>
      <FiltersWrapper>
        <FiltersContainer>
          <MySelect onChange={(e) => setFilterDangerLevel(e.target.value)}>
              {
                  dangerLevels.map((dangerLevel) => <option key={dangerLevel} value={dangerLevel}>{dangerLevel}</option>)
              }
          </MySelect>
          
          <MySelect onChange={(e) => setFilterDaysNotFed(e.target.value)}>
              {
                  daysStarving.map((daysNotFed) => <option key={daysNotFed} value={daysNotFed}>{daysNotFed}</option>)
              }
          </MySelect>
          <ApplyButton onClick={filter}>Apply</ApplyButton>
          
          <input
            type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search by name"
          />
        </FiltersContainer>
      </FiltersWrapper>
      {isLoading ? <LoadingSpinner /> :      
      <CardWrapper>
        {items.map(({ id, name, text, image, days_not_fed, danger_level, price }, idx) => (
          <CardItem
              id={id}
              name={name}
              text={text}
              image={image}
              daysNotFed={days_not_fed}
              dangerLevel={danger_level}
              price={price}
              key={idx}
          />
        ))}
      </CardWrapper>
      }
    </div>
  );
};

export default Catalog;