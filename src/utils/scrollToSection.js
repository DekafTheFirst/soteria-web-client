const scrollToSection = (ref) => {
    if (ref && ref.current) {
        ref.current.scrollTo({ animated: true });
    }
};


export default scrollToSection;