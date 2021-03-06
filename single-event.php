<?php get_header();?>
<div class="events">
    <?php 
        $date = date('Ymd');
        include 'includes/events-sidebar.php';
    
    ?><article class="event_wrap article_content">    
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

            <div class="event_title"><?php 
                the_field('date');
                $event_type = get_field('event_type');
                if($event_type){
                    echo '('.$event_type.') ';
                }                
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

                            // $book = get_field('book');
                            // if($book){
                            //      echo '<a href="' . $book . '">BOOK</a>';
                            // }                                       
                        ?>
                    </table>

                    <div class="the_content">
                        <?php the_content();
                        
                        $book = get_field('book');
                        if($book){
                             echo '<p class="book"><span class="tick">✓</span> <a href="' . $book . '">BOOK A SPOT</a></p>';
                        }
                        ?>                         
                    </div>


                    <?php 
                    $posts = get_field('collaborators');

                    if( $posts ): ?>
                        <div class="who">
                        <h3>Collaborators</h3>                     
                        <?php foreach( $posts as $post) : setup_postdata($post); ?> 
                            <div class="cols2">    
                                <div class="col left">
                                    <?php the_post_thumbnail('full');?>
                                </div>
                                <div class="col right">                              
                                    <h3><?php the_title();?></h3> 
                                    <?php the_content();?>
                                </div>
                            </div>                            
                        <?php endforeach; 
                        wp_reset_postdata();?>
                        </div>
                    <?php endif;?>

                    <?php $tickets = get_field('tickets');
                    if($tickets){ ?>
                        <div class="tickets">
                            <h3>Tickets</h3>
                            <?php echo $tickets;?>
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
</div>
<?php get_footer(); ?>