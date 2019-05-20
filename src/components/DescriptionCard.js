import Card from "./Card";
import "styles/PieChartCard.css";

/**
 * The card component for pie chart data
 */
export default class PieChartCard {
  /**
   * Create a PieChartCard component
   */
  constructor() {
    
  }

  /**
   * Get the component's HTMLElement
   * @return {HTMLElement}
   */
  getElement() {
    // Chart title
    const title = document.createElement("h4");
    title.innerText = "Description";
    const text = document.createElement("div");
    title.innerText = "This pie chart describes about plaform in which this website is used";

    const card = new Card([title, text]).getElement();
    return card;
  }
}