<section class="events_list sidebar">
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
        <h4 class="upcoming_events_header">UPCOMING EVENTS</h4>
        <ul>
            <?php 
            foreach ( $upcoming_events as $upcoming_event ) : ?>
                <li <?php if(is_singular('event') && $upcoming_event == $post->ID){ echo 'class="current"'; }?>>
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
        <h4 class="past_events_header">PAST EVENTS</h4>
        <ul>
            <?php 
            foreach ( $past_events as $past_event ) : ?>
                <li <?php if(is_singular('event') &&  $past_event == $post->ID){ echo 'class="current"'; }?>>
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