<?php get_header(); ?>
    
    <section class="collaborators cols3">
        
        <?php if (have_posts()) : while (have_posts()) : the_post();

            ?><article class="col">
                <h2><?php the_title();?></h2>            
                <?php 
                    the_post_thumbnail('full');
           
                    the_content();

                        $events = get_posts(array(
                            'post_type' => 'event',
                            'meta_query' => array(
                                array(
                                    'key' => 'collaborators', 
                                    'value' => '"' . get_the_ID() . '"', 
                                    'compare' => 'LIKE'
                                )
                            )
                        ));
                        if( $events ): ?>
                            <h4>EVENTS</h4>
                            <ul>
                            <?php foreach( $events as $event ): ?>
                                <li>
                                    <a href="<?php echo get_permalink( $event->ID ); ?>">
                                        <?php echo get_the_title( $event->ID ); ?>
                                    </a>
                                </li>
                            <?php endforeach; ?>
                            </ul>
                        <?php endif; 
                    ?>                                        
            </article><?php 

        endwhile; endif; ?>

    </section>
        
<?php get_footer(); ?>