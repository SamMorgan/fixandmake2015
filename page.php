<?php get_header(); ?>
<section class="page_wrapper">
	<nav class="sidebar">
		<h4>MORE INFORMATION</h4>
		<?php 
			$mainMenu = array(
			    'container'         => 'false',
			    'menu'              => 'sidebar',
			    'menu_class'        => 'sidebar_menu'
			);
			wp_nav_menu($mainMenu); 
	    ?>
    </nav><article class="page_contents article_content">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
           
            <h1><?php the_title();?></h1>
            <?php 
	            if ( has_post_thumbnail() ) { 
	                the_post_thumbnail('full');
	            } 
	        ?>               
	            
	        <div class="the_content"><?php the_content();?></div> 
        
        <?php endwhile; endif; ?>
    </article>
</section>        
<?php get_footer(); ?>