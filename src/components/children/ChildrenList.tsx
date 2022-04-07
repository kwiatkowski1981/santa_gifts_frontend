import React, {useEffect, useState} from 'react';
import {ListChildrenRes} from "types";
import {ChildrenTable} from './ChildrenTable';
import {Spinner} from "../common/spinner/Spinner";

export const ChildrenList = () => {

    const [data, setData] = useState<ListChildrenRes | null>(null);
    const refreshData = async () => {
        setData(null);
        const res = await fetch(`http://localhost:3001/child`);
        setData(await res.json())
    };

    useEffect(() => {
        refreshData();
    }, []);

    if (data === null) {
        return <Spinner/>;
    }

    return <>
        <h1>Children</h1>
        <ChildrenTable childrenList={data.childrenList} giftsList={data.giftsList}/>
    </>;

}