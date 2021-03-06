'hideFromShooter' : {
    'events' : {
        'replaceProp': ['prof-bell', 'bell-hiding'],
        'setObjectives' : [['hideFromShooter', 'Choose what to do: Run Hide or Fight', 'turnOffLights', 'Turn off the lights.',
                            'pullDownWindowShade', 'Pull down the window shade', 'hideByDoor', 'Hide by the door', 'silencePhone',
                            'Silence your cell phone', 'lockTheDoor', 'Lock the door to the room.']],
        'showModal': ['BANG! BANG!','[You hear gunshots right outside the classroom door! Hint: You can hide in the classroom by clicking on Professor Bell who is hiding next to the door. You might need to do more than just hide to survive though! Click on items such as door handles and light switches to interact with them.]']
    },
    'enableTriggers' : ['turnedOffLights', 'pulledDownShade', 'hiddenByDoor', 'silencedPhone', 'lockedTheDoor', 'failedToHide',
                        'failedToTurnOffLights', 'failedToPullDownShade', 'failedToHideByDoor', 'failedToSilencePhone', 'failedToLockTheDoor',
                        'shooterCloseGetShot', 'chanceofEscape', 'abort', 'shooterEnters011', 'studentRunsFrom011'],
    
    'startTriggers' : ['failedToLockTheDoor', 'hiddenFromShooter']
},
'hideFromShooter_041' : {
    'disabled': true,
    'events' : {
        'setObjectives' : [['lockTheDoor041', 'Prevent the shooter from getting into the room!', 'turnOffLights041', 'Turn off the lights in the NW room of the library.',
                            'pullDownWindowShade041', 'Pull down the window shades in the NW Room of the library', 'hideByDoor041', 'Hide by the door in the NW Room of the library']],
                            
        'showModal': ['You hear gunshots! They are close by, somehwere in the library! It looks like the door to this room might lock!']
    },
    'enableTriggers' : ['turnedOffLights041', 'pulledDownShade041', 'hiddenByDoor041', 'lockedTheDoor041', 'failedToHide041',
                        'failedToTurnOffLights041', 'failedToPullDownShade041', 'failedToHideByDoor041', 'failedToLockTheDoor041',
                        'shooterCloseGetShot', 'shooterEnters041'],
    
    'startTriggers' : ['failedToLockTheDoor041', 'hiddenFromShooter041', 'hiddenFromShooter041']
}
