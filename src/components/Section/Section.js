import PropTypes from 'prop-types';
function Section({ title = '', children }) {
  return (
    <>
      {title}
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
