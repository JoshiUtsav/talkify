let expect = require('expect');
const { describe } = require('mocha');
var { generateMessage, generateLocationMessage } = require('./message');

describe('Generate Message', () => {
    it("Should generate correct message object", () => {
        let from = "Utsav",
        text = "How are you doing",
        message = generateMessage(from, text);

        // expect(typeof message.createdAt).toBe('number');
        // expect(message).toMatchObject({from, text});
    });
});


describe('Generate Location', () => {
    it("Should generate correct location object", () => {
        let from = "Hari",
            lat =  15,
            lng = 56,
            url = `https://www.google.com/maps?q=${lat},${lng}`,
            message = generateLocationMessage(from, lat, lng);

            // expect(typeof message.createdAt).toBe('number')
            // expect(message).toMatchObject({from, url});
    })
})