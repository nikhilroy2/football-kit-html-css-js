function drawKit(){
    let shirt_style = $('#shirt-style-select').val();
    $('[data-shirt-style]').addClass("d-none");
    $(`[data-shirt-style="${shirt_style}"]`).removeClass('d-none');
    let primary_shirt_color = $('#primaryColor').val();
    let second_shirt_color = $('#secondaryColor').val();
    let shorts_color = $('#shortsColor').val();
    $('[data-design-name="primary"]').attr({"fill": adjustColor(primary_shirt_color, 20)}) //// Adjust color (lighten/darken
    $('[data-design-name="primary2"]').attr({"fill": primary_shirt_color})
    $('[data-design-name="secondary"]').attr({"fill": second_shirt_color})
    $('[data-design-name="shorts"]').attr({"fill": shorts_color})
}


// Function to lighten or darken a color
function adjustColor(hex, amount) {
    // Remove the '#' if it's present
    hex = hex.replace('#', '');
    // Convert hex to RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Adjust the color
    r = Math.min(255, Math.max(0, r + amount));
    g = Math.min(255, Math.max(0, g + amount));
    b = Math.min(255, Math.max(0, b + amount));

    // Convert back to hex
    const newHex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    return newHex;
}