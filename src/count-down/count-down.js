const getCounterTime = ( endtime ) => {

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
};

jQuery( document ).ready( function( $ ) {

	function stCountDown() {

		let timeRemaining = false;

		$( '.counter-date-time' ).each( function() {

			$this = $( this );

			if ( typeof $this.text() !== 'undefined' ) {

				$this.text();

				timeRemaining = getCounterTime( $this.text() );

				if ( timeRemaining ) {

					let counterID = $this.attr( 'id' );

					$( '#' + counterID ).text( timeRemaining.total );

					$( '#days-' + counterID ).text( timeRemaining.days );
					$( '#hours-' + counterID ).text( timeRemaining.hours );
					$( '#minutes-' + counterID ).text( timeRemaining.minutes );
					$( '#seconds-' + counterID ).text( timeRemaining.seconds );
				}
			}
		} );
	}

	stCountDown();

	setInterval( stCountDown, 1000 );

} );
