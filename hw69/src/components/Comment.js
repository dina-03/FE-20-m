const Comment = ({comment}) => {
    return (
        <div className='card border-1'>
            <div className='card-body'>
                <h4 className='card-title'>comment by: <b className='text-success'>'{comment.name}'</b> </h4>
                <p className='card-text h3'>{comment.comment}</p>
                <p className='card-text'>Note: {comment.note}</p>
            </div>
        </div>
    )
}
export default Comment