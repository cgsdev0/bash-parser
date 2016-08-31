module.exports = {
	ast: {
		type: 'complete_command',
		text: 0,
		commands: [{
			type: 'word',
			text: 1
		}, {
			type: 'word',
			text: 2
		}]
	},
	expected: [
		[
			[
				'word on 1'
			],
			[
				'word on 2'
			]
		],
		'complete_command on 0'
	]
};
