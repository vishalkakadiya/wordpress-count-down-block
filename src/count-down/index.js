const { InspectorControls } = wp.editor;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { __experimentalGetSettings } = wp.date;
const { DateTimePicker, Panel, PanelBody, BaseControl } = wp.components;

// Import our CSS files
import './style.scss';
import './editor.scss';

import { getCounterTime } from './get-counter-time.js';
import { displayCounter } from './display-counter.js';

const getDateTimeElement = ( dateTimeElements, isEditor = false ) => {

	return (
		<div className="count-down__container">
			{ displayCounter( dateTimeElements, isEditor ) }
		</div>
	);
};

registerBlockType( 'cdb/count-down-block', {
	title: 'WordPress Count Down',
	icon: 'clock',
	category: 'common',
	attributes: {
		counterDate: {
			type: 'string',
		}
	},

	edit({ attributes, setAttributes }) {

		const settings = __experimentalGetSettings();

		// To know if the current timezone is a 12 hour time with look for an "a" in the time format.
		// We also make sure this a is not escaped by a "/".
		const is12HourTime = /a(?!\\)/i.test(
			settings.formats.time
				.toLowerCase() // Test only the lower case a
				.replace( /\\\\/g, '' ) // Replace "//" with empty strings
				.split( '' ).reverse().join( '' ) // Reverse the string and test for "a" not followed by a slash
		);

		let dateTimeElements = getCounterTime( attributes.counterDate );

		return (
			<div className="count-down">

				<InspectorControls>

					<Panel>

						<PanelBody title={ __( 'Select a Counter Ending Date:', 'count-down-block' ) }>

							<BaseControl>

								<DateTimePicker
									currentDate={ attributes.counterDate }
									onChange={ ( date ) => setAttributes( { counterDate: date } ) }
									is12Hour={ is12HourTime }
									className="count-down__datepicker"
								/>

							</BaseControl>

						</PanelBody>

					</Panel>

				</InspectorControls>

				{ getDateTimeElement( dateTimeElements, true ) }

			</div>
		);
	},

	save({ attributes }) {

		let dateTimeElements = getCounterTime( attributes.counterDate );

		return getDateTimeElement( dateTimeElements );
	},
});
