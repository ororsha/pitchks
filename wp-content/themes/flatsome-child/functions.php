<?php
// Add custom Theme Functions here

function child_theme_enqueue_assets() {
  $version = '1.0'; // Replace with your desired version number

  // Enqueue your custom CSS file
  wp_enqueue_style( 'child-custom-css', get_stylesheet_directory_uri() . '/assets/css/custom-rtl.css', array(), $version, 'all' );

  // Enqueue your custom JavaScript file
  wp_enqueue_script( 'child-custom-js', get_stylesheet_directory_uri() . '/assets/your-custom.js', array(), $version, true );
}

add_action( 'wp_enqueue_scripts', 'child_theme_enqueue_assets' );

