<?php get_header(); ?>
    
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

        <?php if( have_rows('ticker') ): ?>
        <div class="ticker_wrap">    
            <div id="ticker">
                <ul>            
                    <?php while ( have_rows('ticker') ) : the_row();?>

                        <li><?php the_sub_field('text');?>

                    <?php endwhile;?>
                </ul>
            </div>
        </div>    
        <?php endif;?>

        <?php 
            $css = $post->dragdrop_css;
            echo "<style id='desktopcss' type='text/css'>".$css."</style>";

            $css_tablet = $post->dragdrop_css_tablet;
            echo "<style id='tabletcss' type='text/css'>@media screen and (max-width: 780px){".$css_tablet."}</style>";
        ?>

    <div class="container_wrap">
        <div id="dragdrop_container">
            <?php 
                $i = 1;
                $posts = get_field('events');

                if( $posts ): 
                    foreach( $posts as $post): 
                            
                        setup_postdata($post); 

                        $feat_img = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full' );
                        $padding = 100*($feat_img[2]/$feat_img[1]);?>

                        <div id="dragdrop-item-<?php echo $i;?>" class="dragdrop img">
                            <?php if(!is_user_logged_in()){ echo '<a href="'.get_permalink().'">'; } ?>                      
                                <div class="imgwrap" style="padding-bottom:<?php echo $padding;?>%;"><img src="<?php echo $feat_img[0];?>">
                                    <div class="rollover"><span class="tick">✓</span>
                                        <time><?php the_field('date');?></time>
                                        <div class="excerpt"><?php the_excerpt();?></div>
                                    </div>
                                </div>
                            <?php if(!is_user_logged_in()){ echo '</a>'; } ?>                        
                            <span class="caption"><?php the_title();?></span>                             
                        </div><?php 

                        $i++;
                    endforeach; 
                    wp_reset_postdata();
                endif;

                
                if( have_rows('drag_and_drop_elements') ):

                    while ( have_rows('drag_and_drop_elements') ) : the_row();

                        if( get_row_layout() == 'image' ):

                            $img = get_sub_field('image');
                            $padding = 100*($img['height']/$img['width']);
                            $link = get_sub_field('link');

                            $html = '<div id="dragdrop-item-'.$i.'" class="dragdrop img">';
                            if(!is_user_logged_in() && $link ){ $html .= '<a href="'.$link.'">'; } 
                            $html .= '<div class="imgwrap" style="padding-bottom:'.$padding.'%;"><img src="'.$img['url'].'">';
                            if(!is_user_logged_in() && $link ){ $html .= '</a>'; }
                            $html .= '</div>'; 

                            echo $html;

                        elseif( get_row_layout() == 'text' ):

                            echo '<div id="dragdrop-item-'.$i.'" class="dragdrop">';
                                the_sub_field('text');
                            echo '</div>';
                        
                        elseif( get_row_layout() == 'html' ): 

                            echo '<div id="dragdrop-item-'.$i.'" class="dragdrop">';
                                the_sub_field('html');
                            echo '</div>';                            

                        endif;

                        $i++;

                    endwhile;

                endif;
            ?>        
        </div> 
        <?php if ( is_user_logged_in() ) { ?>
            <div class="tablet_guide"><span>Resize smaller than the blue lines <br>to set positioning for tablet</span></div>
            <form class="dragdrop_positioning" name="dragdrop_positioning" method="post" action="dragdrop_positioning" enctype="multipart/form-data">
                <input type="hidden" value="<?php echo $post->ID;?>" tabindex="20" class="post_id" name="post_id" />
                <input type="hidden" value="" tabindex="20" id="dragdrop_css" name="dragdrop_css" />
                <input type="hidden" value="" tabindex="20" id="dragdrop_css_tablet" name="dragdrop_css_tablet" />
                <input type="submit" value="Save positioning" tabindex="40" class="submit" name="submit" />
                <input type="hidden" name="action" value="dragdrop_positioning" />
                <?php wp_nonce_field( 'new-post' ); ?>
            </form>
        <?php } ?>
        
        <a class="big_button" href="<?php echo home_url('/events/');?>">MORE EVENTS</a>

    </div>

<?php endwhile; endif; ?>
        
<?php get_footer(); ?>