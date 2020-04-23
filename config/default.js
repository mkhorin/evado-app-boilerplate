'use strict';

module.exports = {

    title: 'Boilerplate',

    components: {
        'db': {
            settings: {
                'database': process.env.MONGO_NAME || 'evado-boilerplate',
            }
        },
        'cookie': {
            secret: 'boilerplate.evado'
        },
        'session': {
            secret: 'boilerplate.evado'
        },
        'i18n': {
            // language: 'ru'
        },
        'router': {
            // defaultModule: 'front'
        },
        'fileStorage': {
        }
    },
    metaModels: {
        'document': {
            Class: require('evado-meta-document/base/DocMeta'),
            DataHistoryModel: {
                Class: require('evado-module-office/model/DataHistory')
            },
            UserModel: {
                Class: require('evado-module-office/model/User')
            }
        },
        'navigation': {
            Class: require('evado-meta-navigation/base/NavMeta')
        }
    },
    modules: {
        'api': {
            config: {
                modules: {
                    'document': {
                        Class: require('evado-api-document/Module')
                    },
                    'navigation': {
                        Class: require('evado-api-navigation/Module')
                    }
                }
            }
        },
        'studio': {
            Class: require('evado-module-studio/Module')
        },
        'office': {
            Class: require('evado-module-office/Module')
        },
        'account': {
            Class: require('evado-module-account/Module')
        },
        'admin': {
            Class: require('evado-module-admin/Module'),
            params: {
                separateNextCommonMenuItem: true
            }
        }
    },
    users: require('./default-users'),
    security: require('./default-security'),
    tasks: require('./default-tasks'),
    utilities: require('./default-utilities'),
    params: {
    },
    widgets: {
        'commonMenu': {
        }
    }
};