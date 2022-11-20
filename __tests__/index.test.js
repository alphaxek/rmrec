const fs = require("fs");

const param = ['./__tests__/to-be-deleted-test-data'];

describe('Delete Folder', () => {
    it('should delete a given folder', () => {
        expect(fs.existsSync(param[0])).toBeFalsy();
    });
});

