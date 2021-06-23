import React from 'react';
import { Modal, TextField, TextareaAutosize, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import FileBase64 from 'react-file-base64';

import { modalState$ } from '../../redux/selectors';
import useStyles from './styles';
import { hideModal, createPost } from '../../redux/actions';

export default function CreatePostModal() {
  const [data, setData] = React.useState({
    title: '',
    content: '',
    attachment: '',
  });
  const dispatch = useDispatch();
  const { isShow } = useSelector(modalState$);
  const classes = useStyles();

  const onClose = React.useCallback(() => {
    dispatch(hideModal());
    setData({
      title: '',
      content: '',
      attachment: '',
    });
  }, [dispatch]);

  const onSubmit = React.useCallback(() => {
    dispatch(createPost.createPostRequest(data));
    console.log({ data });
    onClose();
  }, [dispatch, data, onClose]);

  const body = (
    <div className={classes.paper} id='simple-modal-title'>
      <h2> Create New Post</h2>
      <form className={classes.form}>
        <TextField
          className={classes.title}
          required
          label='title'
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextareaAutosize
          className={classes.textarea}
          rowsMin={10}
          rowsMax={15}
          value={data.content}
          placeholder='Content ...'
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
        <FileBase64
          accept='image/*'
          multiple={false}
          type='file'
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div className={classes.footer}>
          <Button
            variant='contained'
            color='primary'
            component='span'
            fullWidth
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
    </div>
  );
}
