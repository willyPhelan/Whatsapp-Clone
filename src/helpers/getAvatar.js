export const getAvatar = email => {
   
    if (!email || email === "Usuario") return "1" ;

    const firstCharCode = email.toUpperCase().charCodeAt(0) ;

    const baseIndex = firstCharCode - 'A'.charCodeAt(0) ; 
    
    const indexInRage = Math.abs(baseIndex % 6) ; 
    
    return indexInRage + 1 ;
}