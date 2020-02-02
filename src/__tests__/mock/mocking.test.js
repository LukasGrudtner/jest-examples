describe('Mocking a function', () => {
    function forEach(items, callback) {
        for (let i = 0; i < items.length; i++) {
            callback(items[i]);
        }
    }

    const mockCallback = jest.fn(x => 42 + x);
    forEach([0, 1], mockCallback);

    test('The mock function is called twice', () => {
        expect(mockCallback.mock.calls.length).toBe(2);
    });

    test('The first argument of the first call to the function was 0', () => {
        expect(mockCallback.mock.calls[0][0]).toBe(0);
    });

    test('The return value of the first call to the function was 42', () => {
        expect(mockCallback.mock.results[0].value).toBe(42);
    });
});










describe('Mocking return values', () => {
    const myMock = jest.fn();

    myMock
        .mockReturnValueOnce(0)
        .mockReturnValueOnce('x')
        .mockReturnValueOnce(true);

    test('Return of mocking function', () => {
        expect(myMock()).toBe(0);
        expect(myMock()).toBe('x');
        expect(myMock()).toBe(true);
    });
});










describe('Mocking modules', () => {
    const axios = require('axios');

    class Users {
        static all() {
            return axios
                .get('/users.json')
                .then(resp => resp.data);
        }
    }

    jest.mock('axios');

    test('Should fetch users', () => {
        const users = [{
            name: 'Bob'
        }];
        const resp = {data: users};
        axios.get.mockResolvedValue(resp);

        return Users.all().then(data => expect(data).toEqual(users));
    })
});










describe('Mocking implementations', () => {
    const sum = require('../../sum');

    jest.mock('../../sum');

    test('My function', () => {
        sum.mockImplementation((a, b) => a * b);
        expect(sum(2, 3)).toEqual(6);
    });
});