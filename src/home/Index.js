import React from 'react';

import { accountService } from '../services';

function Home() {
    const user = accountService.userValue;

    return (
        <div className="p-4">
            <div className="container">
                <h1> Hi {user.firstName}!</h1>
                <p> You're logged in to {company.name}</p>
            </div>
        </div>
    )
}