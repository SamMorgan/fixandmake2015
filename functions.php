<?php
/*
 * Enable post thumbnail support
 */
	add_theme_support( 'post-thumbnails' );

	//set_post_thumbnail_size( 600, 400, true ); // Normal post thumbnails
	//add_image_size( 'banner-thumb', 566, 250, true ); // Small thumbnail size
    add_image_size( 'square-thumb', 256, 256, true ); 
    add_image_size( 'large_thumb', 580, 425, true ); 	


/*
 * Enable Wordpress features
 */
 	
 	// Enable styling of Admin
	//add_editor_style('css/editor-style.css');	
	 
    // Turn on menus
    register_nav_menus(
    	array(
    	  'main_menu' => 'Main Menu',
    	)
	);

    // Set WordPress theme varibles
	if ( ! isset( $content_width ) ) {
		$content_width = 720;
	}
	function set_content_width() {
		global $content_width;
		if ( is_single() ) {
			$content_width = 720;		
		} else {
			$content_width = 720;
		}
	}
	add_action( 'template_redirect', 'set_content_width' );
    
    // Excerpts for pages
    add_post_type_support( 'page', 'excerpt' );    	



function enqueue_scripts_styles() {

    wp_enqueue_script( 'js', get_template_directory_uri() . "/js/min/js-min.js", array('jquery'), filemtime( get_stylesheet_directory() . '/js/min/js-min.js' ), true );
 
    wp_enqueue_style( 'style', get_template_directory_uri() . "/style.css", array(), filemtime( get_stylesheet_directory() . '/style.css' ) );
}
add_action( 'wp_enqueue_scripts', 'enqueue_scripts_styles' );


/*
 * Enqueue Custom Admin Scripts
 */
	//function custom_admin_scripts() {
		//wp_register_script('custom_admin', get_template_directory_uri() . '/js/admin.js', 'jquery', '1.0');
		//wp_enqueue_script('custom_admin');
	//}
	//add_action( 'admin_enqueue_scripts', 'custom_admin_scripts' ); 



    add_filter('body_class','custom_class_names');
    function custom_class_names($classes) {
        
        // Mobile detects
        switch (true) {         
            case wp_is_mobile() :
                $classes[] = 'is-mobile';                
                break;
            
            default :
                $classes[] = 'not-mobile';                            
                break;
        }

        return $classes;
    }


add_action( 'init', 'register_cpt_event' );

function register_cpt_event() {

    $labels = array( 
        'name' => _x( 'Events', 'event' ),
        'singular_name' => _x( 'Event', 'event' ),
        'add_new' => _x( 'Add New', 'event' ),
        'add_new_item' => _x( 'Add New Event', 'event' ),
        'edit_item' => _x( 'Edit Event', 'event' ),
        'new_item' => _x( 'New Event', 'event' ),
        'view_item' => _x( 'View Event', 'event' ),
        'search_items' => _x( 'Search Events', 'event' ),
        'not_found' => _x( 'No events found', 'event' ),
        'not_found_in_trash' => _x( 'No events found in Trash', 'event' ),
        'parent_item_colon' => _x( 'Parent Event:', 'event' ),
        'menu_name' => _x( 'Events', 'event' ),
    );

    $args = array( 
        'labels' => $labels,
        'hierarchical' => true,
        
        'supports' => array( 'title', 'editor', 'excerpt', 'thumbnail' ),
        //'taxonomies' => array( 'category' ),
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        
        
        'show_in_nav_menus' => true,
        'publicly_queryable' => true,
        'exclude_from_search' => false,
        'has_archive' => true,
        'query_var' => true,
        'can_export' => true,
        'rewrite' => true,
        'capability_type' => 'post'
    );

    register_post_type( 'event', $args );
}


function new_excerpt_more( $more ) {
    return '…';
}
add_filter( 'excerpt_more', 'new_excerpt_more' );