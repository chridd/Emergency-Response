'room111': {
    'id': 'hall111',
    'x': 1,
    'y': 1,
    '_triggers' : ['timeTillDeath'],
    '_walls': {
        'e': {
            'name': 'EHall111',
            'image': 'R111-east.jpg'
        },
        'w': {
            'name': 'WHall111',
            'image': 'R111-west.jpg',
            'destination': {
                'x': 0
            }
        },
        'n': {
            'name': 'NHall111',
            'image': 'R111-north.jpg',
            'destination': {
                'y': 2
            }
        },
        's': {
            'name': 'SHall111',
            'image': 'R111-south.jpg',
            'destination': {
                'y': 0
            },
            '_props': {
                'shooterR111': {
                    'name': 'shooterR111',
                    'image': 'shooter.png',
                    'width': 96,
                    'height': 192,
                    'left': 550,
                    'top': 300
                }
            }
        }
    }
}