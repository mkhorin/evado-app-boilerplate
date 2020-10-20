'use strict';

const parent = require('evado/config/default-security');

module.exports = {

    metaPermissions: [{
        description: 'Full access to data',
        roles: 'administrator',
        type: 'allow',
        actions: 'all',
        targets: {
            type: 'all'
        }
    }],

    permissions: {
        ...parent.permissions,

        'moduleAdmin': {
            label: 'Administration module',
            description: 'Access to the Administration module'
        },
        'moduleOffice': {
            label: 'Office module',
            description: 'Access to the Office module'
        },
        'moduleStudio': {
            label: 'Studio module',
            description: 'Access to the Studio module'
        },
        'moduleApiBaseUpload': {
            label: 'Upload files',
            description: 'Uploading files through the base metadata API module'
        }
    },

    roles: {
        'administrator': {
            label: 'Administrator',
            description: 'Full access to system',
            children: [
                'moduleAdmin',
                'moduleOffice',
                'moduleStudio',
                'moduleApiBaseUpload'
            ]
        },
        'guest': {
            label: 'Guest',
            description: 'Auto-assigned role for anonymous users'
        },
        'user': {
            label: 'User',
            description: 'Default role for authenticated users',
            children: [
                'moduleOffice',
                'moduleApiBaseUpload'
            ]
        }
    },

    rules: {
        'creator': {
            label: 'Creator',
            description: 'Check user binding as object creator',
            config: {
                Class: 'evado/component/meta/rbac/rule/UserRule',
                userAttr: '_creator'
            }
        }
    },

    // bind users to roles
    assignments: {
        'Adam': 'administrator'
    },

    // rules to auto-bind users to roles
    assignmentRules: {        
    }
};