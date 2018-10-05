const proc = require('brunch-preprocessor');

class FilePreprocessor {
    constructor(config) {
        this.config = config;
    }

    async compile(params) {
        return this._doCompile(params);
    }

    async compileStatic(params) {
        return this._doCompile(params);
    }

    _doCompile(params) {
        const processor = new proc();
        params.data = processor.process(params.data, this.config);
        return params;
    }
}

FilePreprocessor.prototype.brunchPlugin = true;
FilePreprocessor.prototype.pattern = /\.(?:html)$/;
FilePreprocessor.prototype.type = 'template';

module.exports = FilePreprocessor;
