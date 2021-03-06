'room110': {
    'id': 'hall110',
    'x': 1,
    'y': 1,
    '_walls': {
        'e': {
            'name': 'EHall110',
            'image': 'R110-east.jpg'
        },
        'w': {
            'name': 'WHall110',
            'image': 'R110-west.jpg'
        },
        'n': {
            'name': 'NHall110',
            'image': 'R110-north.jpg',
            'destination': {
                'y': 2
            },
            '_props': {
                'foo': {
                    'name': 'foo',
                    'image': 'fooRight.png',
                    'width': 20,
                    'height': 50,
                    'left': 520,
                    'top': 297
                }
            }
        },
        's': {
            'name': 'SHall110',
            'image': 'R110-south.jpg',
            'destination': {
                'y': 0
            }
        }
    }
}
