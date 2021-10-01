<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package cdb
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function st_count_down_block_assets() { // phpcs:ignore

	// Register block styles for both frontend + backend.
	wp_register_style(
		'count-down-block-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		is_admin() ? array( 'wp-editor' ) : null, // Dependency to include the CSS after it.
		'1.0.0'
	);

	// Register block editor script for backend.
	wp_register_script(
		'count-down-block-fronend-js', // Handle.
		plugins_url( '/src/count-down/count-down.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'jquery' ), // Dependencies, defined above.
		'1.0.0',
		true // Enqueue the script in the footer.
	);

	// Register block editor script for backend.
	wp_register_script(
		'count-down-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-dom-ready', 'wp-edit-post', 'wp-editor' ), // Dependencies, defined above.
		'1.0.0',
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'count-down-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		'1.0.0'
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'cgb/count-down-block',
		array(
			// Enqueue count-down.js for frontend.
			'script'        => 'count-down-block-fronend-js',
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'count-down-block-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'count-down-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'count-down-block-editor-css',
		)
	);
}
add_action( 'init', 'st_count_down_block_assets' );

/**
 * Allow styles to be loaded in the backend.
 */
function st_count_down_block_setup() {

	add_theme_support( 'editor-styles' );
}
add_action( 'after_setup_theme', 'st_count_down_block_setup' );
