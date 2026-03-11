/* Convert iso date string to M d, Y */
function convertDateString($atts, $content=null, $tag='') {
    $atts = shortcode_atts(
        array(
            'date' => '', // Default date
            'convertTo' => 'F j, Y'  //Default M d, Y output
        ),
        $atts,
        $tag
    );

    return date($atts['convertTo'], strtotime($atts['date']));
}
add_shortcode('convertDate', 'convertDateString');