import React from "react";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

const ConfirmDeleteDialog = ({ onDelete }) => {  // Added parentheses around `onDelete`
    confirmAlert({
        title: 'Confirm Deletion',
        message: 'Are you sure you want to delete this creator? This action is IRREVERSIBLE!',
        buttons: [
            {
                label: 'Yes',
                onClick: () => onDelete(),
            },
            {
                label: 'No',
                onClick: () => {
                    alert('Redirecting to main page...');
                    window.location = '/';
                }
            }
        ]
    });
};

export default ConfirmDeleteDialog;
