import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
  return <p>{message}</p>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: "Oops, something went wrong, please reload the page!😢",
};

export default ErrorMessage;