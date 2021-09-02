export function renderAddMessageForm(userId){
    return`
    <h4><b>Write new message</b></h4>
    <form name = 'message' action = '#'>
    <input 
        id ='title' 
        class = 'message-title'
        type = 'text'
        name = 'title'
        placeholder = 'Title'
        /><br>
        <textarea 
        id ='text' 
        class = 'textArea'
        type = 'text'
        name = 'text'
        cols="40" rows="2"
        placeholder = 'Text message'></textarea><br>
    <button class = 'add-btn' name = 'button' data-user = ${userId}>add message</button>
    </form>
    `
}

export function renderAddCommentForm(messageId){
    return `    
    <h4>To write new comment enter you name</h4>
    <form name = "userName" action = "#">
            <input
            id="userName"
            class = 'message-title'
            type="text"
            name="uname"
            placeholder="Type name"
        />
        <button class="add-btn" name = "button">Send</button>
    </form>
    <form name = "comment" action = "#" class = "hide">
            <input
            id="message_${messageId}"
            class = 'message-title'
            type="text"
            name="ucomment"
            placeholder="Type comment"
        />
        <button class="add-btn" name ="button">Add comment</button>
    </form>
    <h4 id="not-found-user" class ="hide">no such user!</h4>
`
}