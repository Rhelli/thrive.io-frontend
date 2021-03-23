import React from 'react';
import { useHistory } from 'react-router-dom';
import ManagePropertiesNavbarComponent from './components/ManagePropertiesNavbarComponent/ManagePropertiesNavbarComponent';

const ManagePropertiesContainer = () => {
  const history = useHistory();
  const handleNewPropertyClick = () => history.push('/manage-properties/new');

  return (
    <div>
      <ManagePropertiesNavbarComponent
        handleNewPropertyClick={handleNewPropertyClick}
      />
    </div>
  );
};

export default ManagePropertiesContainer;
