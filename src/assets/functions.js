export const scrollToTop = () => {
    const scrollStep = -window.scrollY / (300 / 15);
    const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
};

export default scrollToTop;