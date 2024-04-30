import React,{useState} from 'react';

function Items({member,increasePoints}){
    const {id,name:initialName, age:initialAge, image:initialImage, points}= member;
    const [name,setName]=useState(initialName);
    const [age,setAge]=useState(initialAge);
    const [image,setImage]=useState(initialImage);
    const [localPoints,setLocalPoints]=useState(points);
    const [searchResult,setSearchResult]=useState(null);

    const handleIncreasePoints= ()=> {
        increasePoints(id);
        setLocalPoints(localPoints+1);
    };

    const handleSearch= ()=> {
        setSearchResult(member);
    };

    return(
        <>
           <tr className='member-item'>
            <td>{name}</td>
            <td>{age}</td>
            <td><img src={image} alt={name}/></td>
            <td>
                <input type="number" value={localPoints} onChange={(e)=>setLocalPoints(parseInt(e.target.value))}/>
            </td>
            <td>
                <button onClick={handleIncreasePoints}>Increase Points</button>
            </td>
            <td>
                <button onClick={handleSearch}>Done</button>
            </td>
           </tr>
           {searchResult &&(
            <tr>
                <td>{searchResult.name}</td>
                <td>{searchResult.age}</td>
                <td><img src={searchResult.image} alt={searchResult.name}/></td>
                <td>{searchResult.points}</td>
            </tr>
           )}
        </>
    );
}

export default Items;