//Checking the mandatory filling of the input field.
export const required = value => {
    if (value) return undefined;
    else return "Field is required!";
}
//Checking the maximum length of an input field. You can create your own field length validators.
//eg maxLengthCreator50 = maxLengthCreator(50)  -  max length 50 characters
export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length ${maxLength} symbols`;
    else return undefined;
}