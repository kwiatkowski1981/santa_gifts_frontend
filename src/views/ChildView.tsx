import React from 'react';
import {useParams} from "react-router-dom";
import {ChildrenList} from "../components/children/ChildrenList";
import {AddChild} from "../components/AddChild/AddChild";

export const ChildView = () => {
    const params = useParams();
    console.log(params);

    return (
        <>
            <ChildrenList />
            <AddChild />
        </>
    )
}