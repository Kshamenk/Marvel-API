import React from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
 const {detailId} = useParams();
 
 useEffect(() => {
    
    
 }, []);


    return(
        <div>
            <h1>Detail</h1>

        </div>
    )
}