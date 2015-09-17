<?php get_header();?>
<div class="events">
    <section class="events_list">
    <?php 
    $date = date('Ymd');

        $upcoming_events = get_posts(array(
            'numberposts'   => -1,
            'post_type'     => 'event',
            'fields'        => 'ids',
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
        if($upcoming_events) : ?>
            <h4>UPCOMING EVENTS</h4>
            <ul>
                <?php 
                foreach ( $upcoming_events as $upcoming_event ) : ?>
                    <li>
                        <span><?php 
                            the_field('date',$upcoming_event);

                            $event_type = get_field('event_type',$upcoming_event);
                            if($event_type){
                                echo ' ('.$event_type.')';
                            }
                        ?></span>    
                        <br>
                        <a href="<?php echo get_permalink($upcoming_event);?>"><?php echo get_the_title($upcoming_event);?></a>
                    </li>
                <?php endforeach;?> 
            </ul>
        <?php endif;

        $past_events = get_posts(array(
            'numberposts'   => -1,
            'post_type'     => 'event',
            'fields'        => 'ids',
            'meta_query'    => array(
                //'relation'      => 'AND',
                array(
                    'key'       => 'date',
                    'compare'   => '<=',
                    'value'     => $date,
                ),
            ),
            'orderby' => 'meta_value',
            'order' => 'ASC'        
        ));
        if($past_events) : ?>
            <h4>PAST EVENTS</h4>
            <ul>
                <?php 
                foreach ( $past_events as $past_event ) : ?>
                    <li>
                        <span><?php 
                            the_field('date',$past_event);

                            $event_type = get_field('event_type',$past_event);
                            if($event_type){
                                echo ' ('.$event_type.')';
                            }
                        ?></span>    
                        <br>
                        <a href="<?php echo get_permalink($past_event);?>"><?php echo get_the_title($past_event);?></a>
                    </li>
                <?php endforeach;?> 
            </ul>
        <?php endif;?>                
    </section>
    <section class="events_blocks">    
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

        foreach ( $posts as $post ) : setup_postdata( $post ); ?>


            <div class="event_block">
             
                <?php if ( has_post_thumbnail() ) { ?>
                    <a href="<?php the_permalink();?>" class="imgwrap">
                        <?php the_post_thumbnail('large_thumb');?>
                    </a>
                <?php } ?>
                
                <h3><?php the_title();?></h3>

                <?php the_excerpt();?>
                <table class="event_details">
                    <?php 
                        $time = get_field('time');
                        if($when){
                            echo '<tr><td class="title">TIME</td><td>'.$time.'</td></tr>';
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

                        $book = get_field('more_link');
                        if($book){
                             echo '<a href="' . $morelink . '">BOOK</a>';
                        }                                       
                    ?>
                </table>
  
            </div>

        <?php endforeach; 
        wp_reset_postdata();?>

    </section>

<?php get_footer(); ?>