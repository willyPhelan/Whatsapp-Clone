export const formatDate = messageDate => {

    const date = new Date(messageDate) ; 

    let hours = date.getHours(); 
    let minutes = date.getMinutes() ;

    const formattedHours = String(hours).padStart(2, '0') ;
    const formattedMinutes = String(minutes).padStart(2, '0') ;
    
    let time = formattedHours + ":" + formattedMinutes ;

    const option = { 

        month: 'long' , day: 'numeric' 
    }
    
    
    const newDate = date.toLocaleDateString('en-US', option)

    console.log(newDate) ; 

    

    return time ; 
}