import { FaBowlFood, FaPizzaSlice } from "react-icons/fa6";
import { GiNoodles, GiChickenOven } from "react-icons/gi";
import { List, SLink } from "./Style";

function Category() {
  return (
    <List>
      <SLink to={"/cuisine/asian"}>
        <FaBowlFood />
        <h4>Asian</h4>
      </SLink>
      <SLink to={"/cuisine/italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/american"}>
        <GiNoodles />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/mexican"}>
        <GiChickenOven />
        <h4>Mexican</h4>
      </SLink>
    </List>
  );
}

export default Category;
