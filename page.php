<?php
	switch (true) {
	    case is_page('our-work'):
	        get_template_part('template-work-grid');
	        break;
	        
	    case is_tree(5) and has_children($post->ID):
	    	// Is in our work, and has kids, redirect to first child page.
			$pagekids = get_pages("child_of=".$post->ID."&sort_column=menu_order");
	        $firstchild = $pagekids[0];
	        if( $firstchild ) {
	            wp_redirect(get_permalink($firstchild->ID), 301);        
	            exit;
	        }	
	        break;	        
	
	    default:
	        get_template_part('index');
	        break;	        
	}

?>