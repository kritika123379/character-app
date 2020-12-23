
export const _setCharactersdata = (data) => {
    console.log('localstorage  ',data);
    if(!!data){
        localStorage.setItem('blog', data);
    }
}

export const _removeCharactersData = () => {
    localStorage.removeItem('blog')
}
