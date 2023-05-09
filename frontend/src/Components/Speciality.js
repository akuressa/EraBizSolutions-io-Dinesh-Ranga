import React, { useState } from 'react';
import '../Scss/Searchbar.scss';
import {Input, Checkbox} from 'antd';

const { Search } = Input;

function SpecialityForm() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };
  
  const checkboxOptions = [
    { label: 'Accident and emergine medicine', value: 'Accident and emergine medicine' },
    { label: 'Addiction Medicine', value: 'Addiction Medicine' },
    { label: 'Aerospace medicine', value: 'Aerospace medicine' },
    { label: 'Allergy', value: 'Allergy' },
    { label: 'Allergy and immunology', value: 'Allergy and immunology' },
    { label: 'Anaesthesiology', value: 'Anaesthesiology' },
    { label: 'Accident and emergine medicine New', value: 'Accident and emergine medicine New' },
    { label: 'Addiction Medicine New', value: 'Addiction Medicine New' },
    { label: 'Aerospace medicine New', value: 'Aerospace medicine New' },
    { label: 'Allergy New', value: 'Allergy New' },
    { label: 'Allergy and immunology New', value: 'Allergy and immunology New' },
    { label: 'Anaesthesiology New', value: 'Anaesthesiology New' },
  ];

  return (
    <div className="specialityForm">
        <form onSubmit={handleSubmit}>
            <Search placeholder="Search" value={searchQuery} onChange={handleInputChange} enterButton />
        </form>
        <Checkbox.Group options={checkboxOptions} style={{ maxHeight: 270, overflowY: 'scroll' }} scrollable className="checkbox-group" />
    </div>
  );
}

export default SpecialityForm;
