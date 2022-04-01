import React, {useEffect, useState} from 'react';
import {GiftEntity} from "./gifts";
import { GiftsTable } from './GiftsTable';

export const GiftsList = () => {
    const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null);

    const uri: string = `http://localhost:3001/gift`;

    useEffect(() => {
        (async () => {
            const res = await fetch(uri);
            const data = await res.json();
            setGiftsList(data.giftsList)

        })();
    }, []);



    if (giftsList === null) {
        return <p>Loading...</p>
    }

    return <>
    <h1>Gifts</h1>
        <GiftsTable gifts={giftsList}  />

    </>;

}