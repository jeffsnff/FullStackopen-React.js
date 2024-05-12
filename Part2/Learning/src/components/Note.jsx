
const Note = ({note, toggleImportant}) => {

  return(
    <li className="note" >
      {note.important ? <>! </> : <>_ </>}
      {note.content}
      <button onClick={toggleImportant}>Change Importance</button>
    </li>
  )
}

export default Note;