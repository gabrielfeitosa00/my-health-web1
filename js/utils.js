const generateId = ()=>{
    return (Date.now().toString(16) + Math.random().toString(16)).replace(/\./g, '')
}

export { generateId }

