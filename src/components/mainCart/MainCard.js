import React from "react";
import Chart from "../chart";
const MainCard = ({ title, supplier, data, address, boldAddress, number, note, items, price, details }) => {
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title text-center">{title}</h5>
          <div className="card card-inner p-2">
            <div class="d-flex justify-content-between  align-items-start">
              <div>
                <h6 className="sub-text">
                  <small>Supplier:</small>
                </h6>
                <img src={supplier} />
              </div>
              <div>
                <Chart class="align-start" height={130} width={200} data={data} title={{ num: "5", time: "14:00" }} />
              </div>
              <div>
                <img src="./images/expand.png" />
              </div>
            </div>
            <p style={{ fontWeight: boldAddress && "bold" }} className="text-center none-margin">
              {address}
            </p>
            <h6 className="num-text text-center ">{number}</h6>
            <div className="note m-3 p-3">
              <em class="out"></em>
              <em class="inner"></em>
              <p className=" num-text none-margin">{note}</p>
            </div>
            <div className="items">
              {items.length > 3 ? (
                <div class="p-2 px-4 d-flex justify-content-between">
                  <h6> {items.length} Items</h6>
                  <a className="anchor-text" href="#">
                    Show all Items
                  </a>
                </div>
              ) : (
                <div>
                  <ul class="list-group">
                    {items.map((item, key) => (
                      <li key={key + "items"} class="list-group-item">
                        <span class="mr-5">1 x </span> {item}
                      </li>
                    ))}
                  </ul>
                  <h6 className="sub-text ml-5">
                    <small className="ml-4"> Extra capris</small>
                  </h6>
                </div>
              )}
              <hr />
              <h6 className="sub-text mx-4">
                <small>{price}</small>
              </h6>
              <div className=" mx-3  text-center my-2">
                <button type="button" class="btn btn-primary btn-block mb-2">
                  {items.length <= 3 ? "Ready to Deliver " : "Next"}
                </button>
                <a className="anchor-cancel" href="#">
                  Cancel
                </a>
              </div>
            </div>
          </div>
          <div class="card card-inner p-2 mt-2">
            <div className="row">
              <div className="col-4 p-1">
                {!details ? (
                  <div className="mt-4 px-3 ">
                    <h6 className="sub-text">
                      <small>Supplier:</small>
                    </h6>
                    <img className="mt-2" style={{ display: "block" }} src="./images/img7.png" />
                  </div>
                ) : (
                  <div className="p-2">
                    <Chart height={150} width={150} data={data} title={{ num: "10", time: "14:00" }} />
                  </div>
                )}
              </div>
              <div className="col-4 p-0">
                {details ? (
                  <>
                    <div className="d-flex  mt-4 ">
                      <img style={{ display: "block" }} src="./images/img7.png" />
                    </div>{" "}
                    <p className=" my-2">{details?.address}</p>
                    <h6 className="num-text ">{details?.number}</h6>
                  </>
                ) : (
                  <div className="p-2">
                    <Chart height={150} width={150} data={data} title={{ num: "10", time: "14:00" }} />
                  </div>
                )}
              </div>
              <div className="col-4">
                <div className='text-right'>
                  <img src="./images/expand.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
