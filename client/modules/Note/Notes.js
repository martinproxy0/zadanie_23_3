import React, { PropTypes } from 'react';
import Note from './Note';
import Edit from '../../components/Edit';

import styles from './Notes.css';

const Notes = (props) => {
  const { notes, laneId, editNote, updateNote, deleteNote } = props;
  return (<ul className={styles.notes}>{notes.map((note) =>
    <Note
      id={note.id}
      key={note.id}
      laneId={laneId}
    >
      <Edit
        editing={note.editing}
        value={note.task}
        onValueClick={() => editNote(note.id)}
        onUpdate={(task) => updateNote({
          ...note,
          task,
          editing: false,
        }, laneId
        )}
        onDelete={() => deleteNote(note.id, laneId)}
      />
    </Note>
  )}</ul>);
};

Notes.propTypes = {
  deleteNote: PropTypes.func,
  updateNote: PropTypes.func,
  laneId: PropTypes.string,
  editNote: PropTypes.func,
  notes: PropTypes.array,
};

export default Notes;
