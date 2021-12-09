import React, { useContext, useEffect, useRef } from "react";
import { PortfolioContext } from "../contexts/PortfolioContext";
import PortfolioCards from "./PortfolioCards";

export default function Projects() {
  const { portfolioItems, getPortfolioItems } = useContext(PortfolioContext);
  const effectHasRun = useRef(false);

  useEffect(() => {
    if (effectHasRun.current === true) {
      return;
    } else {
      getPortfolioItems();
      effectHasRun.current = true;
    }
  }, [getPortfolioItems]);

  const portfolioCards = (items) => {
    if (items) {
      return items.map((item) => {
        return <PortfolioCards key={item._id} {...item} />;
      });
    } else {
      return <div> ...loading </div>;
    }
  };

  console.log(portfolioItems);

  return (
    <div className="projects-wrapper">
      <div className="divider" />
      <div className="cards-wrapper">{portfolioCards(portfolioItems)}</div>
    </div>
  );
}
