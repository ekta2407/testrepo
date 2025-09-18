import React from 'react';

function Personal()
{
    return(
        
        <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
            <div>
                <h1>Personal Details</h1>
            </div>
            <div class="mb-3">
                <label for="txtFName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="txtFName" placeholder="Enter your first name"></input>
            </div>
            <div class="mb-3">
                <label for="txtLName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="txtLName" placeholder="Enter your last name"></input>
            </div>
            <div class="mb-3">
                <label for="txtAddress" class="form-label">Enter address</label>
                <textarea class="form-control" id="txtAddress" rows="3"></textarea>
            </div>
            <div class="mb-3">
                <label for="txtCity" class="form-label">City</label>
                <input type="text" class="form-control" id="txtCity" placeholder="Enter city"></input>
            </div>
            <div class="mb-3">
                <label for="txtEmail" class="form-label">Email</label>
                <input type="email" class="form-control" id="txtEmail" placeholder="Enter your email address"></input>
            </div>
            <div class="mb-3">
                <label for="txtPhone" class="form-label">Email</label>
                <input type="text" class="form-control" id="txtPhone" placeholder="Enter your phone number"></input>
            </div>
            <div class="mb-3">
                <label for="txtBDate" class="form-label">Birth date</label>
                <input type="date" class="form-control" id="txtBDate" placeholder="Select your Birth date"></input>
            </div>
      </div>
    )
}

export default Personal