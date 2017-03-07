QUnit.test("Coffeerun testing", function(assert) {
    var ds = new App.DataStore();
    assert.equal(ds.add('m@bond.com', 'tea'));
    assert.equal(ds.add('james@bond.com', 'eshpressho'));
    assert.ok(ds.getAll());
    assert.equal(ds.remove('james@bond.com'));
    assert.ok(ds.getAll());
    assert.ok(ds.get('m@bond.com'));
    assert.ok(ds.get('james@bond.com'));



    assert.equal(myTruck.createOrder({
        emailAddress: 'me@goldfinger.com',
        coffee: 'double mocha'
    }));
    assert.equal(myTruck.createOrder({
        emailAddress: 'dr@no.com',
        coffee: 'decaf'
    }));
    assert.equal(myTruck.createOrder({
        emailAddress: 'm@bond.com',
        coffee: 'earl grey'
    }));
    assert.ok(myTruck.printOrders());
    assert.equal(myTruck.deliverOrder('dr@no.com'));
    assert.equal(myTruck.deliverOrder('m@bond.com'));
    assert.ok(myTruck.printOrders());


});
