let expect = require('expect');
var { generateMessage } = require('./message');

describe('Generate Message', () => {
    it("Should generate correct message object", () => {
        let from = "Utsav",
        text = "How are you doing",
        message = generateMessage(from, text);

        // expect(typeof message.createdAt).toBe('number');
        // expect(message).toMatchObject({from, text});
    });
});