var randomstring = require("randomstring");

for (i = 1; i <= 10000; i++) {
    start = new Date().getTime();
    let s = db.customers.find({
        $and: [
            { "address.street": { $regex: RegExp(`${randomstring.generate(4)}`) } },
            { "firstname": { $regex: RegExp(`${randomstring.generate(4)}`) } }
        ]
    })
    print(i, ". total records found: ", s.count(), ", query time (ms): ", ((new Date().getTime()) - start));
}