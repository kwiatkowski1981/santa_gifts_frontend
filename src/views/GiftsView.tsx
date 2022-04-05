import React from 'react';
import {GiftsList} from "../components/gifts/GiftsList";
import {AddGift} from "../components/AdGift/AddGift";
import {Link} from "react-router-dom";

export const GiftsView = () => (
    <>
    <GiftsList />
    <AddGift />

    </>
)