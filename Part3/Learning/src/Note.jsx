
const Note = ({note, toggleImportant}) => {

  return(
    <li >
      {note.important ? <>! </> : <>_ </>}
      {note.content}
      <button onClick={toggleImportant}>Button</button>
    </li>
  )
}

export default Note;