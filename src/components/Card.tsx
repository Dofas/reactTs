import React, { FC } from "react";
import './Card.css';

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
  textcolor = "textcolor"
}

// ?? - необовязкові

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  onClick: () => void;
}

const Card: FC<CardProps> = ({ width, height, variant, children, onClick }) => {
  return ( 
    <div className="card"
      style={{
        height,
        width,
        border: variant === CardVariant.outlined ? "1px solid yellow" : "none",
        background: variant === CardVariant.primary ? "lightgreen" : "",
        color: variant === CardVariant.textcolor ? "black" : "white"
      }}
      onClick ={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
