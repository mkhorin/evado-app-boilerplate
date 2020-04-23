'use strict';

const parent = require('evado/config/default-security');

module.exports = {

    metaPermissions: [{
        description: 'Full access to data',
        type: 'allow',
        roles: ['administrator'],
        actions: ['all'],
        targets: [{
            type: 'all'
        }]
    }],
    permissions: {
        ...parent.permissions,

        'moduleAdmin': {
            label: 'Admin module'
        },
        'moduleOffice': {
            label: 'Office module'
        },
        'moduleStudio': {
            label: 'Studio module'
        }
    },
    roles: {
        'administrator': {
            label: 'Administrator',
            description: 'Full access to all',
            children: [
                'moduleAdmin',
                'moduleOffice',
                'moduleStudio',
                'upload'
            ]
        },
        'guest': {
            label: 'Guest',
            description: 'Auto-assigned role for unauthenticated users'
        }
    },
    // bind users to roles
    assignments: {
        'Adam': ['administrator']
    }
};