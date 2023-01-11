import React from 'react';
import { useState } from 'react';

const Filters = ( props ) => {

    let filteractive = "bg-[rgba(0,0,0,0.05)] text-[#0F0F0F]";

    if (props.filteractive == "active") {
        filteractive = "bg-black text-white";
    }

    return (
        <button className={'py-2 px-3 mr-3 text-sm font-medium rounded-lg ' + filteractive}>
            {props.filtername}
        </button>
    );
}

export default Filters;
