import React from "react";
import Choice from "../ui/choice/Choise";
import Wave from "../ui/utils/Wave";
import "./FAQ.css";

export default function FAQ(props) {
  return (
    <div>
      <Wave />
      <div className="row p-5">
        <div className="col-10 col-md-3 FAQ_frame px-0 py-5 text-center m-auto rounded">
          <h3 className="text-light mb-2 pb-2 border-bottom">
            سوالات متداول شما
          </h3>
          <p className="text-light">بررسی برخی از سوالات متداول شما</p>
        </div>
      </div>
      <Choice data={props.data} />
    </div>
  );
}
