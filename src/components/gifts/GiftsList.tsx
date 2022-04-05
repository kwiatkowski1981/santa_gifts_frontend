import React, {useEffect, useState} from 'react';
import {GiftEntity} from "types";
import { GiftsTable } from './GiftsTable';
import {Spinner} from "../common/spinner/Spinner";

export const GiftsList = () => {

    const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null);
    const refreshGiftsList = async () => {
        setGiftsList(null);
        const res = await fetch(`http://localhost:3001/gift`);
        const data = await res.json();
        setGiftsList(data.giftsList)
    };

    useEffect(() => {
        refreshGiftsList();
    }, []);

    if (giftsList === null) {
        return <Spinner/>;
    }

    return <>
    <h1>Gifts</h1>
        <GiftsTable gifts={giftsList}  onGiftsChange={refreshGiftsList}/>
    </>;

}