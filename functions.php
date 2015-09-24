<?php
/*
 * Enable post thumbnail support
 */
	add_theme_support( 'post-thumbnails' );

	//set_post_thumbnail_size( 600, 400, true ); // Normal post thumbnails
	//add_image_size( 'banner-thumb', 566, 250, true ); // Small thumbnail size
    add_image_size( 'square-thumb', 256, 256, true ); 
    //add_image_size( 'large_thumb', 580, 425, true ); 	


/*
 * Enable Wordpress features
 */
 	
 	// Enable styling of Admin
	//add_editor_style('css/editor-style.css');	
	 
    // Turn on menus
    register_nav_menus(
    	array(
    	  'sidebar' => 'sidebar',
    	)
	);
    
    // Excerpts for pages
    add_post_type_support( 'page', 'excerpt' );    	



function enqueue_scripts_styles() {

    wp_enqueue_script( 'js', get_template_directory_uri() . "/js/min/js-min.js", array(
        'jquery',        
        'jquery-ui-core',
        'jquery-ui-draggable',
        'jquery-ui-resizable'
        ), filemtime( get_stylesheet_directory() . '/js/min/js-min.js' ), true );

    wp_localize_script( 'js', 'sitevars', array(
        'ajaxurl'   => admin_url( 'admin-ajax.php' ),
        'nonce'     => wp_create_nonce( 'nonce' )
        )
    );    
 
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
            'rewrite' => array( 'slug' => 'events' ),
            'capability_type' => 'post'
        );

        register_post_type( 'event', $args );
    }


    add_action( 'init', 'register_cpt_collaborator' );

    function register_cpt_collaborator() {

        $labels = array( 
            'name' => _x( 'Collaborators', 'collaborator' ),
            'singular_name' => _x( 'Collaborator', 'collaborator' ),
            'add_new' => _x( 'Add New', 'collaborator' ),
            'add_new_item' => _x( 'Add New Collaborator', 'collaborator' ),
            'edit_item' => _x( 'Edit Collaborator', 'collaborator' ),
            'new_item' => _x( 'New Collaborator', 'collaborator' ),
            'view_item' => _x( 'View Collaborator', 'collaborator' ),
            'search_items' => _x( 'Search Collaborators', 'collaborator' ),
            'not_found' => _x( 'No collaborators found', 'collaborator' ),
            'not_found_in_trash' => _x( 'No collaborators found in Trash', 'collaborator' ),
            'parent_item_colon' => _x( 'Parent Collaborator:', 'collaborator' ),
            'menu_name' => _x( 'Collaborators', 'collaborator' ),
        );

        $args = array( 
            'labels' => $labels,
            'hierarchical' => true,
            
            'supports' => array( 'title', 'editor', 'thumbnail' ),
            
            'public' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            
            
            'show_in_nav_menus' => true,
            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'has_archive' => true,
            'query_var' => true,
            'can_export' => true,
            'rewrite' => array( 'slug' => 'collaborators' ),
            'capability_type' => 'post'
        );

        register_post_type( 'collaborator', $args );
    }

    function new_excerpt_more( $more ) {
        return '…';
    }
    add_filter( 'excerpt_more', 'new_excerpt_more' );



    add_filter( 'acf/fields/wysiwyg/toolbars' , 'my_toolbars'  );

    function my_toolbars( $toolbars ){
        // Uncomment to view format of $toolbars
        /*
        echo '< pre >';
            print_r($toolbars);
        echo '< /pre >';
        die;
        */

        // Add a new toolbar called "Very Simple"
        // - this toolbar has only 1 row of buttons
        $toolbars['Very Simple' ] = array();
        $toolbars['Very Simple' ][1] = array('link','unlink','bullist');

        // Edit the "Full" toolbar and remove 'code'
        // - delet from array code from http://stackoverflow.com/questions/7225070/php-array-delete-by-value-not-key
        if( ($key = array_search('code' , $toolbars['Full' ][2])) !== false )
        {
            unset( $toolbars['Full' ][2][$key] );
        }

        // remove the 'Basic' toolbar completely
        unset( $toolbars['Basic' ] );

        // return $toolbars - IMPORTANT!
        return $toolbars;
    }

    // save positioning ajax  
    function dragdrop_positioning(){    
        $postid = $_POST['post_id'];
        $dragdrop_css = $_POST['dragdrop_css'];
        $dragdrop_css_tablet = $_POST['dragdrop_css_tablet'];

        if($dragdrop_css)
            update_post_meta($postid, 'dragdrop_css', $dragdrop_css); 

        if($dragdrop_css_tablet)
            update_post_meta($postid, 'dragdrop_css_tablet', $dragdrop_css_tablet);

        exit;
    }
    add_action("wp_ajax_dragdrop_positioning", "dragdrop_positioning"); 
    


    // /**
    //  * Get post excerpt by post ID.
    //  *
    //  * @return string
    //  */
    // function get_post_excerpt_by_id( $post_id ) {
    //     global $post;
    //     $post = get_post( $post_id );
    //     setup_postdata( $post );
    //     $the_excerpt = get_the_excerpt();
    //     wp_reset_postdata();
    //     return $the_excerpt;
    // }       