
function handleUser(listUser) {
  const showList = () => {
    let result = null;
    result = listUser.map((value, index) => {
      if (index === listUser.length - 1) {
        return <span>{value}</span>;
      } else {
        return <span>{value}, </span>;
      }
    });
    return result;
  };

  return { showList }
}

export default handleUser;
