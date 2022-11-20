const fs = require("fs");

const param = ['./to-be-deleted-test-data'];

describe('Delete Folder', () => {
    it('should delete a given folder', () => {
        let result = false;
        if(fs.existsSync(param[0])) {
            result = true;
        }
        expect(result).toBeDefined();
        expect(result).toBeFalsy();
    });
});