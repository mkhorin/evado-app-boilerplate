'use strict';

const Base = require('areto/view/ViewModel');

module.exports = class ViewModel extends Base {

    async resolveTemplateData () {
        return {}; // to override
    }

    async prepareModels (models) {
    }
};