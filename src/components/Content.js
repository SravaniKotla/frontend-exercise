import "styles/Content.css";
import RangeCard from "./RangeCard";
import PercentageCard from "./PercentageCard";
import AddRangeCard from "./AddRangeCard";
import PieChartCard from "./PieChartCard";
import DescriptionCard from './DescriptionCard';

/**
 * Contains all of the data content
 */
export default class Content {
  /**
   * Create a Content component
   */
  constructor() {
    this._container = document.createElement("div");
    this._data = [
      {
        title: "Unique Customers",
        value: 300,
        upperRange: 450
      }
    ];
  }

  /**
   * Get the component's HTMLElement
   * @return {HTMLElement}
   */
  getElement() {
    this._container.className = "content";

    /***************************
     ***      Customers      ***
     ***************************/
    const customersTitle = document.createElement("h3");
    customersTitle.innerText = "Customers";

    const cardsContainer = document.createElement("div");
    cardsContainer.className = "range-card-container";
    const uniqueCustomersCard = new RangeCard(this._data[0]);

    const addCard = new AddRangeCard();

    cardsContainer.appendChild(uniqueCustomersCard.getElement());
    cardsContainer.appendChild(addCard.getElement());

    
    /***************************
     ***        Description        ***
     ***************************/
    const descriptionTitle = document.createElement("h3");
    descriptionTitle.innerText = "Description";
    const descriptionContainer = document.createElement("div");
    descriptionContainer.className = "Description-container";
    const descriptionColumn1 = document.createElement("div");
    descriptionColumn1.className = "Description-column";

    /***************************
     ***        Store        ***
     ***************************/
    const storeTitle = document.createElement("h3");
    storeTitle.innerText = "Store";

    const storeContainer = document.createElement("div");
    storeContainer.className = "store-container";
    const storeColumn1 = document.createElement("div");
    storeColumn1.className = "store-column";
    const storeColumn2 = document.createElement("div");
    storeColumn2.className = "store-column";

    storeContainer.appendChild(storeColumn1);
    storeContainer.appendChild(storeColumn2);
    descriptionContainer.appendChild(descriptionColumn1);

    const storePieCard = new PieChartCard();
    storeColumn1.appendChild(storePieCard.getElement());

    const customerRetentionCard = new PercentageCard({
      title: "Customer Retention",
      value: 83.4
    });
    storeColumn2.appendChild(customerRetentionCard.getElement());
    const perfectOrderRateCard = new PercentageCard({
      title: "Perfect Order Rate",
      value: 97.2
    });
    const descriptionRateCard = new DescriptionCard();
    descriptionColumn1.appendChild(descriptionRateCard.getElement());
    storeColumn2.appendChild(perfectOrderRateCard.getElement());

    this._container.appendChild(customersTitle);
    this._container.appendChild(cardsContainer);
    this._container.appendChild(storeTitle);
    this._container.appendChild(storeContainer);
    this._container.appendChild(descriptionTitle);
    this._container.appendChild(descriptionContainer);

    return this._container;
  }
}