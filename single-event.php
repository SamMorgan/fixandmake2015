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
                    <li <?php if($upcoming_event == $post->ID){ echo 'class="current"'; }?>>
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
    ?>           
    </section>
    <article class="event_wrap">    
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

            <div class="event_title"><?php 
                $event_type = get_field('event_type');
                if($event_type){
                    echo $event_type.', ';
                }
                the_field('date');
                ?>
                <h1><?php the_title();?></h1>
            </div>           
            <?php if ( has_post_thumbnail() ) {
                the_post_thumbnail('full');
            } ?>
            <div class="event_content">
                <div class="main_col">
                    <table class="event_details">
                        <?php 
                            $time = get_field('time');
                            if($time){
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

                    <div class="the_content">
                        <?php the_content();
                        
                        $book = get_field('book');
                        if($book){
                             echo '<span class="tick">✓</span> <a href="' . $book . '" class="book_a_spot">BOOK A SPOT</a>';
                        }
                        ?>                         
                    </div>

                    <?php 
                    $who_title = get_field('who_title');
                    $who_text = get_field('who_text');
                    $who_image = get_field('who_image'); 

                    if($who_title || $who_text || $who_image){ ?>
                        <div class="who">
                            <h3>WHO</h3>
                            <div class="cols2">
                                
                                <?php 
                                    if($who_image){
                                        echo '<div class="col left">'.wp_get_attachment_image( $who_image, 'medium' ).'</div>';
                                    }
                                ?><div class="col right"><?php                               
                                    if($who_title){ echo '<h3>'.$who_title.'</h3>'; } 
                                    echo $who_text;
                                ?>
                                </div>
                            </div>    
                        </div>
                    <?php } ?>    


                </div>
                <div class="right_col">
                    <?php 
                        $what_to_bring = get_field('what_to_bring');
                        if($what_to_bring){ 
                            echo '<div class="what_to_bring"><h4>WHAT TO BRING</h4>'.$what_to_bring.'</div>';
                        }
                        $where = get_field('where');
                        if($where){ 
                            echo '<div class="where"><h4>WHERE</h4>'.$where.'</div>';
                        }
                        $more_info = get_field('more_info');
                        if($more_info){ 
                            echo '<div class="more_info"><h4>MORE INFORMATION</h4>'.$more_info.'</div>';
                        }
                    ?>                                                                                   
                </div>
            </div>    

        <?php endwhile; endif; ?>
    </article>

<?php get_footer(); ?>