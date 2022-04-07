// import React, {useEffect, useState} from 'react';
// import {ListChildrenRes} from 'types';
// import {Link, useParams} from "react-router-dom";
//
// export const SingleChildView = () => {
//     // todo useState TYP down below
//     const [data, setData] = useState<ListChildrenRes | null>(null);
//     const {idOfChild} = useParams();
//
//
//     useEffect(() => {
//         (async () => {
//             const res = await fetch(`http://localhost:3001/child/${idOfChild}`);
//             setData(await res.json());
//         })();
//     }, []);
// 2
//     if (data === null) {
//         return null;
//     }
//
//     return <>
//         <h2>{data.child.name}</h2>
//         <p>This Child has ID <strong>{data.child.id}</strong></p>
//         <p>
//             <Link to={'/child'}>Back to the gift List</Link>
//         </p>
//     </>
//
//
// }

export  {}