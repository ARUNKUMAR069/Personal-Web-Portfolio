// CardGridLayout.js
import Card4 from "./Card4";
import {
  FaCode,
  FaChartLine,
  FaMobileAlt,
  FaSearch,
  FaProjectDiagram,
  FaShoppingCart,
} from "react-icons/fa";

const ServicesLayout = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
      <Card4
        title=" Websites Using MERN Stack"
        description="Build dynamic, high-performance web applications with a modern tech stack."
        icon={<FaCode />}
      />
      <Card4
        title="Creating Dashboards with Power BI"
        description="Transform data into interactive dashboards for insightful decision-making."
        icon={<FaChartLine />}
      />
      <Card4
        title="Responsive Web Design"
        description="Deliver mobile-friendly and visually appealing designs for all devices."
        icon={<FaMobileAlt />}
      />
      <Card4
        title="SEO Optimization"
        description="Boost your site's visibility with strategic SEO practices."
        icon={<FaSearch />}
      />
      <Card4
        title="API Development"
        description="Create robust APIs for seamless data integration and communication."
        icon={<FaProjectDiagram />}
      />
      <Card4
        title="E-commerce Solutions"
        description="Build user-centric online stores that enhance customer experience."
        icon={<FaShoppingCart />}
      />
    </div>
  );
};

export default ServicesLayout;
