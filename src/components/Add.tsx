import React, { useState } from "react";
import { addUser } from '../store/features/personSlice';
import { useAppDispatch } from "../store/features/store";

const Add = () => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState("");

    const handleClick = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission
        dispatch(addUser({ name: name }));
        setName(""); // Clear the input field after dispatching
    };

    return (
        <form>
            <label style={{ color: 'red' }}>Person:</label>
            <br />
            <input
                style={{ width: '200px', border: '2px solid black' }}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <button
                style={{ background: 'blue', color: 'white', margin: '5px', padding: '10px', borderRadius: '10px' }}
                onClick={handleClick}
            >
                Add
            </button>
        </form>
    );
};

export default Add;
