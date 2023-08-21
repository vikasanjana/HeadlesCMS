import { Container, Tab, Tabs } from "react-bootstrap";
import FeaturedProducts from "./components/FeaturedProducts";
import LatestProducts from "./components/LatestProducts";
import BestSaller from "./components/BestSaller";
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const FeaturedTabs = () => {
  const tabs = [
    {
      eventKey: "featured",
      title: "FEATURED",
      component: FeaturedProducts,
    },
    {
      eventKey: "latest",
      title: "LATEST",
      component: LatestProducts,
    },
    {
      eventKey: "bestsaller",
      title: "BEST SALLER",
      component: BestSaller,
    },
  ];
  return (
    <Container style={{ width: 1230 + "px" }} className="mt-producttabs">
      <div className="productTabsHeader">
        <IconButton style={{
          backgroundColor : 'white'
        }}>
          <ChevronLeft />
        </IconButton>
        <IconButton style={{
          backgroundColor : 'white'
        }}>
          <ChevronRight />
        </IconButton>
      </div>
      <Tabs
        defaultActiveKey="featured"
        id="uncontrolled-tab-example"
        className="producttabs"
      >
        {tabs.map((item) => (
          <Tab
            className=""
            key={item.eventKey}
            eventKey={item.eventKey}
            title={item.title}
          >
            <item.component />
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
};

export default FeaturedTabs;
