import React,{useState} from "react";

function Item({member,increasePoints}){
    const {id, name: initialName, age: initialAge, image: initialImage, points}= member;
    const [name, setName] = useState(initialName);
    const [age, setAge] = useState(initialAge);
    const [image, setImage] = useState(initialImage);
    const [localPoints, setLocalPoints] = useState(points);
    const [searchResult, setSearchResult] = useState(null);
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [message,setMessage]=useState('');

    const handleIncreasePoints = () =>{
        setLocalPoints(localPoints + 1);
    };
    const handleSearch = () =>{
        setShowSearchResult(true);
        console.log(`Search done for ${name}`);
    };
    const handleDone = () =>{
        increasePoints(id);
        setMessage('Points successfully updated');
        console.log(`Points increased for ${name}`);
    };
    console.log('Rendering Item component for member:', member);
    console.log('Name:',name);
    console.log('Age:',age);
    console.log('Image:',image);
    console.log('Local Points:',localPoints);
    console.log('Search Result:',searchResult);

    return(
        <>
             <tr className="member-items">
                <td>{name}</td>
                <td>{age}</td>
                <td><img src={image} alt={name}/></td>
                <td>
                    <input type="number" value={localPoints} onChange={(e)=> setLocalPoints(parseInt(e.target.value))}/>
                    <button onClick={handleIncreasePoints}>Increase Points</button>
                </td>
                <td>
                    <button onClick={handleDone}>Done</button>
                </td>
             </tr>
             {message &&(
                <tr>
                    <td colSpan="5">{message}</td>
                </tr>
             )}
             {showSearchResult && searchResult &&(
                <tr>
                    <td>{searchResult.name}</td>
                    <td>{searchResult.age}</td>
                    <td><img src={searchResult.image} alt={searchResult.name}/></td>
                </tr>
             )}
        </>
    );
}

export default Item;