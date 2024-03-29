import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

export default function PostBody(props) {
  return (
    <>
      <strong>
        {props.post.read ? <s>{props.post.title}</s> : props.post.title}
      </strong>
      <Button onClick={props.onRemove}>Remover</Button>
    </>
  );
}

PostBody.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};
