export const required = value =>{
    if(value) return undefined;

    return 'Field is required';
};
export const maxLength10 = value =>{
    if (value && value.length > 10) return 'Max length is 10 symbols';
    return undefined;
}
