function Header(props) {
  return <header className="flex p-4 sm:p-8 justify-between items-center h-20 w-full bg-white">{props.children}</header>;
}

export default Header;
