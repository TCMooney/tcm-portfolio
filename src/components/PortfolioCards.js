import React from "react";

export default function PortfolioCards(props) {
  //get props from projects component
  //use portfolioitem._id to retrieve photos if any
  //use placeholder if no photo added

  const { title, description, portfolioItemUrl } = props;
  return (
    <div className="portfolio-card">
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
      <div className="card_url">{portfolioItemUrl}</div>
    </div>
  );
}
