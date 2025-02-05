import React from 'react';
import { Pencil } from 'lucide-react';
import { useState } from 'react';

function ConditionalRendering() {
  const [isEditing, setIsEditing] = useState(false);
  const handleClick = () => {
    setIsEditing(!isEditing);
  };
  const handleUpdateClick = () => {
    setIsEditing(false);
  };
  return (
    <div>
      <Pencil
        onClick={handleClick}
        size={50}
        className={isEditing ? 'text-sky-500' : 'text-red-500'}
      />
      {isEditing && (
        <div>
          <input
            type="text"
            className="border border-sky-500 rounded-lg w-64"
          />{' '}
          <button onClick={handleUpdateClick}>Update</button>
        </div>
      )}
    </div>
  );
}

export default ConditionalRendering;

// setIsEditing &&  <input type="text"/>
