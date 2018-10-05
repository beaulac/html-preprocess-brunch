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

    _doCompile({ data }) {
        const processor = new proc();
        return processor.process(data, this.config);
    }
}

FilePreprocessor.prototype.brunchPlugin = true;
FilePreprocessor.prototype.extension = 'html';
FilePreprocessor.prototype.targetExtension = 'html';
FilePreprocessor.prototype.staticTargetExtension = 'html';
FilePreprocessor.prototype.type = 'template';

module.exports = FilePreprocessor;
