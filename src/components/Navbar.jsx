const Navbar = () => {
  return (
    <div className="flex justify-evenly max-w-full bg-green-300 h-14 items-center">
      <div>bulkfruits&vegitables</div>
      <div className="flex justify-center gap-2">
        <li>home</li>
        <li>about</li>
        <li>link</li>
      </div>
      <div  className="flex justify-center gap-5">
        <li>login</li>
        <li>signup</li></div>
    </div>
  );
};

export default Navbar;
