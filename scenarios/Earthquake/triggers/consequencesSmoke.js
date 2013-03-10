'activatePassout' : {
	'enableTriggers' : ['passout'],
	'disableTriggers' : ['aftershock'],
	'lives' : Infinity
},
'deactivatePassout' : {
	'disableTriggers' : ['passout'],
	'enableTriggers' : ['aftershock'],
	'lives' : Infinity
},
'passout' : {
	'timeDelay' : 250,
	'enableTriggers' : ['playerInjured'],
	'startTriggers' : ['wakeup'],
    'events' : {
	    'warpPlayer' : ['blackout',3,3,8],
		'showOnScreenMessage' : ['The smoke clouds your vision as you wade through it.  Your lungs heave.  You colaspe to the floor and blackout.'],
		'failObjective' : ['avoidObstacles']
	},
	'disabled' : true,
	'disableTriggers' : ['passout'],
	'lives' : Infinity
},
'wakeup' : {
	'timeDelay' : 5000,
	'events' : {
		'warpPlayer' : ['n'],
		'showOnScreenMessage' : ['You wake up some time later still coughing, but alive.']
	},
	'lives' : Infinity
}