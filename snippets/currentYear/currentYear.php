/* Current year shortcode */
function currentYear() {
    return date('Y');
}
add_shortcode('year', 'currentYear');
