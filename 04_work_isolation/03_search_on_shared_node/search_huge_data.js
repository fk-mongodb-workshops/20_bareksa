var randomstring = require("randomstring");

for (i = 1; i <= 1000; i++) {
    start = new Date().getTime();
    let s = db.customers.aggregate(
        [
            {
                $search: {
                    index: 'search_index_keyword',
                    compound: {
                        should: [
                            {
                                wildcard: {
                                    query: `*Jayden*`,
                                    path: 'firstname'
                                }
                            },
                            {
                                wildcard: {
                                    query: `*Daghiw*`,
                                    path: 'address.street'
                                }
                            }
                        ]
                    }
                }
            },
            { $count: 'count' }
        ],
        { maxTimeMS: 60000, allowDiskUse: true }
    ).toArray()

    print(i, ". total records found: ", s.length > 0 ? s[0].count : 0, ", query time (ms): ", ((new Date().getTime()) - start));
}