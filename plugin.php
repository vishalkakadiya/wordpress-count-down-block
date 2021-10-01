<?php
/**
 * Plugin Name: Count Down Block
 * Plugin URI: https://github.com/vishalkakadiya/wordpress-count-down-block
 * Description: Count Down Block
 * Author: Vishal Kakadiya
 * Author URI: https://github.com/vishalkakadiya
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package cdb
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
