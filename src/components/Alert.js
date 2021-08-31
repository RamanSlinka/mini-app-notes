import React, {useContext} from 'react';
import {AlertContext} from "./context/alert/alertContext";

const Alert = () => {
const {alert, hide} = useContext(AlertContext)

    if(!alert.visible) {
      return   null
    }

    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`} >
            <strong>Attention !</strong>
            {alert.text}
            <button type="button" className="btn-close"  aria-label="Close"
            onClick={hide}
            >
                {/*<span aria-idden="true"> </span>*/}
            </button>
        </div>
    );
};

export default Alert;