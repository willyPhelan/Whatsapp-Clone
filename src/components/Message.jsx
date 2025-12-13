const Message = ({message, date, email}) => {

    return(

        <div>

        <p> {message} </p>

        <span> {date} </span>

        <span> {email} </span>

        </div>

    ) ; 

}

export default Message ; 