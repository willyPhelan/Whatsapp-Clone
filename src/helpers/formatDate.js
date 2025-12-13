export const formatDate = messageDate => {

    const date = new Date(messageDate) ; 

    let hours = date.getHours(); 
    let minutes = date.getMinutes() ;

    let time = hours + ":" + minutes ; 

    const option = { 

        month: 'long' , day: 'numeric' 
    }
    
    
    const newDate = date.toLocaleDateString('en-US', option)

    console.log(newDate) ; 

    return newDate + " - " + time ; 
}