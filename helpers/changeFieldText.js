const changeFieldText = (text) => {
  switch (text) {
    case 'pending':
      return 'processing';
    case 'approve':
      return 'accepted';
    case 'decline':
      return 'decline';
    default:
      return '';
  }
};

export default changeFieldText;
