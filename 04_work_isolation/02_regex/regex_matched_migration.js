for (i = 1; i <= 10000; i++) {
    start = new Date().getTime();
    let s = db.customers.find({
        $and: [
            { "address.street": { $regex: RegExp("Dagwiz") } },
            { "firstname": { $regex: RegExp("Jayden") } }
        ]
    })
    print(i, ". total records found: ", s.count(), ", query time (ms): ", ((new Date().getTime()) - start));
}