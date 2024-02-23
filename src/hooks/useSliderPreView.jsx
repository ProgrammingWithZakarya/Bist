// A custom hook that determines the number of slides to be displayed per view based on the screen width
const useSlidesPerView = () => {

    // If the code is being executed on the server (typeof window === 'undefined'), we return 3 as the default value
    if (typeof window === 'undefined') {
        return 3;
    }

    // Get the current width of the window
    const width = window.innerWidth;

    // Depending on the width, we return a different number of slides to be displayed per view
    if (width <= 699) {
        return 1; // If the width is less than or equal to 699, display 1 slide per view
    } else if (width >= 700 && width <= 976) {
        return 2; // If the width is between 700 and 976, display 2 slides per view
    } else if (width <= 1200) {
        return 3; // If the width is less than or equal to 1200, display 3 slides per view
    }
    return 4; // If the width is greater than 1200, display 4 slides per view

};

export default useSlidesPerView;
