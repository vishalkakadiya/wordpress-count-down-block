export function getCounterTime( endtime ) {

	let counterDate = new Date( endtime );

	let total   = Date.parse( counterDate ) - Date.parse( new Date() );
	let seconds = Math.floor( ( total / 1000 ) % 60 );
	let minutes = Math.floor( ( total / 1000 / 60 ) % 60 );
	let hours   = Math.floor( ( total / ( 1000 * 60 * 60 ) ) % 24 );
	let days    = Math.floor( total / ( 1000 * 60 * 60 * 24 ) );

	return {
		'total': endtime,
		'days': days >= 0 ? days : 0,
		'hours': hours >= 0 ? hours : 0,
		'minutes': minutes >= 0 ? minutes : 0,
		'seconds': seconds >= 0 ? seconds : 0
	};
}
