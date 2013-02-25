'mrsfooconvo': {
    '1': {
        'check': [
            {'has':['Chalk'], 'goto': 2},
            {'objectivesCompleted':['getChalkForTeacher'], 'goto': '3'}
        ],
        'message': 'Welcome! Before we get started, could you please hand me my chalk from that VERY sturdy and safe desk?',
        'replies': {
            'Of course.': 0
        },
        'triggers': ['getChalkObjective']
    },
    '2': {
        'triggers': ['completeChalkObjective'],
        'message': 'Thank you! Okay, so today we\'ll be covering chapter.... wait, did you feel that?',
        'replies': {
            'Yes.... what was that?': 3,
        }
    },
    '3': {
        'message': 'OHHHH NOOOO IT\'S AN EARTHQUAKE!!!',
        'replies': {
            '[stay calm]': 0
        },
        'triggers': ['shakeThingsUp'],
    }
}
