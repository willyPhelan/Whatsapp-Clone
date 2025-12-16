export const getAvatar = email => {
   
    const firstCharCode = email.toUpperCase().charCodeAt(0) ;

    const baseIndex = firstCharCode - 'A'.charCodeAt(0) ; 
    
    const indexInRage = baseIndex % 6; 
    
    return indexInRage + 1 ;
}