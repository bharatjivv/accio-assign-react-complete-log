import React, {useState} from 'react';

function ListItem () {
    const [searchItem, setSearchItem] = useState('');
    // console.log(searchItem)
    
    return (
        <div>
            <input value={searchItem} placeholder="Enter search" onChange={(e) => { setSearchItem(e.target.value)}}/>
            <p>{searchItem}</p>
        </div>
    )
}

export default ListItem;