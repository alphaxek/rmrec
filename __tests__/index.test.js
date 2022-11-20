const fs = require("fs");

const param = ['./to-be-deleted-test-data'];

describe('Delete Folder', () => {
    it('Should delete a given folder', () => {
        expect(fs.existsSync('./__tests__/to-be-deleted-test-data')).toBeFalsy();
    });
});