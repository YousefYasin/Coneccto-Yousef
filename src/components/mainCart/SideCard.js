import React from "react";

const SideCard = () => {
  return (
    <>
      <div className="card mb-2  p-2">
        <h5 class="card-title text-center my-3">Ready</h5>
        <div className="card-inner">
          <h5 className="text-center mt-2">#326 </h5>
          <h6 className="sub-text fs-14 text-center mb-5">
            <>Mae Smith</>
          </h6>
          <div className="d-flex justify-content-center my-5 ">
            <img style={{ display: "block" }} src="./images/img7.png" />
          </div>{" "}
          <h6 className="sub-text text-center mb-5">
            <small>Pickup in</small>
          </h6>
          <h5 className="text-center mt-1">1 Min</h5>
        </div>
        <div className="card-inner mt-2">
          <h5 className="text-center mt-2">#326 </h5>
          <h6 className="sub-text fs-14 text-center mb-5">
            <>Mae Smith</>
          </h6>
          <div className="d-flex justify-content-center my-5 ">
            <img style={{ display: "block" }} src="./images/img7.png" />
          </div>{" "}
          <h6 className="sub-text text-center mb-5">
            <small>Pickup in</small>
          </h6>
          <h5 className="text-center mt-1">1 Min</h5>
        </div>
      </div>
    </>
  );
};

export default SideCard;
