const { __ } = wp.i18n;

const displayCounter = ( dateTimeElements ) => {

	let uniqID = Date.parse( new Date( dateTimeElements.total ) );

	let daysID    = 'days-' + uniqID;
	let hoursID   = 'hours-' + uniqID;
	let minutesID = 'minutes-' + uniqID;
	let secondsID = 'seconds-' + uniqID;

	return (
		<div className="count-down__container">

			<div className="counter-date-time" id={ uniqID }>{ dateTimeElements.total }</div>

			<div className="count-down__element count-down__days">
				<span className="count-down__number" id={ daysID }>0</span>
				<span className="count-down__label">{ __( 'Day(s)', 'count-down-block' ) }</span>
			</div>

			<div className="count-down__element count-down__hours">
				<span className="count-down__number" id={ hoursID }>0</span>
				<span className="count-down__label">{ __( 'Hour(s)', 'count-down-block' ) }</span>
			</div>

			<div className="count-down__element count-down__minutes">
				<span className="count-down__number" id={ minutesID }>0</span>
				<span className="count-down__label">{ __( 'Minute(s)', 'count-down-block' ) }</span>
			</div>

			<div className="count-down__element count-down__seconds">
				<span className="count-down__number" id={ secondsID }>0</span>
				<span className="count-down__label">{ __( 'Second(s)', 'count-down-block' ) }</span>
			</div>

		</div>
	);
};

exports.displayCounter = displayCounter;



