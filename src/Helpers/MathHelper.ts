class MathHelper {
    public randomNumber (min : number, max : number) {
        return Math.round(Math.random() * (max - min) + min)
    };
};