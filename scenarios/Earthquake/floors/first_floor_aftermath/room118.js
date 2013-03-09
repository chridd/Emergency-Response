'room118': {
    'id': 'hall118',
    'x': 1,
    'y': 1,
	'_triggers' : ['removeRunner'],
    '_walls': {
        'e': {
            'name': 'EHall118',
            'image': 'R110-east.jpg'
        },
        'w': {
            'name': 'WHall118',
            'image': 'R110-west.jpg'
        },
        'n': {
            'name': 'NHall118',
            'image': 'R110-north.jpg',
            'destination': {
                'y': 2
            },
			'_props' : {
                'Downedwire': {
                    'name': 'Downedwire',
                    'image': 'downwiresNew.png',
                    'width': 160,
                    'height': 138,
                    'left': 483,
                    'top': 220
                },
				'Movedwire': {
                    'name': 'Movedwire',
                    'image': 'movedwiresNew.png',
                    'width': 160,
                    'height': 138,
                    'left': 483,
                    'top': 220
                },
		        'GirlRunner2' : {    
					'name': 'GirlRunner2',
                    'image': 'RunnerFront.png',
                    'width': 150,
                    'height': 300,
                    'left': 475,
                    'top': 250,
					'action': 'showConversation',
					'actionVariables': {
                        'conversationName': 'Luke'
                    }
				}
            }
		},
        's': {
            'name': 'SHall118',
            'image': 'R110-south.jpg',
            'destination': {
                'y': 0
            }
        }
    }
}
