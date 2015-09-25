<?php get_header();?>
<div class="events">
    <?php 
        $date = date('Ymd');
        include 'includes/events-sidebar.php';
    
    ?><section class="events_blocks">    
        <?php $posts = get_posts(array(
            'numberposts'   => -1,
            'post_type'     => 'event',
            'meta_query'    => array(
                //'relation'      => 'AND',
                array(
                    'key'       => 'date',
                    'compare'   => '>=',
                    'value'     => $date,
                ),
            ),
            'orderby' => 'meta_value',
            'order' => 'ASC'        
        ));

        foreach ( $posts as $post ) : setup_postdata( $post ); 


            ?><div class="event_block">
             
                <?php if ( has_post_thumbnail() ) { ?>
                    <a href="<?php the_permalink();?>">
                        <div class="imgwrap thumb">
                            <?php the_post_thumbnail('medium');?>
                        </div>    
                    </a>
                <?php } ?>
                
                <h3><?php the_title();?></h3>

                <?php the_excerpt();?>
                <table class="event_details">
                    <?php 
                        if( have_rows('times') ){
                            echo '<tr><td class="title">TIME</td><td>';
                                while ( have_rows('times') ) : the_row();
                                    echo get_sub_field('time').'<br>';
                                endwhile;
                            echo '</td></tr>';
                        }

                        $date = get_field('date');
                        if($date){
                            echo '<tr><td class="title">DATE</td><td>'.$date.'</td></tr>';
                        }   

                        $place = get_field('place');
                        if($place){
                            echo '<tr><td class="title">PLACE</td><td>'.$place.'</td></tr>';
                        }

                        $cost = get_field('cost');
                        if($cost){
                            echo '<tr><td class="title">COST</td><td>'.$cost.'</td></tr>';
                        }                                                                     
                    ?>
                </table>

                <?php 
                    $book = get_field('book');
                    if($book){
                         echo '<p class="book"><a href="' . $book . '">BOOK</a></p>';
                    }
                ?>       

            </div><?php 

        endforeach; 
        wp_reset_postdata();?>

    </section>
</div>
<?php get_footer(); ?>