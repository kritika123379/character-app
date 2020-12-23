
export const _setCharactersdata = (data) => {
    console.log('localstorage  ',data);
    if(!!data){
        localStorage.setItem('blog', data);
    }
}

export const _removeCharactersData = () => {
    console.log("remove blog data")
    localStorage.removeItem('blog')
}
