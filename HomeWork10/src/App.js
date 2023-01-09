import React from 'react';

import EditUserProfile from "./components/main/EditUserProfile/EditUserProfile";
import ChangePasswordForm from "./components/main/ChangePasswordForm/ChangePasswordForm";

import "./App.css";

const App = () => {
  return (
      <main>
        <EditUserProfile/>

        <ChangePasswordForm/>
      </main>
  );
};

export default App;
