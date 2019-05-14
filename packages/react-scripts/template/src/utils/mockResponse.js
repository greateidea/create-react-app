module.exports = function(app, mockData) {
    if(!mockData) return;

    for (let key in mockData) {
        const requestInfo = key.split(' ');
        const method = requestInfo[0].toLowerCase();
        const path = requestInfo[1];
        const data = mockData[key];

        app[method](path, function (req, res) {
            console.log('get mock data from: ', key);
            res.json(data);
        })
    }
};
