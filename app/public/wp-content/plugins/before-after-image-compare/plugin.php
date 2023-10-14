<?php
/**
 * Plugin Name: Before After Image Comparison - Block
 * Description: Compare and filter between two images
 * Version: 1.1.5
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: image-compare
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'ICB_PLUGIN_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.1.5' );
define( 'ICB_ASSETS_DIR', plugin_dir_url( __FILE__ ) . 'assets/' );

// Image Compare
class ICBImageCompare{
	function __construct(){
		add_action( 'init', [$this, 'onInit'] );
	}

	function onInit() {
		wp_register_style( 'icb-image-compare-style', plugins_url( 'dist/style.css', __FILE__ ), [], ICB_PLUGIN_VERSION ); // Style
		wp_register_style( 'icb-image-compare-editor-style', plugins_url( 'dist/editor.css', __FILE__ ), [ 'icb-image-compare-style' ], ICB_PLUGIN_VERSION ); // Backend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'icb-image-compare-editor-style',
			'style'				=> 'icb-image-compare-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'icb-image-compare-editor-script', 'image-compare', plugin_dir_path( __FILE__ ) . 'languages' );
	}

	function render( $attributes ){
		extract( $attributes );

		wp_set_script_translations( 'icb-image-compare-script', 'image-compare', plugin_dir_path( __FILE__ ) . 'languages' );

		$className = $className ?? '';
		$blockClassName = "wp-block-icb-image-compare $className align$align";

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' id='icbImageCompare-<?php echo esc_attr( $cId ); ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	} // Render
}
new ICBImageCompare;