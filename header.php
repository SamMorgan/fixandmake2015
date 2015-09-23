<!DOCTYPE html>
<html <?php language_attributes(); ?> prefix="og: http://ogp.me/ns#">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <title><?php bloginfo('name'); ?><?php wp_title(); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">     
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/images/favicon.png" />
    <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/images/icon-touch.png"/> 
    
    <!--Make Microsoft Internet Explorer behave like a standards-compliant browser. http://code.google.com/p/ie7-js/-->
    <!--[if lt IE 9]>
        <script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
    <![endif]-->
    
    <?php get_template_part('part-facebook-tags'); ?>
    <?php wp_head();?>
</head>
<body <?php body_class(); ?>>
	<?php include_once("svg-defs.svg");?> 

    <div class="page-wrap">
	<header>
	
    <div class="mobile_header"><span class="heading">FIX AND MAKE</span></div>
    <a id="hamburger" href="#"><span></span></a>
    
    <nav>
		<ul>
			<li><h1><a href="<?php bloginfo('url'); ?>"><?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?></a></h1></li>
			<li <?php if(is_post_type_archive('event') || is_singular('event')){ echo 'class="current"';}?>><a href="<?php echo home_url( '/events/' );?>"><span class="tick">✓</span>EVENTS</a></li>
			<li <?php if (is_post_type_archive('collaborator')){ echo 'class="current"';}?>><a href="<?php echo home_url( '/collaborators/' );?>"><span class="tick">✓</span>COLLABORATORS</a></li>
			<li><a href="#"><span class="tick">✓</span>ABOUT</a></li>
            <li><a href="#"><span class="tick">✓</span>VISIT</a></li>            
		</ul>
    </nav>	
	    
	</header>