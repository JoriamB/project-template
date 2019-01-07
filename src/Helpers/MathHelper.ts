class MathHelper {
    /**
     * @param min 
     * @param max 
     * @access public
     * @method
     * Method to return a random number between min and max
     */
    public static randomNumber (min : number, max : number) {
        return Math.round(Math.random() * (max - min) + min)
    };
};