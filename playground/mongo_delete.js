const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a39d8b3d0fb6a0992d84b62')

    db.collection('Users').deleteMany({name: 'Sarah'}).then((resObject) => {
        console.log(`Sucessfully deleted ${resObject.result.n} note(s)`);
    }, (err) => {
        console.log('Unable to delete todos', err);
    });

    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((resObject) => {
    //     console.log(`Sucessfully deleted ${resObject.result.n} note`);
    // }, (err) => {
    //     console.log('Unable to delete todo', err);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5a3aa318caad2b5b349a6f09')
    }).then((resObject) => {
        console.log(resObject);
    }, (err) => {
        console.log('Unable to delete todo', err);
    });

    client.close();
});
