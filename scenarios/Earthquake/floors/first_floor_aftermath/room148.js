'room148': {
    'id': 'hall148',
    'x': 1,
    'y': 4,
    '_walls': {
        'e': {
            'name': 'EHall148',
            'image': 'R140-east.jpg',
            'destination': {
                'x': 2
            },
			'_props': {
                'mrs-wheelchair': {
                    'name': 'mrs_wheelchair',
                    'image': 'mrs_wheelchair.png',
                    'width': 150,
                    'height': 150,
                    'left': 600,
                    'top': 350,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Mrs Lydia'
                    }
                },
                'wheelchair':{
                    'name':'the_wheelchair',
                    'image':'wheelchair.png',
                    'width':150,
                    'height':150,
                    'left': 450,
                    'top': 300,
                    'action':'showConversation',
                    'actionVariables': {
                        'conversationName' : 'wheelchair'
                    }
                }
            }
        },
        'w': {
            'name': 'WHall148',
            'image': 'R140-west.jpg',
            'destination': {
                'x': 0
            },
        },
        'n': {
            'name': 'NHall148',
            'image': 'R140-north.jpg',
            'destination': {
                'y': 5
            }
        },
        's': {
            'name': 'SHall148',
            'image': 'R140-south.jpg',
            'destination': {
                'y': 3
            }
        }
    }
}
