import React from "react";
import { Card, Button } from "antd";
import { NavLink } from "react-router-dom";

const CardItem = ({ id, name, text, image, daysNotFed, dangerLevel, price }) => {
  return (
      <Card
          hoverable
          cover={
            <img
                style={{objectFit: "cover", width: "100%", height: "250px"}}
                src={image}
            />
          }
      >
              <h2>{name}</h2>
              <p>{text}</p>
              <p> <strong>Days not fed:</strong> {daysNotFed}</p>
              <p> <strong>Danger level:</strong> {dangerLevel}</p>
              <p> <strong>Price:</strong> {price}</p>
              <NavLink to={`/catalog/${id}`}>
                  <button>
                      Show More
                  </button>
              </NavLink>
      </Card>
  );
}

export default CardItem;
