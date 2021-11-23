import React, { useState } from 'react';
import UserNavbar from '../../Components/UserNavbar/UserNavbar';

const Organisations = () => {

    const [data, setData] = useState(["Organisation 1", "Organisation 2", "Organisation 3", "Organisation 4"])

    return (
        <div>
            <UserNavbar title="Organisations:" data={data} />

        </div>
    );
}

export default Organisations;
