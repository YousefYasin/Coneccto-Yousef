import { useState } from "react";
import { MainCard, SideCard } from "../mainCart";
import "./order.css";
const Order = () => {
  return (
    <div className="container-fluid px-5">
      <div className="row ">
        <div className="col-6">
          <button type="button" class="btn btn-outline btn-outline w-100 rounded-lg ">
            Order Management
          </button>
        </div>
        <div className="col-6">
          <button type="button" class="btn  btn-outline w-100 rounded-lg btn-outline-active">
            Orders Dispatch
          </button>
        </div>
      </div>

      <div className="row  mt-2">
        <div className="col-5 pr-1">
          <MainCard
            title="Incoming 2"
            supplier="./images/img7.png"
            data={[
              {
                type: "type1",
                color: "#29E881",
                value: 27,
              },
              {
                type: "typxe1",
                color: "#29E881",
                value: 73,
              },
            ]}
            address="#326  Leandro M."
            number="+358414361234"
            boldAddress
            note="No onion please, I’m very allergic. It would be best if no onions was handled."
            items={["Americana", "Mexicana", "Hawaii"]}
            price="41,00 €"
            details={null}
          />
        </div>
        <div className="col-5">
          <MainCard
            title="Outgoing 1"
            supplier="./images/supplier.png"
            data={[
              {
                type: "type2",
                value: 27,
                color: "#29E881",
              },
              {
                type: "typxe1",
                color: "#29E881",
                value: 73,
              },
            ]}
            address="#327  Sam A."
            boldAddress={false}
            number="+358414361234"
            note="No onion please, I’m very allergic. It would be best if no onions was handled."
            items={["Americana", "Mexicana", "Hawaii", "Americana", "Mexicana", "Hawaii"]}
            price="41,00 €"
            details={{ address: "#326  Leandro M.", number: "+358414361234" }}
          />
        </div>
        <div className="col-2 px-0 pr-3 ">
          <SideCard />
        </div>
      </div>
    </div>
  );
};

export default Order;
