<?php get_header(); ?>
    
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

        <?php 
            $css = $post->dragdrop_css;
            echo "<style id='desktopcss' type='text/css'>".$css."</style>";

            $css_tablet = $post->dragdrop_css_tablet;
            echo "<style id='tabletcss' type='text/css'>@media screen and (max-width: 780px){".$css_tablet."}</style>";
        ?>

    <div class="container_wrap">
        <div id="dragdrop_container">
        <?php 
            if( have_rows('front_page_contents') ):

                $i = 1;
                while ( have_rows('front_page_contents') ) : the_row();
                        
                    $img = get_sub_field('image');  
                    $caption = get_sub_field('caption');
                    $link = get_sub_field('link');

                    $padding = 100*($img['height']/$img['width']);

                    $html = '<div id="dragdrop-item-'.$i.'" class="dragdrop img">';
                    if($link && !is_user_logged_in()){ $html .= '<a href="'.$link.'">'; }                        
                    $html .= '<div class="imgwrap" style="padding-bottom:'.$padding.'%;"><img src="'.$img['url'].'"></div>';
                    if($link && !is_user_logged_in()){ $html .= '</a>'; }                        
                    if($caption){ $html .= '<span class="caption">'.$caption.'</span>'; }                              
                    $html .= '</div>';

                    echo $html;
                                                                               
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
        

    </div>   
    <?php endwhile; endif; ?>
        
<?php get_footer(); ?>