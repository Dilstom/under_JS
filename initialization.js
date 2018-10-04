var people = [
    {
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            '111 Address Rd.',
            '222 Address St.'
        ]
    },
    {
        firstname: 'Jane',
        lastname: 'Eare',
        addresses: [
            '333 Address Ct.',
            '444 Address Sq.'
        ],
        greet: function () {
            return 'Hello!';
        }
    }
]
console.log(people)