
const Note = ({note, toggleImportant}) => {

  return(
    <li className="note" >
      {note.important ? <>! </> : <>_ </>}
      {note.content}
      <button onClick={toggleImportant}>Button</button>
    </li>
  )
}

export default Note;