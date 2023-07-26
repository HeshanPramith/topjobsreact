import React from 'react';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <div className='lang-selector'>
            {/* <select onChange={changeLanguage}>
                <option value="en">English</option>
                <option value="si">Sinhala</option>
            </select> */}
            <Form.Label>Select Your Language</Form.Label>
            <Form.Select defaultValue="Select" className='me-2' size='sm' onChange={changeLanguage}>
                <option value="en">English</option>
                <option value="si">Sinhala</option>
            </Form.Select>
        </div>
    );
};

export default LanguageSelector;
