import React from 'react';
import { useAppSelector } from '../store/features/store';

const List = () => {
    const persons = useAppSelector((state) => state.person.persons);

    return (
        <div>
           <h1>Person Details</h1>
           <table className='table table-bordered w-25'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {persons.map((pr)=>(
                    <tr>
                        <td>{pr.id}</td>
                        <td>{pr.name}</td>
                    </tr>
                ))}
            </tbody>
           </table>
        </div>
    );
};

export default List;
