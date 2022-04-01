import React from 'react';
import {GiftEntity} from './gifts';
import {GiftTableRow} from "./GiftTableRow";

interface Props {
    gifts: GiftEntity[]
}

export const GiftsTable = (props: Props) => (
    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>COUNT</th>
        </tr>
        </thead>
        <tbody>
        {
            props.gifts.map(gift => <GiftTableRow gift={gift} key={gift.id}/>)
        }
        </tbody>
    </table>

);