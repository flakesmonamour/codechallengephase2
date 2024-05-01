import React from "react";
import Item from "./Item"

function List({members,increasePoints}){

    console.log('Members:',members);

    return(
        <div className="list">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Image</th>
                        <th>Points</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map(member =>{
                        console.log('Member ID: ', member.id);
                        console.log('Member Name: ', member.name);
                        console.log('Member Age: ', member.age);
                        console.log('Member Image: ', member.image);
                        console.log('Member Points: ', member.points);

                        return(
                            <Item key={member.id} member={member} increasePoints={increasePoints}/>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default List;