import * as React from "react";
import { Input } from "../../../../../common/components/input";
import { Training } from "../../../../../model/training";

interface IProps {
    training: Training;
}

export const TrainingForm = (props: IProps) => {
    return (
      <form>
        <h2>Training form</h2>
        <span>Name: {props.training.name}</span>
        <input type="checkbox" checked={props.training.isActive} />
        <span>
          Start: {props.training.start.toLocaleDateString()} - End: {props.training.end.toLocaleDateString()}
        </span>
      </form>
        // <div className="col-md-8 col-md-offset-2">
        //     <h2>Training form</h2>
        //     <div className="panel nav-tabs">
        //         <div className="panel-heading">
        //           <ul className="nav nav-tabs">
        //               <li className="active"><a href="#tabmain" data-toggle="tab">Main</a></li>
        //           </ul>
        //         </div>
        //         <div className="panel-body">
        //             <div className="tab-content">
        //                 <div className="tab-pane fade in active" id="tabmain">
        //                     <form className="form-horizontal">
        //                         <div className="form-group">
        //                             <label className="control-label col-md-1 col-xs-12">name</label>
        //                             <div className="col-md-11 col-xs-12">
        //                                 <input
        //                                   type="text"
        //                                   className="form-control"
        //                                   id="name"
        //                                   value={props.training.name}
        //                                 />
        //                             </div>
        //                         </div>
        //                         <div className="form-group">
        //                             <label className="control-label col-md-1 col-xs-12">start</label>
        //                             <div className="col-md-3 col-xs-12">
        //                                 <input
        //                                   type="date"
        //                                   className="form-control"
        //                                   id="start"
        //                                   value={props.training.start.toDateString()}
        //                                 />
        //                             </div>
        //                             <label className="control-label col-md-1 col-xs-12">end</label>
        //                             <div className="col-md-3 col-xs-12">
        //                                 <input
        //                                   type="date"
        //                                   className="form-control"
        //                                   id="end"
        //                                   value={props.training.end.toDateString()}
        //                                 />
        //                             </div>
        //                         </div>
        //                         <div className="form-group">
        //                             <div className="col-md-12 col-xs-12">
        //                                 <div className="checkbox">
        //                                     <label>
        //                                       <input
        //                                         type="checkbox"
        //                                         checked={props.training.isActive}
        //                                       />
        //                                       is Active
        //                                     </label>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};